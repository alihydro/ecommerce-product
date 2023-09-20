let icons = document.querySelector('.icon');

let beforStyle = window.getComputedStyle(icons , '::before');

let purchases = document.getElementById("currentValue")

let current = 0;
let oneImg = document.querySelector('.one img');
let Bouquet = document.querySelector(".Bouquet")
let BouquetNone = document.querySelector(".Bouquet-none")
let spanOne = document.getElementById("span-one")
let spanTwo = document.getElementById("span-two")
let purch = document.querySelector(".purch")
let BouquetButton = document.querySelector(".Bouquet button");
let  emptyCart  = document.querySelector(".empty-cart p ");
let deleteAll = document.querySelector(".purch img.delete");
let closeLay = document.querySelector(".close");
document.querySelector(".clickImgTwo").onclick = function () {
    current++;
    purchases.innerHTML =current

}
document.querySelector(".clickImgOne").onclick = function(event) {
    event.stopPropagation(); 
    if (current > 0) {
        current = current - 1;
        purchases.innerHTML =current 
    }
};

icons.onclick = function () {
    Bouquet.classList.toggle("Bouquet-none")
    spanOne.innerHTML = current + " " ;
spanTwo.innerHTML =( current  * 125.00) + ".00$";
    if (current > 0) {
        purch.style.display = 'flex'
                BouquetButton.style.display = 'block'
                emptyCart.style.display = 'none'
    } else {
        purch.style.display = 'none'
        BouquetButton.style.display = 'none'
        emptyCart.style.display = 'block'
    }
}
deleteAll.onclick = function () {
    current = 0;
    icons.style.setProperty('--content',`" "`); 
    purchases.innerHTML = current;
}




document.querySelector(".two").onclick = function () {
icons.style.setProperty('--content',`"${current}"`); 
Bouquet.classList.remove("Bouquet-none")
if (current === 0) {
            icons.style.setProperty('--content',`" "`); 
        }
        if (!Bouquet.classList.contains("Bouquet-none")) {
                    Bouquet.classList.add("Bouquet-none")
                }







}




    let imageLay = document.querySelectorAll(".image-lay .lay");
    let imageLayOne = document.querySelectorAll(".image-lay");
    let arrayLay = Array.from(imageLay);
  console.log(arrayLay[1]);
    let grandImage  = document.querySelectorAll(".grand-image img")
   let grandImageElement = document.querySelector('.grand-image');
   let afterStyle = window.getComputedStyle(grandImageElement , '::after');
    let imageLandingTwo = document.querySelector(".image-landing-two");
    let grandImageTwo = document.querySelectorAll(".grand-image-two img");
let arrayGrandImage = Array.from(grandImage)
// console.log(arrayGrandImage.children[1]);
let arrayGrandImageTwo = Array.from(grandImageTwo)


  for (let i = 0; i < imageLayOne.length; i++) {
    arrayLay[0].classList.add("active")
    arrayGrandImage[0].style.display = 'inline';
    imageLayOne[i].onclick = function () {
     
        removeAllactive()
        arrayLay[i].classList.toggle("active")
        arrayGrandImage.forEach(function (ele) {
                    ele.style.display = 'none';
                   
                  });
                arrayGrandImage[i].style.display = 'inline';
            
      }
     
      arrayGrandImage[i].onclick = function () {
        arrayGrandImageTwo.forEach(function (ele) {
            ele.classList.remove("display")
           
          });
        imageLandingTwo.style.display = 'inline'
       
        arrayGrandImageTwo.classList.add("display")
      }

      closeLay.onclick = function () {      

      if ( imageLandingTwo.style.display = 'inline') {
        imageLandingTwo.style.display = 'none';
      }
     
  
  }
    
  }

 document.querySelector("nav img").onclick = function () {
  document.querySelector("nav ul").style.display = "inline";
 }
document.querySelector("ul li img").onclick = function () {
  document.querySelector("nav ul").style.display = "none";
}

nextImage = document.querySelector(".next").onclick = function () {
  if (current < arrayGrandImage.length - 1) {
    arrayGrandImage.forEach(function (ele) {
      ele.style.display = 'none';
     
    });
  
    current++;
  
    arrayGrandImage[current].style.display = 'inline';
  }
 
}
pruveImage = document.querySelector(".pruv").onclick = function () {
 
  if (current > 0) {
    arrayGrandImage.forEach(function (ele) {
      ele.style.display = 'none';
     
    });
    current = current - 1 ;
    arrayGrandImage[current].style.display = 'inline';
  }
 
}
nextImage = document.querySelector(".next-two").onclick = function () {
  if (current < arrayGrandImageTwo .length - 1) {
    arrayGrandImageTwo .forEach(function (ele) {
      ele.style.display = 'none';
     
    });
  
    current++;
  
    arrayGrandImageTwo[current].style.display = 'inline';
  }
 
}
pruveImage = document.querySelector(".pruv-two").onclick = function () {
 
  if (current > 0) {
    arrayGrandImageTwo.forEach(function (ele) {
      ele.style.display = 'none';
   
    });
    current = current - 1 ;
    arrayGrandImageTwo[current].style.display = 'inline';
  }
 
}

















  function removeAllactive() {

    imageLay.forEach(function (ele) {
       ele.classList.remove('active');
     });
    
  }












