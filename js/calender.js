var dt= new Date();

function RenderDate(){
dt.setDate(1);
var day1=dt.getDay();
var endDate= new Date(
  dt.getFullYear(),
  dt.getMonth()+ 1 , 
  0
).getDate();
var prevDate =new Date(dt.getFullYear(),dt.getMonth(),0).getDate();
var today=new Date();
var months =[
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July ",
  " August",
  " September",
  "October",
  "November",
  "December",
];
document.getElementById("month").innerHTML=months[dt.getMonth()];
var days ="";
for(x=day1;x>0;x--){
  days+="<div>"+(prevDate-x)+"</div>";
}
for(i=1;i<=endDate;i++){
  if(i==today.getDate()){
    days+="<div class='today'>"+i+"</div>";
  }else{
    days+="<div>"+i+"</div>"; 
  }
}

document.getElementsByClassName("day")[0].innerHTML=days;
}

function moveDate(para){
if(para =='prev'){
  dt.setMonth(dt.getMonth()-1);
}else if(para =='next'){
  dt.setMonth(dt.getMonth()+1);
}

RenderDate();
}
