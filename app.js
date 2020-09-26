var cartValue = document.getElementById("cart-value");
var cartButton = document.getElementById("cart");

var book1Add = document.getElementById("book1");
var book2Add = document.getElementById("book2");
var book3Add = document.getElementById("book3");
var book4Add = document.getElementById("book4");
var book5Add = document.getElementById("book5");
var book6Add = document.getElementById("book6");

var game1Add = document.getElementById("game1");
var game2Add = document.getElementById("game2");
var game3Add = document.getElementById("game3");
var game4Add = document.getElementById("game4");

var craft1Add = document.getElementById("craft1");
var craft2Add = document.getElementById("craft2");
var craft3Add = document.getElementById("craft3");
var craft4Add = document.getElementById("craft4");

// Try
document.getElementById("reset").onclick=()=>{location.reload();};

var cartNumber = document.getElementById("cart-item-number");

console.log(cartNumber);

// cartNumber.innerHTML = 5;
var totalPrice = 0;
var initialTotalPrice = 0;


 
var book1Number = 0;
var book2Number = 0;
var book3Number = 0;
var book4Number = 0;
var book5Number = 0;
var book6Number = 0;

var game1Number = 0;
var game2Number = 0;
var game3Number = 0;
var game4Number = 0;

var craft1Number = 0;
var craft2Number = 0;
var craft3Number = 0;
var craft4Number = 0;




var costOfBook1 = parseFloat(document.getElementById("dollarsOfBook1").innerHTML);
var costOfBook2 = parseFloat(document.getElementById("dollarsOfBook2").innerHTML);
var costOfBook3 = parseFloat(document.getElementById("dollarsOfBook3").innerHTML);
var costOfBook4 = parseFloat(document.getElementById("dollarsOfBook4").innerHTML);
var costOfBook5 = parseFloat(document.getElementById("dollarsOfBook5").innerHTML);
var costOfBook6 = parseFloat(document.getElementById("dollarsOfBook6").innerHTML);

var costOfGame1 = parseFloat(document.getElementById("dollarsOfGame1").innerHTML);
var costOfGame2 = parseFloat(document.getElementById("dollarsOfGame2").innerHTML);
var costOfGame3 = parseFloat(document.getElementById("dollarsOfGame3").innerHTML);
var costOfGame4 = parseFloat(document.getElementById("dollarsOfGame4").innerHTML);

var costOfCraft1 = parseFloat(document.getElementById("dollarsOfCraft1").innerHTML);
var costOfCraft2 = parseFloat(document.getElementById("dollarsOfCraft2").innerHTML);
var costOfCraft3 = parseFloat(document.getElementById("dollarsOfCraft3").innerHTML);
var costOfCraft4 = parseFloat(document.getElementById("dollarsOfCraft4").innerHTML);







book1Add.onclick=()=>{cartNumber.innerHTML++; document.getElementById("numberOfBook1").innerHTML++; totalPrice += costOfBook1; document.getElementById("totalPrice").innerHTML = totalPrice; console.log(totalPrice); book1Number++;};
book2Add.onclick=()=>{cartNumber.innerHTML++; document.getElementById("numberOfBook2").innerHTML++; totalPrice += costOfBook2; document.getElementById("totalPrice").innerHTML = totalPrice; console.log(totalPrice); book2Number++;};
book3Add.onclick=()=>{cartNumber.innerHTML++; document.getElementById("numberOfBook3").innerHTML++; totalPrice += costOfBook3; document.getElementById("totalPrice").innerHTML = totalPrice; console.log(totalPrice); book3Number++;};
book4Add.onclick=()=>{cartNumber.innerHTML++; document.getElementById("numberOfBook4").innerHTML++; totalPrice += costOfBook4; document.getElementById("totalPrice").innerHTML = totalPrice; console.log(totalPrice); book4Number++;};
book5Add.onclick=()=>{cartNumber.innerHTML++; document.getElementById("numberOfBook5").innerHTML++; totalPrice += costOfBook5; document.getElementById("totalPrice").innerHTML = totalPrice; console.log(totalPrice); book5Number++;};
book6Add.onclick=()=>{cartNumber.innerHTML++; document.getElementById("numberOfBook6").innerHTML++; totalPrice += costOfBook6; document.getElementById("totalPrice").innerHTML = totalPrice; console.log(totalPrice); book6Number++;};

game1Add.onclick=()=>{cartNumber.innerHTML++; document.getElementById("numberOfGame1").innerHTML++; totalPrice += costOfGame1; document.getElementById("totalPrice").innerHTML = totalPrice; console.log(totalPrice); game1Number++;};
game2Add.onclick=()=>{cartNumber.innerHTML++; document.getElementById("numberOfGame2").innerHTML++; totalPrice += costOfGame2; document.getElementById("totalPrice").innerHTML = totalPrice; console.log(totalPrice); game2Number++;};
game3Add.onclick=()=>{cartNumber.innerHTML++; document.getElementById("numberOfGame3").innerHTML++; totalPrice += costOfGame3; document.getElementById("totalPrice").innerHTML = totalPrice; console.log(totalPrice); game3Number++;};
game4Add.onclick=()=>{cartNumber.innerHTML++; document.getElementById("numberOfGame4").innerHTML++; totalPrice += costOfGame4; document.getElementById("totalPrice").innerHTML = totalPrice; console.log(totalPrice); game4Number++;};

