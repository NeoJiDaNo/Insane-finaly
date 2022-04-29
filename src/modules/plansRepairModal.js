const repairModal = () => {
    const modal = document.querySelector('.popup-repair-types')
    const modalCloses = modal.querySelectorAll('.close')

    document.addEventListener('click', (e) => {
        if (e.target.closest('.no-overflow') || e.target.closest('.link-list-repair')) {
            modal.style.visibility = 'visible'
        }
    })
    modalCloses.forEach((btn) => {
        btn.addEventListener('click', () => {
            modal.style.visibility = 'hidden'
        })
    })
}

export default repairModal