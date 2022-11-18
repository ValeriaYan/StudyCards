import DesksMap from "./DesksMap.js";

export default class Storage {
    constructor() {

    }

    save(DesksMap) {
        localStorage.setItem('desks', JSON.stringify(DesksMap));
    }
    
    download() {
        return JSON.parse(localStorage.getItem('desks'));
    }
}