const EventEmitter = require('events');
const eventEmitter = new EventEmitter();

eventEmitter.on('tutorial',(num1,num2) => {
    console.log(num1 + num2);
});

eventEmitter.emit('tutorial',1,2);

//custom event

class person extends EventEmitter{
    constructor(name){
        super();
        this._name = name;

    }
    get name(){
        return this._name;
    }
}

let hari = new person('hari');
hari.on('name', () => {
    console.log('my name is: ' + hari.name);
});

let varun = new person('varun');
varun.on('name', () => {
    console.log('my name is: ' + varun.name);
});

//synchronously execute
hari.emit('name');
varun.emit('name');



