document.querySelector('.lucky').addEventListener('click',(e)=>{
   console.log(e.target);
   e.target.classList.toggle('hide')
   document.querySelector('.title').classList.toggle('hide')
})