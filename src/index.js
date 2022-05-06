import contacts from "./modules/contacts"
import menu from "./modules/menu"
import scroll from "./modules/scroll"
import repairModal from "./modules/plansRepairModal"
import mask from "./modules/mask"
import sendForm from "./modules/sendForm"
import formula from "./modules/formula"
import repairSlaider from "./modules/plansRepairSlaider"
import documents from "./modules/documentsModal"
import accordion from "./modules/accordion"
import privacyPolice from "./modules/privacyPolice"
import portfolioSlider from "./modules/sliderPortfolio"
import portfolioModal from "./modules/portfolioModal"

contacts()
menu()
scroll()
repairModal()
mask()
formula()
repairSlaider()
documents()
accordion()
privacyPolice()
portfolioSlider()
portfolioModal()

sendForm({
    formId: 'feedback1',
    someElem: [
        {
            type: 'block',
            id: 'feedback-input1'
        }
    ]
});
sendForm({
    formId: 'feedback2',
    someElem: [
        {
            type: 'block',
            id: 'feedback-input2'
        }
    ]
});
sendForm({
    formId: 'feedback3',
    someElem: [
        {
            type: 'block',
            id: 'feedback-input3'
        }
    ]
});
sendForm({
    formId: 'feedback4',
    someElem: [
        {
            type: 'block',
            id: 'feedback-input4'
        }
    ]
});
sendForm({
    formId: 'feedback5',
    someElem: [
        {
            type: 'block',
            id: 'feedback-input5'
        }
    ]
});