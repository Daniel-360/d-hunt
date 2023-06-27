// hamburger menu element function

let postMenu = document.querySelector('.feed-menu')
let headMenu = document.querySelector('.hamburger')
let blog = document.getElementById('blog')

function hamburger(element) {
    let dotWrap = document.createElement('div')
    let dot1 = document.createElement('div')
    let dot2 = document.createElement('div')
    let dot3 = document.createElement('div')

    dotWrap.classList.add('dot-wrap')
    dot1.classList.add('dot')
    dot2.classList.add('dot')
    dot3.classList.add('dot')

    dotWrap.append(dot1, dot2, dot3)
    element.appendChild(dotWrap)

}

//  home, song, videos, messenger....

let home = document.getElementById('home')
let song = document.getElementById('song')
let videos = document.getElementById('video')
let messenger = document.getElementById('messenger')

// create a function name pagetags
// function pageTags(){
//     home.addEventListener('click', ()=>{
//         let body = document.querySelector('body')
//         body.classList.add('bname')
//         // body.style.backgroundColor = 'red'
//     })
// }

headMenu.addEventListener('click', ()=>{
    blog.classList.toggle('change')
})




hamburger(postMenu)
hamburger(headMenu)
// pageTags()

