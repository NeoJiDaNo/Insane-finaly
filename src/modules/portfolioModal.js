const portfolioModal = () => {
    const slideFrames = document.querySelectorAll('.portfolio-slider__slide-frame')
    const modal = document.querySelector('.popup-portfolio')
    const portText = document.querySelectorAll('.popup-portfolio-text')
    const portSlider = document.querySelector('.popup-portfolio-slider')

    let num = 0

    slideFrames.forEach((btn) => {
        btn.addEventListener('click', () => {
            modal.style.visibility = 'visible'
        })
    })

    portText.forEach((val, key) => {
        portText[key].style.display = 'block'
    })

    const arrowInit = () => {
        document.querySelector('#popup_portfolio_left').style.display = 'flex'
        document.querySelector('#popup_portfolio_right').style.display = 'flex'
        if (num == -864) {
            document.querySelector('#popup_portfolio_right').style.display = 'none'
        }
        if (num == 0) {
            document.querySelector('#popup_portfolio_left').style.display = 'none'
        }
    }

    document.addEventListener('click', (e) => {
        if (e.target.closest('.close') || e.target.classList.contains('popup-portfolio')) {
            modal.style.visibility = 'hidden'
        }
        if (e.target.closest('#popup_portfolio_right')) {
            portSlider.style.transform = `translateY(${'-624px'})`
        }
    })
    arrowInit()
}
// popup_portfolio_right
// popup_portfolio_left
export default portfolioModal