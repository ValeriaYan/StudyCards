import Desk from "./Desk.js";
import Storage from "./Storage.js";

export default class DesksMap {
    constructor() {
        this.desks = new Map();
        this.storage = new Storage();
    }

    getDesk(name) {
        return this.desks.get(name);
    }

    addDesk(name) {
        this.desks.set(name, new Desk(name));
    }

    rename(name, newName) {
        const desk = this.desks.get(name);
        desk.setName(newName);
        this.desks.delete(name);
        this.desks.set(newName, desk);        
    }

    delete(name) {
        this.desks.delete(name);
    }

    save() {
        this.storage.save(this.desks);
    }

    download() {
        this.desks = this.storage.download();
    }
}

