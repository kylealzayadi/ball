// controls the left button
document.getElementById('left').addEventListener('click', function() {

    var position = document.getElementById('ball').style.left;
 
    var newPosition = parseInt(position) - 5;
 
    document.getElementById('ball').style.left = newPosition + 'px';
 });
 
 // controls for the right button
 document.getElementById('right').addEventListener('click', function() {
 
    var position = document.getElementById('ball').style.left;
 
    var newPosition = parseInt(position) + 5;
 
    document.getElementById('ball').style.left = newPosition + 'px';
 });
 
 // controls for the up button
 document.getElementById('up').addEventListener('click', function() {
 
    var position = document.getElementById('ball').style.top;
 
    var newPosition = parseInt(position) - 5;
 
    document.getElementById('ball').style.top = newPosition + 'px';
 
 })
 
 // controls for the down button
 document.getElementById('down').addEventListener('click', function() {
 
    var position = document.getElementById('ball').style.top;
 
    var newPosition = parseInt(position) + 5;
    
     document.getElementById('ball').style.top = newPosition + 'px'; 
    
   
 
 })
 
 var ball =  document.getElementById('ball');
var canvas = document.getElementById('ball-container')
 
if (newPosition.x > canvas.x ){
    document.getElementById('ball').style.x = newPosition -  1; 
 }




//  funtion arith(x,y) {
//     return x % y / 2;
// }

// var total = arith(20,3);

// if( total > 1){
//    console.log('A');

// }else if( total < 1){
//    console.log('B');

// }else {
//    console.log('C');
// }