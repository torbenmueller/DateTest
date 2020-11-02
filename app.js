// To set two dates to two variables 
let date1 = new Date("06/30/2019"); 
let date2 = new Date("07/30/2019"); 
  
// To calculate the time difference of two dates 
let Difference_In_Time = date2.getTime() - date1.getTime(); 
  
// To calculate the no. of days between two dates 
let Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24); 
  
//To display the final no. of days (result) 
document.getElementById("dates").innerHTML = ("Total number of days between dates  <br>"
               + date1 + "<br> and <br>" 
               + date2 + " is: <br> " 
               + Difference_In_Days);

let time1 = new Date('2020-11-16T08:00:00');
let time2 = new Date('2020-11-16T12:00:00');

//let result = time2.getHours() - time1.getHours();

let result = time1;

let diff = 15;

console.log(result);

function addMinutes(date, minutes) {
    return new Date(date.getTime() + minutes*60000);
}

while (time2.getHours() > result.getHours()) {
    result = new Date(result.getTime() + diff*60000);
    console.log(result);
}