var timer = document.getElementById('timer');
var tglbtn = document.getElementById('toggle');
var rstbtn = document.getElementById('reset');

var watch = new Stopwatch(timer);

tglbtn.addEventListener('click',function(){
    if(watch.isOn){
        watch.stop();
        tglbtn.textContent = 'Start';
    } 
    else
    {
        watch.start();
        tglbtn.textContent = 'Stop';
    }
});

rstbtn.addEventListener('click',function(){
    watch.reset();  
});