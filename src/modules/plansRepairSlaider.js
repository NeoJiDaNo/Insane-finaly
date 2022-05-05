const repairSlaider = () => {
    const navList = document.querySelector('.nav-list-repair')
    const repairNavs = document.querySelectorAll('.repair-types-nav__item')
    const arrowRight = document.querySelector('#repair-types-arrow_right')
    const arrowLeft = document.querySelector('#repair-types-arrow_left')
    let count = 0

    const prevSlide = (index, strClass) => {
        repairNavs[index].classList.remove(strClass)
    }

    const nextSlide = (index, strClass) => {
        repairNavs[index].classList.add(strClass)
    }

    repairNavs.forEach((btn) => {
        btn.addEventListener('click', (e) => {
            e.preventDefault()
            const elem = navList.querySelector('.active')
            elem.classList.remove('active')
            e.target.classList.add('active')
        })
    })
    
    arrowRight.addEventListener('click', () => {
        prevSlide(count, 'active')
        count++
        if (count == 5) {
            count = 0
        }
        nextSlide(count, 'active')
    })

    arrowLeft.addEventListener('click', () => {
        prevSlide(count, 'active')
        count--
        if (count == 5) {
            count = 0
        }
        nextSlide(count, 'active')
        
    })
}

export default repairSlaider