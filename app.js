
function clock()
{
var time = new Date();
var hours = time.getHours();
var mins = time.getMinutes();
const secs = time.getSeconds();
if(hours<10) 
    {
        hours = "0" + hours;
    }
    if(mins<10)
    {
        mins = "0" + mins;
    }
    if(secs < 10)
    {
        secs = "0" + secs;
    }
document.getElementById('first').innerHTML = hours
document.getElementById('second').innerHTML = ':' + mins;
document.getElementById('third').innerHTML = ':' + secs;
};
setInterval(clock,1000);