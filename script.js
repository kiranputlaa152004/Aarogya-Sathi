
function healthTip(){

let tips=[
"Drink 8 glasses of water daily",
"Walk at least 30 minutes",
"Eat fruits and vegetables",
"Sleep 7-8 hours",
"Wash hands frequently"
];

let randomTip=tips[Math.floor(Math.random()*tips.length)];

alert("Health Tip: "+randomTip);

}


function emergency(){

alert("Calling Emergency Ambulance: 108");

}


function calculateBMI(){

let weight=document.getElementById("weight").value;
let height=document.getElementById("height").value;

height=height/100;

let bmi=weight/(height*height);

document.getElementById("result").innerHTML=
"Your BMI is "+bmi.toFixed(2);

}


function searchHospital(){

let input=document.getElementById("searchHospital").value.toLowerCase();

let hospitals=document.querySelectorAll("#hospitalList li");

hospitals.forEach(function(hospital){

if(hospital.innerText.toLowerCase().includes(input)){
hospital.style.display="block";
}
else{
hospital.style.display="none";
}

});

}


function submitForm(event){

event.preventDefault();

alert("Your message has been sent successfully!");

}