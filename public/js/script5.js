import { getFirstNameByChar,
         getUniqFirstChar, 
         deleteFleshMessage } from "./modules/functions.js";

let nameEditingSite = document.querySelectorAll('.name-editing-site');
let descrEditingSite = document.querySelectorAll('.descr-editing-site');
let linkEditingSite = document.querySelectorAll('.link-editing-site');
let divWithId = document.querySelectorAll('.div-with-id');

editFieldsOfSite (
  nameEditingSite, 
  divWithId, 
  'name');

deleteFleshMessage();

let sitesWrap = document.querySelector('#sites-wrap')
let siteWraps = document.querySelectorAll('.site-wrap');
let firstCharacterNav;
let main = document.querySelector('main');
let names = [];

let elem;
let targetWrap;
let targetElem;
let targetElemName;
let selectValue;
let select;


for (let elem of siteWraps) {
    
    let nameOfSite = elem.querySelector('.name-editing-site');
    let linkAndImageWrap = elem.querySelector('.sites-page-link-and-img-wrap')
    let tooltipName = document.querySelector('#edit-name-tooltip');
    let descrTooltip = elem.querySelector('#descr-tooltip');
    let childrenOfWrap = elem.children;
    

    names.push(nameOfSite.innerHTML);
     
    elem.addEventListener('mouseover', function() {
        elem.classList.add('site-wrap-active')
    })
    elem.addEventListener('mouseout', function() {
        elem.classList.remove('site-wrap-active')
    })


    let deleteButton = elem.querySelector('.delete-site');
    

    deleteButton.addEventListener('mouseenter', function() {
    
       elem.classList.add('is-delete-wrap');
     
       for (let child of childrenOfWrap) {
         if (!child.classList.contains('delete-site')){
           child.classList.add('is-delete');
          }
       }
    })

    deleteButton.addEventListener('mouseout', function(event) {
      elem.classList.remove('is-delete-wrap');
     
       for (let child of childrenOfWrap) {
           child.classList.remove('is-delete');
       }
    })

    addToolip(nameOfSite, tooltipName)
    addToolip(linkAndImageWrap, tooltipName)

}


let width = document.documentElement.offsetWidth;

if (width < 980) {

  for (let i = 0; i < 6; i++) {

    let emptyWrap = document.createElement('div');
    emptyWrap.classList.add('empty-wrap');
    sitesWrap.appendChild(emptyWrap);
 }

  firstCharacterNav = document.createElement('div');
  firstCharacterNav.id = "first-character";
  main.insertAdjacentElement('afterBegin', firstCharacterNav);


  setCharacter(600, firstCharacterNav); 
     
  window.addEventListener('scroll', function (){
      setCharacter(200, firstCharacterNav);
  })
  
  firstCharacterNav.addEventListener('click', createSelect);
  
  
  document.onclick = function(event) {
      if (event.target.id !== 'first-character' && 
      event.target.id !== 'first-char-select' &&
      firstCharacterNav.contains(select)) {
          firstCharacterNav.removeChild(select);
          firstCharacterNav.innerHTML = targetElemName[0];
          firstCharacterNav.addEventListener('click', createSelect);
      }
  } 
  
}




//----------------------------------------------

function addToolip(targetElem, toolt) {
  
  targetElem.addEventListener('mouseover', function() {
      if (targetElem.classList.contains('name-editing-site')) {
        this.classList.add('over-name');
      } 
      if (targetElem.classList.contains('sites-page-link-and-img-wrap')) {
        let description = targetElem.parentElement.querySelector('#descr-tooltip');
        toolt.textContent = description.textContent;
      }
   })
  

  targetElem.addEventListener('mousemove', function(event) {

    toolt.classList.add('tooltip-visible');
    let xCoord = event.clientX;
    let yCoord = event.clientY;
    let scrollX = window.scrollX;
    let scrollY = window.scrollY;

    let tooltCoords = toolt.getBoundingClientRect();
    let tooltCenterX = (tooltCoords.right - tooltCoords.left) / 2;

    toolt.style.left = xCoord + scrollX - tooltCenterX + 20 +'px';
    toolt.style.top = yCoord + scrollY + 100 + 'px';

  
   })
  
   targetElem.addEventListener('mouseout', function() {
    this.classList.remove('over-name');
    toolt.classList.remove('tooltip-visible');
    toolt.textContent = 'двойной клик для редактирования';
   })
}


function editFieldsOfSite (
  divs, 
  ids, 
  field, 
  names) {

  for (let i = 0; i < divs.length; i++) {
 
     divs[i].addEventListener('dblclick', function() {
         
         let input = document.createElement('input');
         let valueOfInput = this.innerHTML
         input.value = valueOfInput;
         input.classList.add('editing-field-input')
         this.innerHTML = '';
         input.addEventListener('mouseout', function() {
            divs[i].textContent = this.value;
            this.parentElement.removeChild(this);

            if (valueOfInput != this.value) { 
              if (names) {
                 window.location.href = 
                `/edit/?id=${ids[i].innerHTML}&field=${field}&curr=${this.value}&name=${names[i].innerHTML}`;
              } else {
                window.location.href = 
                `/edit/?id=${ids[i].innerHTML}&field=${field}&curr=${this.value}&name=${this.value}`; 
              }
              
            }   
         })
         this.parentElement.insertBefore(input, this)
      })
   }
}


function setCharacter(yPoint, elemWithChar){
  
    elem = document.elementFromPoint(200, yPoint);
    targetWrap = elem.closest('.site-wrap'); 
    
   if (targetWrap) {
        targetElem = targetWrap.querySelector('.name-editing-site');
        targetElemName = targetElem.innerHTML;
        elemWithChar.innerHTML = targetElemName[0];
   }
}

function createSelect() {
  
    firstCharacterNav.innerHTML = "";
    select = document.createElement('select');
    select.id = "first-char-select"; 

    let uniqFirstChars = getUniqFirstChar(names);

    for ( let i = 0; i < uniqFirstChars.length; i++) {
      
      let option = document.createElement('option');
      option.value = uniqFirstChars[i][0];
      option.innerHTML = uniqFirstChars[i];

      if (uniqFirstChars[i] === targetElemName[0]) {
        option.selected = true;
      }
     
      select.appendChild(option);
    } 

     
    select.addEventListener('change', function() {

      firstCharacterNav.removeChild(select);
      firstCharacterNav.innerHTML = this.value;
        targetElemName = this.value;
        selectValue = this.value;      
        
        let name =  getFirstNameByChar(names, this.value);
        let nodeListOfDivsName = document.querySelectorAll('.name-editing-site');

       let yCoord;

        for ( let elem of nodeListOfDivsName){

          if (elem.innerHTML === name) {
              yCoord = elem.getBoundingClientRect().top;
              window.scrollBy({
              top: yCoord - 100,
              left: 0,
              behavior: "smooth"
            });
          }
        }
        
        firstCharacterNav.addEventListener('click', createSelect)
    })
    firstCharacterNav.appendChild(select);
    firstCharacterNav.removeEventListener('click', createSelect);
}

