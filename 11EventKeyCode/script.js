const insert = document.getElementById('insert')
window.addEventListener('keydown',(e)=>{
    insert.innerHTML=`
    <div class="key">
            ${e.key ===' '?'Space':e.key}
            <small>Event.key</small>
        </div>
        <div class="key">
            ${e.keyCode ===' '?'Space':e.keyCode}
            <small>Event.keycode</small>
        </div>
        <div class="key">
            ${e.code ===' '?'Space':e.code}
            <small>Event.code</small>
        </div>`
})