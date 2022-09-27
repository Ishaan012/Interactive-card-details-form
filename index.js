const cardHolderName=document.querySelector(".card-input-box");
const cardNumberDetails=document.querySelector(".card-number-details-input-box");
const expiryMonth=document.querySelector(".exp-month-input-box");
const expiryYear=document.querySelector(".exp-year-input-box");
const cvc=document.querySelector(".cvc-input-box");
const button=document.querySelector(".submit-button");
const thanksSection=document.getElementById("thanks-section");
const detailsSection=document.getElementById("details-section");

const cardName=document.querySelector(".card-name");
const cardNumber=document.querySelector(".card-number");
const cardExpiry=document.querySelector(".card-expiry");
const cvcHeading=document.querySelector(".card-back-content");

var nameValue="";
var numberValue="";
var month="";
var year="";
var cvcValue="";
var expiry="";



cardHolderName.addEventListener("input",function(){
    nameValue=cardHolderName.value;
    
});

cardNumberDetails.addEventListener("input",function(){
    numberValue=cardNumberDetails.value;

    let text=this.value                                                      //Get the value
  text=text.replace(/\D/g,'')                                              //Remove illegal characters
  if(text.length>3) text=text.replace(/.{4}/,'$& ');                        //Add hyphen at pos.4
  if(text.length>7) text=text.replace(/.{9}/,'$& ');  
  if(text.length>7) text=text.replace(/.{14}/,'$& ');    
  this.value=text;

//   text=text.replace(/\D/g,'')                                              //Remove illegal characters
//   if(text.length>3) text=text.replace(/.{4}/,'$&-');                        //Add hyphen at pos.4
//   if(text.length>7) text=text.replace(/.{9}/,'$&-');  
//   if(text.length>7) text=text.replace(/.{14}/,'$&-');    
//   this.value=text;

      
});

expiryMonth.addEventListener("input",function(){
    month=expiryMonth.value;  
});
expiryYear.addEventListener("input",function(){
    year=expiryYear.value;  
});

cvc.addEventListener("input",function(){
    cvcValue=cvc.value;
    
});

button.addEventListener("click",function(){
    cardName.innerText=nameValue;  
    cardNumber.innerText=numberValue;

    expiry=month+"/"+year;
    cardExpiry.innerText=expiry;
    cvcHeading.innerText=cvcValue;  

    detailsSection.style.display="none";
    thanksSection.style.visibility="visible";
    

});
