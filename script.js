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
const nameInfo = document.querySelector('span')

let usersTime

const checkForm = () => {
    if (eventName.value === '' || eventDay.value === '' || eventMonth.value === '' || eventYear.value === '' || eventImg.value === '') {
        alert('Wypełnij poprawnie wszystkie pola!')
    }
    else {
        // .image-section {
        // background-image: url('default.jpg');
        imageSection.style.backgroundImage = `url(${eventImg.value})`
        nameInfo.textContent = eventName.value
        showSettingsPanel()
    }
}


// settingsBtn.addEventListener('click', showSettingsPanel)
saveBtn.addEventListener('click', checkForm)


settingsBtn.addEventListener('click', () => {
    settings.classList.toggle('active')
})