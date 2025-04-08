//command pattern is a behavioral design pattern that encapsulates a request as an object,thereby allowing for parameterization 
//of client with queues, requests & operations, also support for undoable operations

//define command interface 
class Command{
    exceute(){}
    undo (){}
}

//create concretecommand class
class LightOnCommand extends Command{
    constructor(light){
        super();
        this.light =light;
    }
    execute(){
    this.light.on();
    }
    undo(){
        this.light.off();
    }
}

class LightOffCommand extends Command{
    constructor(light){
        super();
        this.light = light;
    }
    exceute(){
        this.light.off();
    }
    undo(){
        this.light.on();
    }
}

//define the receiver
class Light{
    on(){
        console.log('Light is on');
    }
    off(){
        console.log('Light is off');
    }
}

//create the invoker
class RemoteControl {
    setCommand(command){
        this.command = command;
    }
    pressButton(){
        this.command.exceute();
    }
    pressUndo(){
        this.command.undo();
    }
}


//client code
const light = new Light();
const lightOnCom = new LightOnCommand(light);
const lightOffCom = new LightOffCommand(light);

const remote = new RemoteControl();
remote.setCommand(lightOnCom);
remote.pressButton();
remote.pressUndo();

remote.setCommand(lightOffCom);
remote.pressButton();
remote.pressUndo();