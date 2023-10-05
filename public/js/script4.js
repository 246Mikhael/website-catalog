import { translater, 
        checkValid, 
        isValidUrl} from "./modules/functions.js";

import { categories } from "./modules/arrsOfData.js";        



let categSelect = document.querySelector("#add-page-categ-select");
let subCategSelect = document.querySelector("#add-page-subcateg-select");



for ( let categ of categories ) {
  let opt = document.createElement('option');
  opt.value = translater(categ.name);
  opt.innerHTML = translater(categ.name);

  categSelect.appendChild(opt);   
};

for ( let subCateg of categories[0].values ) {
  let opt = document.createElement('option');
  opt.value = subCateg;
  opt.innerHTML = subCateg;

  subCategSelect.appendChild(opt);
};


categSelect.addEventListener('change', function() {
  subCategSelect.innerHTML = "";

  let index = categories.findIndex( item => item.name ===  translater(this.value) );

  for ( let subCateg of categories[index].values ) {
    let opt = document.createElement('option');
    opt.value = subCateg;
    opt.innerHTML = subCateg;

    subCategSelect.appendChild(opt);
  }
})


let valuesOfInputs = {};
let submitInput = document.querySelector('#add-page-submit-input');

let nameInput = document.querySelector('#add-page-name');

nameInput.addEventListener('blur', function() {

  if (this.value) {
    valuesOfInputs.name = this.value;
    checkValid(valuesOfInputs, submitInput)
  }
})

nameInput.addEventListener('mouseover', function() {
  nameInput.placeholder = "";
})
nameInput.addEventListener('mouseout', function() {
  nameInput.placeholder = "название сайта";
})


let descrInput = document.querySelector('#add-page-descr');

descrInput.addEventListener('focus', function() {
  this.value = "";
})

descrInput.addEventListener('blur', function() {
  if (this.value) {
    valuesOfInputs.descr = this.value;
    checkValid(valuesOfInputs, submitInput);
  }
})  


let linkInput = document.querySelector('#add-page-link');

linkInput.addEventListener('blur', function() {

  delete valuesOfInputs.link;
  checkValid(valuesOfInputs, submitInput);

  if ( isValidUrl(this.value) ) {
    valuesOfInputs.link = this.value;
    checkValid(valuesOfInputs, submitInput);
  } else {
    this.value = "";
  }
}) 

linkInput.addEventListener('mouseover', function() {
  linkInput.placeholder = "";
})
linkInput.addEventListener('mouseout', function() {
  linkInput.placeholder = "ссылка на ресурс";
})




let dropZone = document.querySelector('#upload-wrap');
['drag', 'dragstart', 'dragend', 'dragover', 'dragenter', 'dragleave', 'drop'].forEach(function(event) {

  document.addEventListener(event, function(evt) {
    evt.preventDefault();
    evt.stopPropagation();
    return false
  })
})

dropZone.addEventListener('dragover', function() {
  changeClasses('not-dragover', 'dragover')
})
dropZone.addEventListener('dragenter', function() {
  changeClasses('not-dragover', 'dragover')

})
dropZone.addEventListener('dragleave', function() {
  changeClasses('dragover', 'not-dragover')
})

dropZone.addEventListener('drop', function(event) {
  changeClasses('dragover', 'not-dragover')

  let files = event.dataTransfer.files || event.target.files; 
  fileInput.files = files;

  changeImageUpload();

  if (files) {
    valuesOfInputs.file = files;
  checkValid(valuesOfInputs, submitInput);
  }
})


let fileInput = document.querySelector('#add-page-upload');

fileInput.addEventListener('change', function() {
  
  changeImageUpload()
  
  if (this.value) {
       valuesOfInputs.file = this.value;
    checkValid(valuesOfInputs, submitInput);
  }
})


//-------------------------------------

function changeImageUpload() {
  let img = document.createElement('img');
  
  
  let [file] = fileInput.files;
  if (file){
    let uploadedImg = dropZone.querySelector('.uploaded-img');

    if (uploadedImg ){

      dropZone.removeChild(uploadedImg);
      img.src= URL.createObjectURL(file);
      img.className = 'uploaded-img';
      let firstChild = dropZone.firstChild;
      dropZone.insertBefore(img, firstChild);

    } else {

      img.src= URL.createObjectURL(file);
      img.className = 'uploaded-img';
      let firstChild = dropZone.firstChild;
      dropZone.removeChild(dropZone.querySelector('#upload-image'));
      dropZone.insertBefore(img, firstChild);
    }
  }
}

function changeClasses(class1, class2) {
  
  dropZone.classList.remove(class1);
  dropZone.classList.add(class2);
}