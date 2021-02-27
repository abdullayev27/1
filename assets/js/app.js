window.addEventListener('load', () => {
    const audio = new Audio('../../sound.mp3')
    const toggleBtn = document.querySelector('#toggle-btn')
    const account = document.querySelector('.account')
    const modeBtn = document.querySelector('#night-mode-icon')
    const theme = document.querySelector('#theme')
    let modeToggled = localStorage.getItem('mode')
    let toggled = false
    
    if(modeToggled == 'dark'){
        theme.href = '../assets/css/style.css'
        modeBtn.className = 'fas fa-toggle-on'
    }
    else{
        theme.href = '../assets/css/stylelight.css'
        modeBtn.className = 'fas fa-toggle-off'
    }


    toggleBtn.addEventListener('click', () => {
        if(!toggled){
            account.style.display = 'block'
            toggled = true
        }
        else{
            account.style.display = 'none'
            toggled = false
        }
    })

    modeBtn.addEventListener('click', () => {
        audio.play()
        if(modeToggled == 'dark'){
            theme.href = '../assets/css/stylelight.css'
            modeBtn.className = 'fas fa-toggle-off'
            modeToggled = 'light'
            localStorage.setItem('mode',modeToggled)
        }
        else{
            theme.href = '../assets/css/style.css'
            modeBtn.className = 'fas fa-toggle-on'
            modeToggled = 'dark'
            localStorage.setItem('mode',modeToggled)
        }
    })

})





