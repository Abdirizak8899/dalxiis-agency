const show = () =>{
let x = document.querySelector("nav")
  if (x.style.display === 'flex'){
    x.style.display = 'none'
  }
  else{
    x.style.display = 'flex'
  }
}