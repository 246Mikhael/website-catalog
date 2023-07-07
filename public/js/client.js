//import { translater } from "../../translater.js";


let categSelect = document.querySelector("#categ");
let subCategSelect = document.querySelector("#subCateg");

let categories = [
    {name: 'news', values:['политика', 'криминал', 'экономика', 'технологии']},
    {name:'sport',values: ['футбол', 'хоккей', 'баскетбол', 'боевые искусства','другое']},
    {name:'hobby', values: ['компьютерные игры', 'настольные игры', 'творчество', 'путешествия']},
    {name:'learning',values: ['программирование', 'школьная программа', 'музыка', 'рисование']},
];


for(categ of categories){
    let opt = document.createElement('option');
    opt.value = translater(categ.name);
    opt.innerHTML = translater(categ.name);
    categSelect.appendChild(opt);
};

for(subCateg of categories[0].values){
    let opt = document.createElement('option');
    opt.value = subCateg;
    opt.innerHTML = subCateg;
    subCategSelect.appendChild(opt);
};

categSelect.addEventListener('change', function () {
    subCategSelect.innerHTML = "";
   
    let index = categories.findIndex( item => item.name ===  translater(this.value));
     
    for(subCateg of categories[index].values){
        let opt = document.createElement('option');
        opt.value = subCateg;
        opt.innerHTML = subCateg;
        subCategSelect.appendChild(opt);
    }
});


function translater (word){
    if(/[a-zA-Z]/.test(word)){
       if (word == 'news'){
           word = 'новости'
       }
       if (word == 'sport'){
           word = 'спорт'
       }if (word == 'hobby'){
           word = 'хобби'
       }if (word == 'learning'){
           word = 'обучение'
       }
    } else {
        if (word == 'новости'){
            word = 'news'
        }
        if (word == 'спорт'){
            word = 'sport'
        }if (word == 'хобби'){
            word = 'hobby'
        }if (word == 'обучение'){
            word = 'learning'
        }
    }
    return word;
}



