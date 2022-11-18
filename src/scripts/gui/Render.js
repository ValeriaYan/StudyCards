import Elem from './Elem.js'

export default class Render {
    constructor() {
        this.desksWrap = document.querySelector('.desks__wrap');
        
    }
    
    showElem(elem) {
        elem.classList.add('_active');
    }
    
    hideElem(elem) {
        elem.classList.remove('_active');
    }
    
    addDesk(name) {
        const deskLine = new Elem('div', 'desks__desk desk', this.desksWrap).elem;
        const deskName = new Elem('div', 'desk__name', deskLine).elem;
        deskName.textContent = name;
        const deskOptions = new Elem('div', 'desk__options', deskLine).elem;
        deskOptions.textContent = '...';
    }
}