const toggles = document.querySelectorAll('.faq-toggle');
toggles.forEach(toggle=>{
    toggle.addEventListener('click',()=>{
        //parentNode 也可以
        
        toggle.parentElement.classList.toggle('active')
    })
})