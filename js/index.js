var count=0;

var product_total_amt = document.getElementById('product_total_amt');

var total_cart_amt = document.getElementById('total_cart_amt');
const decreaseNumber = (incdec, itemprice,value) => {
 
    console.log(product_total_amt);
    console.log(total_cart_amt);
var itemval = document.getElementById(incdec);
var itemprice = document.getElementById(itemprice);
// var textContent = itemprice.textContent; 
// var numberValue = parseInt(textContent);
// console.log(itemval);
if(itemval.value <= 0){
itemval.value = 0;
alert('Negative quantity not allowed');
   console.log('count',count)
}else{
    
    var num=parseInt(value);
    count--;
    console.log('count is ', count);
 if(count<0)
 {
     count=0;
     alert("Negative is Not allowed");
 }
itemval.value = parseInt(itemval.value) - 1;
itemval.style.background = '#fff';
itemval.style.color = '#000';

product_total_amt.innerHTML  = parseInt(product_total_amt.innerHTML)-num;
total_cart_amt.innerHTML  = parseInt(product_total_amt.innerHTML) ;
}
}
const increaseNumber = (incdec, itemprice,value) => {
var itemval = document.getElementById(incdec);
var itemprice = document.getElementById(itemprice);
var num =parseInt(value);
// var textContent = itemprice.textContent; 
// var numberValue = parseInt(textContent);
//console.log(itemval);
count++;
console.log("The value of count is",count);
if(count>8)
{
    alert("Only 8 Items is allowed");
    count=8;
    return ;
}
if(itemval.value >= 8){
itemval.value = 8;
alert('max 8 allowed');
itemval.style.background = 'red';
itemval.style.color = '#fff';
}else{
   
itemval.value = parseInt(itemval.value) + 1;
// itemprice.innerHTML  = parseInt(itemprice.innerHTML ) + 15;
product_total_amt.innerHTML  = parseInt(product_total_amt.innerHTML) + num;
total_cart_amt.innerHTML  = parseInt(product_total_amt.innerHTML);
}
}

function toggleContent() {
    var hiddenContent = document.getElementById("hiddenContent");
    if (hiddenContent.style.display === "none") {
        hiddenContent.style.display = "block";
    } else {
        hiddenContent.style.display = "none";
    }
}

