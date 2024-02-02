// document.getElementById("button").onclick = 

  const contactUsFxn = ()=>{
  window.location.href = "/contact.html";
};

let contact_us = document.querySelector(".button")
contact_us.addEventListener("click",()=>{contactUsFxn()});

let greeting = document.getElementById('greet');
greeting.style.textAlign = 'center'
greeting.style.marginBottom = '5%'

let button = document.getElementById('press');
button.style.textAlign = 'center'

const sideBar = document.getElementById('sideBar')
sideBar.style.display = 'none'

const navBar = document.getElementById('navBar')
const body = document.getElementById('body')
navBar.addEventListener('click', function(){
  navBar.style.display = 'none'
  sideBar.style.display = 'block';
})

let navBarExit = document.getElementById('navBarExit');

navBarExit.addEventListener('click', function(){
  sideBar.style.display = 'none'
});
