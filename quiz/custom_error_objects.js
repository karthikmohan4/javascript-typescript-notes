//extend built-in Error class

class CustomError extends Error{
    constructor(message,errorCode){
        super(message);
        this.name = 'CustomError';
        this.errorCode =errorCode;
    }

    logError(){
        console.log(`${this.name} ${this.message} ${this.errorCode}`);
    }
}

try{
    throw new CustomError('This is a custom error message',400);
} catch(error){
    error.logError();
}