 // add to the cart function  and total of the items price

  let sum=0;
 function  cards(item){
    const cartsItem =  document.getElementById('add-cart')
    const itemsName = item.childNodes[5].childNodes[1].innerText
    const li = document.createElement('li');
    li.innerText = itemsName
    cartsItem.appendChild(li);
    const itemsPrice = item.childNodes[5].childNodes[3].innerText.split(' ')[0]
   const total1= sum= parseFloat(sum)+parseFloat(itemsPrice)
    const totalPrice =  document.getElementById('total-price')
    totalPrice.innerText = total1; 

    const grandPrice = document.getElementById('grand-price')
    grandPrice.innerText =total1;


//coupon button enabled functionality
const button1 = document.getElementById('btn1');
if(total1>200){
 button1.disabled=false;
}
else{
 button1.disabled=true;
}

//Make Purchase button functionality
const button2 = document.getElementById('btn2')
if(total1>0){
  button2.disabled=false;

}else{
  button2.disabled=true;
}
//Cupon function
document.getElementById('btn1').addEventListener('click', function(){
  const discount =  total1*0.2;
  const disCountPrice =  discount.toFixed(2);
  const disCountONItem =document.getElementById('discount-price')
  disCountONItem.innerText = disCountPrice
  const  total2 =  document.getElementById('grand-price')
    const grandTotal =  total1 -disCountPrice
    total2.innerText = grandTotal

})




    }
    
    
    
 

    
