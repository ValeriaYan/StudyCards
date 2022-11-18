import DesksMap from "../model/DesksMap.js";

export default class Controller {
    constructor() {
        this.desksMap = new DesksMap();
    }

    isEmpty(str) {
        if(!str) {
            return true;
        }

        return false;
    }

    setQuestion(question) {
        if(!this.isEmpty(question)) {
            
        }
    }

    addDesk(name) {
        this.desksMap.addDesk(name);
    }
}