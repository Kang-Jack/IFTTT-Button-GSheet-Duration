/** @OnlyCurrentDoc */
function dtr(myDate){
var vv = myDate;
//vv="February 01, 2022 at 12:30PM";
vv = vv.toString();

var va = vv.split(" at ");
if(va[1]==undefined){
return;
}
var ampm = va[1].split(":");

if(va[1].substr(-2)=="PM"){
  if(ampm[0]=="12"){
    myDate = new Date((va[0].replace(",","")+", "+parseInt(ampm[0],10)+":"+ampm[1].substr(0,2)+":00 +0800"));
  }
  else{
    myDate = new Date((va[0].replace(",","")+", "+(parseInt(ampm[0],10)+12)+":"+ampm[1].substr(0,2)+":00 +0800"));}
}else{
myDate = new Date((va[0].replace(",","")+", "+parseInt(ampm[0],10)+":"+ampm[1].substr(0,2)+":00 +0800"));
}
myDate = Utilities.formatDate(myDate, 'Asia/Shanghai', 'MMMM dd, yyyy HH:mm:ss');
return myDate
}
