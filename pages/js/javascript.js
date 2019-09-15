//* giver vores knap en variabel og giver den en handling når man trykker på den.
let submit = document.querySelector('#btn');
submit.addEventListener("click", beregn);


//* En funktion der først giver strings en ny variabel og så beregner procentdelen af løn.
function beregn(){
let first_name = document.querySelector(".first_name").value;
let last_name = document.querySelector(".last_name").value;
let pay = document.querySelector(".pay").value;
let region = document.querySelector(".region");
let returnMsg = document.querySelector("#return_msg");

//* Switch gør at man kan tilføje forskellige værdier afhængigt af hvilket forhold er valgt i vores select menu
let total;
switch(region.value){
   case "hovedstad":
   skat = pay * 0.25;
   rest = (pay - skat);
   total = (skat/pay) * 100;
   break;

   case "sjælland":
    skat = pay * 0.30;
    rest = (pay - skat);
    total = (skat/pay) * 100;
   break;

   case "syddanmark":
   skat = pay * 0.35;
   rest = (pay - skat);
   total = (skat/pay) * 100;
   break;

   case "midtjylland":
   skat = pay * 0.40;
   rest = (pay - skat);
   total = (skat/pay) * 100;
   break;

   case "nordjylland":
   skat = pay * 0.45;
   rest = (pay - skat);
   total = (skat/pay) * 100;
   break;

default:
   total = "ukendt";
   break; 

}

//*Dette function gøre at forbokstavet bliver stort. 
String.prototype.capitalize = function() {
   return this.charAt(0).toUpperCase() + this.slice(1);
}

   	 


   	 
//*Her bliver vores besked vist (Fornavn, Efternavn, Indkomst, region og skatteprocent)
returnMsg.innerHTML = first_name.capitalize() + " " + last_name.capitalize() + " du tjener " + pay + " kr. og bor i region " + region.value + 
". Dvs. du skal betale " + Math.floor(total) + "% i skat" + " og har " + rest + "kr. efter skat." ; 

}
