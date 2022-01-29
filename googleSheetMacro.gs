/** @OnlyCurrentDoc */
function dtr(myDate){
var vv = myDate;
//vv="January 29, 2022 at 02:34PM";
vv = vv.toString();

var va = vv.split(" at ");
if(va[1]==undefined){
return;
}
var ampm = va[1].split(":");

if(va[1].substr(-2)=="PM"){
myDate = new Date((va[0].replace(",","")+", "+(parseInt(ampm[0],10)+12)+":"+ampm[1].substr(0,2)+":00 +0800"));
}else{
myDate = new Date((va[0].replace(",","")+", "+parseInt(ampm[0],10)+":"+ampm[1].substr(0,2)+":00 +0800"));
}
myDate = Utilities.formatDate(myDate, 'Asia/Shanghai', 'MMMM dd, yyyy HH:mm:ss');
return myDate
}