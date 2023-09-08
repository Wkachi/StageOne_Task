console.log('testing')

const dropDownArrow = document.querySelector('#dropDownArrow')
const weekDays = document.querySelector('.weekDays')
const dayOfTheWeek = document.querySelector('.dayOfTheWeek')
const eachDay = document.querySelector('.eachDay')
const eDwD = document.querySelectorAll('#eDwD')
const thursday = document.querySelector('#thursday')

console.log(eDwD)

dropDownArrow.addEventListener('click',() =>{
    weekDays.style.display = "block";
   
})

weekDays.addEventListener('click',(e) =>{
    weekDays.style.display = "none";
    thursday.innerHTML = `${e.target.innerHTML}`


})

// !(weekDays).addEventListener('click',(e) =>{
//     console.log('error')
//     weekDays.style.display = "none";

// })