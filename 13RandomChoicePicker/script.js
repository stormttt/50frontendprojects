const tagsEl = document.getElementById('tags');
const textaera = document.getElementById('textaera');

textaera.focus();
textaera.addEventListener('keyup',(e)=>{
    creatTags(e.target.value);
    if(e.key ==='Enter'){
        setTimeout(()=>{
            e.target.value = ''
        },10)
    }
})
function creatTags(input){
    const tags = input.split(',').filter(tag=>tag.trim() !== '').map(tag =>tag.trim())
    console.log(tags);
    tagsEl.innerHTML= ''
    tags.forEach(tag => {
        const tagEl = document.createElement('span');
        tagEl.classList.add('tag');
        tagEl.innerText = tag;
        tagsEl.appendChild(tagEl);
    });
}

function randomSelect(){
    const times = 30;
    const interVal = setInterval(()=>{
        const randomTag = pickRandomTag()
        highLightTag(randomTag);
        setTimeout(()=>{
            unhighLightTag(randomTag)
        },100);
    },100);

    setTimeout(()=>{
        clearInterval(interVal);
        setTimeout(()=>{
            const randomTag = pickRandomTag();
            highLightTag(randomTag);
        },100)
    },times*100)
}
function pickRandomTag(){
    const tags = document.querySelectorAll('.tag')
    return tags[Math.floor(Math.random()* tags.length)]
}

function highLightTag(tag){
    tag.classList.add('highlight');
}
function unhighLightTag(tag){
    tag.classList.remove('highlight');
}