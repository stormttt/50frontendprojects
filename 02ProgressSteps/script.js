const progress = document.getElementById('progress');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const circles = document.querySelectorAll('.circle');
//get这个返回一个htmlcollection 不能直接foreach 需要先转换成数组或者用array.foreach
//const circles = document.getElementsByClassName('circle');
let currentActive = 1;
next.addEventListener('click',()=>{
    currentActive = currentActive + 1;
    if(currentActive > circles.length){
        currentActive= circles.length;
    }
    // console.log(currentActive);
    update();
})
prev.addEventListener('click',()=>{
    currentActive = currentActive -1 ;
    if(currentActive < 1){
        currentActive= 1;
    }
    // console.log(currentActive);
    update();
})

function update(){
    circles.forEach((element,index) => {
        if(index < currentActive){
            element.classList.add('active');
        }
        else{
            element.classList.remove('active');
        }
        
    });
    const actives = document.querySelectorAll('.active')
    progress.style.width = (actives.length -1)/(circles.length -1) *100 + "%"
    if(currentActive === 1){
        prev.disabled = true;
    }
    else if(currentActive === circles.length){
        
        next.disabled = true;
    }
    else{
        
        prev.disabled = false;
        next.disabled = false;
    }
}