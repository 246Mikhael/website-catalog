import express from 'express'
import expressHandlebars from 'express-handlebars'
import mongodb, { ObjectId } from 'mongodb'
import bodyParser from 'body-parser'
import __dirname from './__dirname.js'
import { translater, 
         getDomain, 
         getSubCateg, 
         getCateg,
         sortSites } from './public/js/modules/functions.js'
import fileUpload from 'express-fileupload'
import cookieParser from 'cookie-parser'
import session from 'express-session'
import flash from 'connect-flash'


let mongoClient = new mongodb.MongoClient( 'mongodb://localhost:27017/', {
    useUnifiedTopology: true
})

const handlebars = expressHandlebars.create({
    defaultLayout: 'main',
    extname: 'hbs',
    helpers: {
        translater: translater
    }
});

let app = express();

app.engine('hbs', handlebars.engine);
app.set('view engine', 'hbs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/public'));

app.use(fileUpload({
    defCharset: 'utf8',
    defParamCharset: 'utf8'
}));

app.use(cookieParser('secret key'));
app.use(session({ 
    secret: 'qwerty',
    cookie: { maxAge: 3600 * 24 },
    saveUninitialized: false,
    resave: false 
}));
app.use(flash());


//-------------------------------------------------------------

let usersData = [];

const connect = async () => {
    try {
       await mongoClient.connect();
       let coll = mongoClient.db('sites').collection('websites');

       let password;
       let userName;
       let invalidNameOrPasswordText = "";

       app.get('/', async (req, res) => {
          res.render('login', { text: invalidNameOrPasswordText } );
          invalidNameOrPasswordText = "";
       })


       app.post('/', async (req, res) => {
          password = req.body.password;
          userName = req.body.userName;

          let res1 = await coll.find({ 
            userName: userName, 
            password: password 
          }).toArray();  
        
          if (res1[0]) {
             req.flash('message', `${userName}, здраствуйте!`);
             res.redirect('/categ');
          } else {
             invalidNameOrPasswordText = " имя или пароль не верны";
             res.redirect('/');
          }
       })


       let textExistName = "";


       app.get('/reg', async (req, res) => {
         res.render('reg', { text: textExistName});
         textExistName = '';
       })


       app.post('/reg', async (req, res) => {
         let res1 =await coll.findOne({ userName:  req.body.userName });
         
         if (res1) {
            textExistName = 'Такое имя уже существует!';
            res.redirect('/reg');
         } else {
            let newUser = {
                "userName": req.body.userName,
                "password": '',
                "category": '',
                "subCategory": '',
                "name": '',
                "domain": '',
                "description": '',
                "screenShot": '',
                "link": '',
            } 
            await coll.insertOne(newUser);

            password = req.body.password;
            userName = req.body.userName;

            usersData.push({
                'userName': req.body.userName,
                'password': req.body.password,   
            });

            req.flash('message', 'Добавьте первый сайт!');
            res.redirect('/categ');
         }
       })

       
       let showlogoutWindowFlag = false;
       let show1 = true;

        
       app.get('/categ', async (req, res) => {
            let userWebsites = await coll.find({
                userName: userName, 
                password: password
            }).toArray();

            let message =  req.flash('message');

            res.render('categories', {
                categories: getCateg(userWebsites),
                show: showlogoutWindowFlag,
                show1: show1,
                message: message[0]
            });
            showlogoutWindowFlag = false;
        });


        app.get('/logout', async (req, res) => {
            showlogoutWindowFlag = true;
            res.redirect('/categ');
        });


        let currentCategName;


        app.get('/categ/:name', async (req, res) => {
            currentCategName = req.params.name;
             
            let coll1 = await coll.find({
                category: currentCategName,
                 userName: userName, 
                 password: password
                }).toArray();

            res.render('subCategories', {   
                sitesOfCategory: getSubCateg(coll1),
            });
        }); 

       
        let deletedName;
        let currentSubCategName;
        
  
        app.get('/subcateg/:name1', async (req, res) => {
            currentSubCategName= req.params.name1;
            let message =  req.flash('message');

            let coll2 = await coll.find({
                category: currentCategName, 
                subCategory: currentSubCategName,
                userName: userName, 
                 password: password
            }).toArray();
             
            if (coll2[0]) {
                let sortingSites = sortSites(coll2)
        
                res.render('sites', {
                    sites: sortingSites,
                    category: currentCategName,
                    message: message[0]
                });
            } else {
                req.flash('message', `сайт ${deletedName} удален`)
                res.redirect('/categ')
            }
        });  

        
        app.get('/edit',async (req, res) => {
            let id = req.query.id;
            let currentValue = req.query.curr;
            let field = req.query.field;
            let name = req.query.name;

            if (field === 'link') {
               await coll.updateOne(
                 { _id: new ObjectId(id) },
                 { $set: {
                    link: currentValue, 
                    domain: getDomain(currentValue) }}
                );
            } else {
                await coll.updateOne(
                    { _id: new ObjectId(id) }, 
                    { $set: {[field]: currentValue} });
            }
            
            req.flash('message', `данные ${ name} сайта изменены`);
            res.redirect(`/subcateg/${currentSubCategName}`);
        })

         
        app.get(
            '/subcateg/:name1/:name2/:name3/', async (req, res) => {
            let currentSubCategName = req.params.name1;
            let deleteId = req.params.name2;
            deletedName = req.params.name3;
           
           await coll.deleteOne({ _id: new ObjectId(deleteId) });

           let path = '/subcateg/' + currentSubCategName + '/';

           req.flash('message', `сайт ${deletedName} удален`);

           res.redirect(path);
        });

    
        app.get('/add', function(req, res) {
            res.render('addPage');
        });


        app.post('/add', async (req, res) => {

            let fileName;

            if (req.files) {
                let file = req.files.upload;
                fileName = file.name;

                file.mv('./public/images/screen_shots/' + fileName, function(err) {
                    if (err) {
                        console.log(err)
                    } else {
                        console.log('file uploaded')
                    }
                })
            } 

            let newSite = {
                "userName": userName,
                "password": password,
                "category": req.body.categ,
                "subCategory": req.body.subCateg,
                "name": req.body.name,
                "domain": getDomain(req.body.link),
                "description": req.body.descr,
                "screenShot": '/images/screen_shots/' + fileName,
                "link": req.body.link,
            }

            await coll.insertOne(newSite);

            req.flash('message', `сайт ${req.body.name} успешно добавлен!`)

           res.redirect('/categ');
        })       
        
    }catch (err) {
        console.log(err)
    }
}


connect();

app.listen(3000, function() {
    console.log('running');
})
