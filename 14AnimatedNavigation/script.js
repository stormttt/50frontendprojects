const toggle = document.getElementById('toggle');
const nav = document.getElementById('nav')

toggle.addEventListener('click',()=>{
    //方法1
    // if (nav.classList.contains('active')){
    //     nav.classList.remove('active');
    // }
    // else{
    //     nav.classList.add('active')
    // }
    // 方法2
    nav.classList.toggle('active')
})