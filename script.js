const showBtn = document.querySelector('.show__btn')
const modal = document.querySelector('.modal')
const closeBtn = document.querySelector('.close__btn')
const ovelay = document.querySelector('.overlay')

showBtn.addEventListener("click",()=>{
    modal.classList.remove("hidden")
    ovelay.classList.remove("hidden")
    
})

closeBtn.addEventListener("click",()=>{
    modal.classList.add("hidden")
    ovelay.classList.add("hidden")
})

document.addEventListener("keydown0",(e)=>{
    if (e.key == "a"){
        modal.classList.remove("hidden")
        ovelay.classList.remove("hidden")
    }
    if (e.key == "b"){
        modal.classList.add("hidden")
        ovelay.classList.add("hidden")
    }
})