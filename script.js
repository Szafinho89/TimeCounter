const settingsBtn = document.querySelector('.settings-btn')
const settingsPanel = document.querySelector('.settings')

const showSettingsPanel = () => {
    settingsPanel.classList.toggle('active')
}

settingsBtn.addEventListener('click', showSettingsPanel)