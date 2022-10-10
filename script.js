const months = ["January", 
"February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"
]
let month = "January"
const calMonth = document.querySelector('#month')
let main = document.querySelector('#containDays')
const days = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
let savedays = [[],[],[],[],[],[],[],[],[],[],[],[]]
const arrows = document.querySelectorAll('.arrow')
let start = 0
let showDays = function(month) {
    if (main.children.length !== 0) {
        main.innerHTML = ""
    }
    calMonth.innerText = month
    if (savedays[months.indexOf(month)].length === 0) {
        for (let i = 0; i < days[months.indexOf(month)]; i++) {
            console.log(i)
            let day = document.createElement('div')
            day.className = "day"
            day.innerText = `${i + 1}`
            if ((i + 1)%7 !== 0) {
                day.style.borderRight = "none"
            }
            if (i + 1 === days[months.indexOf(month)]) {
                day.style.borderRight = "1px solid black"
            }
            day.style.borderTop = "none"
            //make text editable
            let p = document.createElement('p')
            p.setAttribute('contenteditable', 'true')
            day.appendChild(p)
            
            savedays[months.indexOf(month)].push(day)
            containDays.appendChild(day)
        }
        } else {
                for (let i = 0; i < savedays[months.indexOf(month)].length; i++) {
                    console.log(8)
                    containDays.appendChild(savedays[months.indexOf(month)][i])
                }
        }
}
showDays(month)
arrows.forEach(function(arrow) {
    arrow.addEventListener('click', function (arrow) {
        if (arrow.target.classList.contains("right")) {
            if (month === "December") {
                month = "January"
            } else {
                month = months[months.indexOf(month) + 1]   
        }}
        if (arrow.target.classList.contains("left")) {
            if (month === "January") {
                month = "December"
            }
            else{
                month = months[months.indexOf(month) - 1]
            }
        }
            showDays(month)
    })
})
console.log(savedays)