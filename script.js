const settings = document.querySelector('.settings')
const settingsBtn = document.querySelector('.settings-btn')
const imageSection = document.querySelector('.image-section')

const eventName = document.querySelector('#event-name')
const eventDay= document.querySelector('#event-day')
const eventMonth = document.querySelector('#event-month')
const eventYear = document.querySelector('#event-year')
const eventImg = document.querySelector('#event-image')

const daysCount = document.querySelector('.days-count')
const hoursCount = document.querySelector('.hours-count')
const minutesCount = document.querySelector('.minutes-count')
const secondsCount = document.querySelector('.seconds-count')

const saveBtn = document.querySelector('.save')
const eventSpan = document.querySelector('span')
let usersTime;

// const checkForm = () => {
//     if (eventName.value === '' || eventDay.value === '' || eventMonth.value === '' || eventYear.value === '' || eventImg.value === '') {
//         alert('Wypełnij poprawnie wszystkie pola!')
//     }
//     else {
//         appUpdate()
//     }
// }

const setTime = () => {
    const currentTime = new Date()
    const result = usersTime - currentTime

    const days = Math.floor(result / 1000 / 60 / 60 / 24)
    console.log(days);
    const hours = Math.floor((result / 1000 / 60 / 60) % 24)
    console.log(hours);
    const minutes = Math.floor((result / 1000 / 60) )
    console.log(minutes);
    const seconds = Math.floor((result / 1000) % 60)
    console.log(seconds);

    daysCount.textContent = days
    hoursCount.textContent = hours
    minutesCount.textContent = minutes
    secondsCount.textContent = seconds

    //inna metoda rozwiązania tematu!
    // const seconds = Math.floor(result / 1000)
    // const days = hours / 24
    // const hours = minutes / 60
    // const minutes = seconds / 60

    // const newDays = days //dni do obliczen
    // const usersDays = Math.floor(days)  //dni do podstawienia do aplikacji (całkowita)

    // const newHours = (newDays - usersDays) * 24 // godziny do obliczeń
    // const usersHours = Math.floor(newHours) //godziny do podstawienia do aplikacji

    // const newMinutes = (newHours - usersHours) * 60 // minuty do obliczeń
    // const usersMinutes = Math.floor(newMinutes) // minuty do podstawienia w aplikacji

    // const newSeconds = (newMinutes - usersMinutes) * 60 // sekundy do obliczeń
    // const usersSeconds = Math.floor(newSeconds) //seundy do podstawienia w aplikacji

    // daysCount.textContent = usersDays
    // hoursCount.textContent = usersHours
    // minutesCount.textContent = usersMinutes
    // secondsCount.textContent = usersSeconds
}

const appUpdate = () => {
    eventSpan.textContent = eventName.value
    usersTime = new Date(`${eventMonth.value} ${eventDay.value} ${eventYear.value}`)
    imageSection.style.backgroundImage = `url('${eventImg.value}')`
    setTime()
}

saveBtn.addEventListener('click', appUpdate)
settingsBtn.addEventListener('click', () => {
    settings.classList.toggle('active')
})

appUpdate()
setInterval(setTime, 1000)