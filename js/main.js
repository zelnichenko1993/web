const burger = document.querySelector(".burger-menu")
console.log(burger) 
console.log("dfdsfdf")              

burger.addEventListener("click", () => {
  const mobMenu = document.querySelector(".mob-menu-wrapper")
  mobMenu.classList.add('active')

})

window.addEventListener('click', e => { 
  const mobMenu = document.querySelector(".mob-menu-wrapper")
  const target = e.target
  if (!target.closest('.mob-menu-wrapper') && !target.closest('.burger-menu')) {
    mobMenu.classList.remove('active') 
  }
})