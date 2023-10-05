import { translater, getLiteralNum } from "./modules/functions.js";
import { categsImages,
         subcategsImages, 
         categories} from "./modules/arrsOfData.js";

  
let imagesWrap = document.querySelector('#images-wrap');
let imagesWrapSubcateg = document.querySelector('#images-wrap-subcateg');
  
  
createSubcategImages(
  getLiteralNum,  
  imagesWrapSubcateg, 
  subcategsImages, 
  1,
  categories[0].values
);
  
let firstImageWrap;
let currentWrap;
let categNameElem;
let initialCategNameElem;
  
for (let i = 1; i <= 4; i++) {
    
  let str = getLiteralNum(i);
  let wrap = document.createElement('div');
  wrap.className = "img-wrap";
    
  if (i === 1) {
    wrap.classList.add("initial-img-wrap");
    categNameElem = document.createElement('div');
    categNameElem.innerHTML = translater(categories[0].name);
    categNameElem.id = 'initial-name';
    wrap.appendChild(categNameElem);
    firstImageWrap = wrap;
    initialCategNameElem = categNameElem;
  }
  
  wrap.id = `${str}img-wrap`;
  wrap.dataset.num = i;
    
   
  
  wrap.addEventListener('mouseover', function(event) {
      
    if (currentWrap) {
      currentWrap.classList.remove('increased-img-wrap');
    }

    currentWrap = event.target.closest('.img-wrap');
    firstImageWrap.classList.remove('initial-img-wrap');
    currentWrap.classList.add('increased-img-wrap');
  
      
    if (initialCategNameElem) {
      initialCategNameElem.remove();
    }
      
    if (categNameElem) {
      categNameElem.remove();
    }
  
    categNameElem = document.createElement('div');
    categNameElem.innerHTML = translater(categories[i - 1].name);
    categNameElem.className = 'categ-name';
    wrap.appendChild(categNameElem);
      
    imagesWrapSubcateg.innerHTML = '';
  
    createSubcategImages(
      getLiteralNum,
      imagesWrapSubcateg, 
      subcategsImages, 
      this.dataset.num,
      categories[i - 1].values
      )
    })
  
    wrap.addEventListener('mouseout', function(event) {
      
      if ( event.relatedTarget.classList.contains('img-wrap') ||
          event.relatedTarget.classList.contains('login-image')) {
         currentWrap.classList.remove('increased-img-wrap');
         wrap.removeChild(categNameElem);
      }   
    })
  
    imagesWrap.appendChild(wrap);   
  
    let image = document.createElement('img');
    image.className = 'login-image';
    image.id = `${str}login-image`
    image.src = categsImages[i - 1];
    wrap.appendChild(image);
}  
  
  
function createSubcategImages(
  func1, 
  parent, 
  obj, 
  num, 
  subcategNamesArr) {
    
  for ( let i = 0; i < 4; i++) {
      
    let str = func1(i + 1)
  
    let wrap = document.createElement('div');
    wrap.className = 'img-wrap-subcateg';
    wrap.id = `${str}img-wrap-subcateg`;
  
    let nameSubcategElem;
  
    wrap.addEventListener('mouseover', function() {
      wrap.classList.add('increased-img-wrap-subcateg');
       nameSubcategElem = document.createElement('div');
       nameSubcategElem.className = 'subcateg-name';
       nameSubcategElem.innerHTML = subcategNamesArr[i];
       wrap.appendChild(nameSubcategElem);
    });
  
    wrap.addEventListener('mouseout', function() {
      wrap.classList.remove('increased-img-wrap-subcateg');
      wrap.removeChild(nameSubcategElem);
    })

    parent.appendChild(wrap);
  
    let image = document.createElement('img');
    image.className = 'login-image-subcateg';
    image.id = `${str}loginImage`;
    let arr = obj[num]
    image.src = arr[i];
    wrap.appendChild(image);
  }
}