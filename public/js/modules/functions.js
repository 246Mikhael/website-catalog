
let words = {
    'news': 'новости',
    'sport': 'спорт',
    'hobby': 'хобби',
    'learning': 'обучение',
    'politic': 'политика',
    'economic': 'экономика',
    'technology': 'технологии',
    'criminal': 'криминал',
    'football': 'футбол',
    'ice_hockey': 'хоккей',
    'basketball': 'баскетбол',
    'fighting': 'боевые искусства',
    'another': 'другое',
    'computer_games': 'компьютерные игры',
    'table_games': 'настольные игры',
    'creativity': 'творчество',
    'traveling': 'путешествия',
    'programming': 'кодинг',
    'school': 'школьная программа',
    'music': 'музыка',
    'drawing': 'рисование',
}


export function translater (word) {
    let word1;
    if ( /[a-zA-Z]/.test(word) ) {
       word1 = words[word];
    } else {
       word1 = Object.keys(words).find(key => words[key] === word);
    }
    return word1;
}


export function getCateg(arr) {
    let arr1 = [];
    for(let elem of arr){
      if( !arr1.includes(elem.category) ) {
         arr1.push(elem.category);
        }
     }
     return arr1;
 } 


export function getSubCateg(arr) {
       let arr1 = [];
       for (let elem of arr) {
         if( !arr1.includes(elem.subCategory) ) {
            arr1.push(elem.subCategory);
           }
        }
        return arr1;
  } 


export function getDomain(url) {
    let a = new URL(url);
    let domain = a.hostname;
    return domain;
}


export function checkInputs (val1, val2, elem){
    if (val1.length && val2) {
      elem.classList.remove('disable-button');
    } else {
      elem.classList.add('disable-button');
    }
  }

  
export function checkValid(obj, elem) {
  
      if ( Object.keys(obj).length === 4 ) {
          elem.classList.remove('disable-button');
      } else {
          elem.classList.add('disable-button');
      }
  }

  
 export function isValidUrl(url) {
    var obj = /^https?:\/\//i;
    return obj.test(url);
  }



export function getLiteralNum (num) {

  let str;

  if (num == 1){
    str = 'first-';
  }
  if (num == 2){
    str = 'second-';
  }
  if (num == 3){
    str = 'third-';
  }
  if (num == 4){
    str = 'fourth-';
  }
  return str;
}


export function getFirstNameByChar(arr, char) {
  let result;
  for (let elem of arr) {
    if (elem[0] === char) {
      result = elem;
      break;
    } 
  }
  return result;
}


export function getUniqFirstChar(arr) {
  let arr1 = [];

  for (let elem of arr) {
    if (arr1.indexOf(elem[0]) == -1){
      arr1.push(elem[0])
    }
  } return arr1;
}


export function deleteFleshMessage() {
  let messageDiv = document.querySelector('#login-message') ||
       document.querySelector('#edit-site-message');
  let num;
  if (messageDiv) {
    if(messageDiv.textContent === "для завершения регистрации добавьте сайт!"){
      num = 10000;
    } else {
      num = 5000;
    }
      setTimeout( function() {
          messageDiv.parentElement.removeChild(messageDiv)
      }, num)
  }
}


export function sortSites (arr) {
  let arrNums = [];
  let arrCyrrillic = [];
  let arrLatin = [];
      for ( let obj of arr) {
      if (!isNaN(parseInt(obj.name))){
         arrNums.push(obj);
      }
      if (/[а-яА-ЯЁё]/.test(obj.name)) {
          arrCyrrillic.push(obj);
      }
      
      if (/[a-zA-Z]/.test(obj.name)) {
          arrLatin.push(obj);
      } 
      
  }
  arrNums.sort((a,b) => Number(a.name[0]) - Number(b.name[0]));
  arrLatin.sort((a, b) => a.name[0].toLowerCase().localeCompare(b.name[0].toLowerCase()));
  arrCyrrillic.sort((a, b) => a.name[0].toLowerCase().localeCompare(b.name[0].toLowerCase()));

  let result = arrNums.concat(arrCyrrillic, arrLatin);

  return result;
}
