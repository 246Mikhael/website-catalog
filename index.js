import express from 'express'
import expressHandlebars from 'express-handlebars'
import mongodb from 'mongodb'
import bodyParser from 'body-parser'
import __dirname from './__dirname.js'
import { translater } from './translater.js'


let mongoClient = new mongodb.MongoClient('mongodb://localhost:27017/', {
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

//-------------------------------------------------------------

const connect = async () => {
    try {
       await mongoClient.connect();
       let coll = mongoClient.db('sites').collection('websites');
        
       app.get('/categ', async (req, res) => {
            let categories = await coll.distinct('category');
            res.render('categories', {
            categories: categories });
    });

        let currentCategName;

        

        app.get('/categ/:name', async (req, res) => {  //динамически создавать маршрут с текущей категорией
            currentCategName = req.params.name;
            let coll1 = await coll.find({category: currentCategName}).toArray();
            res.render('subCategories', {   
              //  categ: currentCategName,
                sitesOfCategory: getSubCateg(coll1),
            });
        }); 

       
  
        app.get(
            '/subcateg/:name1', async (req, res) => {  //динамически создавать маршрут с текущей подкатегорией
            let currentSubCategName = req.params.name1;
            let coll2 = await coll.find({category: currentCategName, subCategory: currentSubCategName}).toArray();
            res.render('sites', {
                sites: coll2,
            });
        });      
   
    
        app.get('/add', function (req, res) {
            res.render('addPage');
        });


        app.post('/add', async (req, res) => {

            let newSite = {
                "category": req.body.categ,
                "subCategory": req.body.subCateg,
                "name": req.body.name,
                "domain": req.body.categ,
                "description": req.body.descr,
                "icon": "",
                "screenShot": "",
                "link": req.body.link,
            }
            
    
            await coll.insertOne(newSite);
           res.redirect('/categ')
        })
        
    }catch (err) {
        console.log(err)
    }
}

    function getSubCateg(arr) {
       let arr1 = [];
       for(let elem of arr){
         if(!arr1.includes(elem.subCategory)){
            arr1.push(elem.subCategory)
           }
        }
        return arr1;
    }

    function getKeys (arr) {
        let arr1 = [];

        for (let elem of arr){
            arr1.push((Object.keys(elem)).join(''))
        }
        return arr1;
    }    


//--------------------------------------------------------------------

connect();

app.listen(3000, function () {
    console.log('running')
})
