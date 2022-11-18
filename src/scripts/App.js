import DesksMap from './model/DesksMap.js'
import Render from './gui/Render.js'
import Controller from './controllers/Controller.js';

const render = new Render();
const createDeskElem = document.querySelector('.create-desk');
const desksBtn = document.querySelector('.desks__btn');
const desksInput = document.querySelector('.create-desk__input');
const desksOkBtn = document.querySelector('.create-desk__ok');
const controller = new Controller();

desksBtn.addEventListener('click', function() {
    render.showElem(createDeskElem);
});

desksOkBtn.addEventListener('click', function() {
    console.log('ok')
    const nameDesk = desksInput.value;
    render.addDesk(nameDesk);
    controller.addDesk(nameDesk);
    render.hideElem(createDeskElem);
} )