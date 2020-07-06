const toggler =document.querySelector('.toggler');
const slider = document.querySelector('.switch');
const togglebody=document.querySelector('.toggleWrap');
const titlechange = document.querySelectorAll('.titlechange');
const component=document.querySelectorAll('.component');
const container=document.querySelector('.container');
const p= document.querySelector('p');
console.log(p)


slider.addEventListener('click',()=>{
    toggler.classList.toggle('toggled');
    slider.classList.toggle('toggle');
    togglebody.classList.toggle('toggle');
    container.classList.toggle('toggle');
    titlechange.forEach(each=>each.classList.toggle('toggle'));
    component.forEach(each=>{each.classList.toggle('toggle')});
    p.classList.toggle('toggle');
})
