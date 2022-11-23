const Nav = document.querySelector('.nav')
const Hamburgerbtn =  document.querySelector('#hamburger')
const itag = document.getElementsByTagName('i')


Hamburgerbtn.addEventListener('click',() =>{
    {
    Nav.classList.toggle('mobile-menu')
    itag.classList.toggle('active')
    console.log(itag)
}
})