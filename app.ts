// Unknown type
let userInput: unknown;
let userName: string;

userInput = 1;
userInput = 'A';
if (typeof userInput === 'string') {
    userName = userInput;
}

// Never type
const generateError = (message: string, code: number): never => {
    throw { message, errorCode: code };
    // while(true)
};

generateError('An error occured!', 500);
