export default class Player {
    constructor(props) {
        this.name = props.name;
    }

    logNameToConsole() {
        console.log(this.name);
    }
}

