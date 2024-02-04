const sideBar = document.getElementById('sideBar')
sideBar.style.display = 'none'

const navBar = document.getElementById('navBar')
const body = document.getElementById('body')
navBar.addEventListener('click', function(){
  navBar.style.display = 'none'
  sideBar.style.display = 'block';
})

let navBarExit = document.getElementById('navBarExit')

navBarExit.addEventListener('click', function(){
  sideBar.style.display = 'none'
  navBar.style.display = 'block'
}
) 

let container = document.querySelector(`body`)
if(sideBar.style.display === 'block'){
  container.addEventListener('click', function(){
    sideBar.style.display = 'none'
  })
}             