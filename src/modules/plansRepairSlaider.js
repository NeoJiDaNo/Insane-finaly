const repairSlaider = () => {
    const navList = document.querySelector('.nav-list-repair')
    const repairNavs = document.querySelectorAll('.repair-types-nav__item')
    const slideCount = document.querySelector('.slider-counter-content__current')
    const slideTotal = document.querySelector('.slider-counter-content__total')
    const repairSlides1 = document.querySelectorAll('.types-repair1 > .repair-types-slider__slide')
    const repairSlides2 = document.querySelectorAll('.types-repair2 > .repair-types-slider__slide')
    const repairSlides3 = document.querySelectorAll('.types-repair3 > .repair-types-slider__slide')
    const repairSlides4 = document.querySelectorAll('.types-repair4 > .repair-types-slider__slide')
    const repairSlides5 = document.querySelectorAll('.types-repair5 > .repair-types-slider__slide')
    let numSlides = repairSlides1
    let count = 1
    let indexSlaid = 0
    slideTotal.textContent = numSlides.length

    repairNavs.forEach((btn, key) => {
        btn.addEventListener('click', (e) => {
            e.preventDefault()
            const elem = navList.querySelector('.active')
            elem.classList.remove('active')
            e.target.classList.add('active')
            slideOff()
            console.log(numSlides);
            if (key == 0) {numSlides = repairSlides1} else if (key == 1) {numSlides = repairSlides2} else if (key == 2) {numSlides = repairSlides3} else if (key == 3) {numSlides = repairSlides4} else if (key == 4) {numSlides = repairSlides5}
            slideTotal.textContent = numSlides.length
            console.log(numSlides);
            slideOn()
            slideCount.textContent = 1
            count = 1
        })
    })

    const slideOff = () => {
        numSlides.forEach((btn, key) => {
            numSlides[key].style.display = 'none'
        })
    }

    const slideOn = () => {
        numSlides[0].style.display = 'block'
    }

    document.addEventListener('click', (e) => {
        if (e.target.closest('#repair-types-arrow_right')) {
            if (count == slideTotal.textContent) {
                count = 0
            }
            count++
            slideCount.textContent = count
            numSlides[indexSlaid].style.display = 'none'
            indexSlaid++
            if (indexSlaid == numSlides.length - 1) {
                indexSlaid = 0
            }
            numSlides[indexSlaid].style.display = 'block'
        }

        if (e.target.closest('#repair-types-arrow_left')) {
            count--
            if (count == 0) {
                count = slideTotal.textContent
            }
            slideCount.textContent = count
            numSlides[indexSlaid].style.display = 'none'
            if (indexSlaid == 0) {
                indexSlaid = numSlides.length - 1
            }
            indexSlaid--
            numSlides[indexSlaid].style.display = 'block'
        }
    })
}

export default repairSlaider