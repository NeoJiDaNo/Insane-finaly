const scroll = () => {
    const menuNav = document.querySelector('.popup-menu-nav')
    const anchors = menuNav.querySelectorAll('.popup-menu-nav__item > a')
    const a = document.querySelector('.button-footer > a')

    a.addEventListener('click', function (e) {
        e.preventDefault()
        
        const blockID = a.getAttribute('href')
        
        document.querySelector(blockID).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
        })
    })

    for (let anchor of anchors) {
        anchor.addEventListener('click', function (e) {
            e.preventDefault()

            const blockID = anchor.getAttribute('href')

            document.querySelector(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
            })
        })
    }
}

export default scroll