var slideIndex = 1;

function addDiv(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i, x = document.getElementsByClassName("mySlides");
  if (n > x.length) // enter number is greater than number of divs on the x element
  {
      slideIndex = 1;
  }else if (n < 1) {
      slideIndex = x.length
  }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "block";  
}
showDivs(slideIndex);
/*select product*/
var select = 0,
    numberOfProduct = document.getElementById("num"),
    prod = document.getElementById("productselectcount"),
    s;
function addProduct(d){
    prod.style.display = "block";
    select = select + d;
    if (select < 0){
        select = 0;
    }else{
        numberOfProduct.innerHTML = select;
    }
    s = select;
}
function alertmasssage(){
    alert('Create order is done you select = '+ s +' Product in your chart '+'\n'+'thank you for visit my web site \n good bye ');
}