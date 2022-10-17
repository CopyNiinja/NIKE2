
let count=0;
let total=0;
let ship=0;
let tax=0;

function shoot(price){
    count = count+1;
    document.getElementById('total-products').innerText=count;
    total = total+price;
    document.getElementById('price').innerText=total;
    tax=document.getElementById('tax-charge').innerText=total*.15;


    if (total < 799 && total > 499) {
        ship=document.getElementById('shipping-charge').innerText=100;
        document.getElementById('delivery-charge').innerText=100;
      } else if (total < 1000 && total > 799) {
       ship= document.getElementById('shipping-charge').innerText=150;
        document.getElementById('delivery-charge').innerText=150;
      }  else if (total <500) {
       ship= document.getElementById('shipping-charge').innerText=0;
        document.getElementById('delivery-charge').innerText=0;
      } 
       else {
       ship= document.getElementById('shipping-charge').innerText=200;
        document.getElementById('delivery-charge').innerText=200;
      }
      document.getElementById('total').innerText=total+ship*2+tax;


}

function remove()
{
    
    document.getElementById('delivery-charge').innerText=0;
    document.getElementById('total').innerText=0;
    document.getElementById('total-products').innerText=0;
    document.getElementById('shipping-charge').innerText=0;
    document.getElementById('tax-charge').innerText=0;
    document.getElementById('price').innerText=0;
    count=0;
    


}
function order()
{
    if(count == 0)
    {
        alert("Add a item in the cart to order!");
    }
    else{
        alert("Your order has been placed successfully!");
    }
}


