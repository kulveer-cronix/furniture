let toogle_icon=document.querySelector('#menu_icon')
let menu_list = document.querySelector('.nav_menu-list')
let nav_bg = document.querySelector('.nav')

toogle_icon.onclick=()=>{
    toogle_icon.classList.toggle('bx-x')
    menu_list.classList.toggle('active')
}
window.onscroll=()=>{
    toogle_icon.classList.remove('bx-x')
    menu_list.classList.remove('active')

}