craft1Add.onclick=()=>{cartNumber.innerHTML++; document.getElementById("numberOfCraft1").innerHTML++; totalPrice += costOfCraft1; document.getElementById("totalPrice").innerHTML = totalPrice; console.log(totalPrice); craft1Number++;};
craft2Add.onclick=()=>{cartNumber.innerHTML++; document.getElementById("numberOfCraft2").innerHTML++; totalPrice += costOfCraft2; document.getElementById("totalPrice").innerHTML = totalPrice; console.log(totalPrice); craft2Number++;};
craft3Add.onclick=()=>{cartNumber.innerHTML++; document.getElementById("numberOfCraft3").innerHTML++; totalPrice += costOfCraft3; document.getElementById("totalPrice").innerHTML = totalPrice; console.log(totalPrice); craft3Number++;};
craft4Add.onclick=()=>{cartNumber.innerHTML++; document.getElementById("numberOfCraft4").innerHTML++; totalPrice += costOfCraft4; document.getElementById("totalPrice").innerHTML = totalPrice; console.log(totalPrice); craft4Number++;};





var book1Name = document.getElementById("book1Name").innerHTML;
var book2Name = document.getElementById("book2Name").innerHTML;
var book3Name = document.getElementById("book3Name").innerHTML;
var book4Name = document.getElementById("book4Name").innerHTML;
var book5Name = document.getElementById("book5Name").innerHTML;
var book6Name = document.getElementById("book6Name").innerHTML;

var game1Name = document.getElementById("game1Name").innerHTML;
var game2Name = document.getElementById("game2Name").innerHTML;
var game3Name = document.getElementById("game3Name").innerHTML;
var game4Name = document.getElementById("game4Name").innerHTML;

var craft1Name = document.getElementById("craft1Name").innerHTML;
var craft2Name = document.getElementById("craft2Name").innerHTML;
var craft3Name = document.getElementById("craft3Name").innerHTML;
var craft4Name = document.getElementById("craft4Name").innerHTML;




document.getElementById("purchase").onclick = () => {
  var link = "https://api.whatsapp.com/send?phone=919751711604&text=" + 'Kidz World Online Store Order' + '%0A%0A' +                        
                                                                                               book1Name + '%20×%20' + book1Number + '%20=%20' + costOfBook1*book1Number + '%0A' +
                                                                                               book2Name + '%20×%20' + book2Number + '%20=%20' + costOfBook2*book2Number + '%0A' +
                                                                                               book3Name + '%20×%20' + book3Number + '%20=%20' + costOfBook3*book3Number + '%0A' +
                                                                                               book4Name + '%20×%20' + book4Number + '%20=%20' + costOfBook4*book4Number + '%0A' +
                                                                                               book5Name + '%20×%20' + book5Number + '%20=%20' + costOfBook5*book5Number + '%0A' +
                                                                                               book6Name + '%20×%20' + book6Number + '%20=%20' + costOfBook6*book6Number + '%0A' +
                                                                                               'Books Price Totally = $' + parseFloat(parseFloat(costOfBook1*book1Number) + parseFloat(costOfBook2*book2Number) + parseFloat(costOfBook3*book3Number) + parseFloat(costOfBook4*book4Number) + parseFloat(costOfBook5*book5Number) + parseFloat(costOfBook6*book6Number)) + '%0A%0A' +
                                                                                               game1Name + '%20×%20' + game1Number + '%20=%20' + costOfGame1*game1Number + '%0A' +
                                                                                               game2Name + '%20×%20' + game2Number + '%20=%20' + costOfGame2*game2Number + '%0A' +
                                                                                               game3Name + '%20×%20' + game3Number + '%20=%20' + costOfGame3*game3Number + '%0A' +
                                                                                               game4Name + '%20×%20' + game4Number + '%20=%20' + costOfGame4*game4Number + '%0A' +
                                                                                               'Games Price Totally = $' + parseFloat(parseFloat(costOfGame1*game1Number) + parseFloat(costOfGame2*game2Number) + parseFloat(costOfGame3*game3Number) + parseFloat(costOfGame4*game4Number)) + '%0A%0A' +
                                                                                               craft1Name + '%20×%20' + craft1Number + '%20=%20' + costOfCraft1*craft1Number + '%0A' +
                                                                                               craft2Name + '%20×%20' + craft2Number + '%20=%20' + costOfCraft2*craft2Number + '%0A' +
                                                                                               craft3Name + '%20×%20' + craft3Number + '%20=%20' + costOfCraft3*craft3Number + '%0A' +
                                                                                               craft4Name + '%20×%20' + craft4Number + '%20=%20' + costOfCraft4*craft4Number + '%0A' +
                                                                                               'Crafts Price Totally = $' + parseFloat(parseFloat(costOfCraft1*craft1Number) + parseFloat(costOfCraft2*craft2Number) + parseFloat(costOfCraft3*craft3Number) + parseFloat(costOfCraft4*craft4Number)) + '%0A%0A' +
                                                                                               'Total Price = $' + document.getElementById("totalPrice").innerHTML;

  
  

if (cartNumber.innerHTML > 0) {
      console.log('It is greater than 0');
      location.replace(link);
    } else {
      alert('Before purchasing you must add something to cart');
      }
};