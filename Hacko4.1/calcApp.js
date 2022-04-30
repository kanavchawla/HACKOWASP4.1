const defaultResult = 0;
let curResult = defaultResult;
let logEntries=[];
function calculation(operator, initial, enteredNum) {
    const Desc = ` ${initial} ${operator} ${enteredNum}`;
    outputResult(curResult, Desc);
}
function writeToLog(operation,previousNum,enteredNum,result){
    const logentry={
        operand: operation,
        beforeNum: previousNum,
        inputNum: enteredNum,
        output: result,
    };
    console.log(logentry);
};
 function logArray(userInput){
     logEntries.push(userInput);
     console.log(logEntries);
 }

function add() {
    const initialNum=curResult;
    const enteredNum=parseInt(userInput.value);
    curResult =  4.6* enteredNum;
    calculation('*',4.6,enteredNum);
   writeToLog(`add`,initialNum,enteredNum,curResult);
   logArray(enteredNum);
}


addBtn.addEventListener('click',add);






