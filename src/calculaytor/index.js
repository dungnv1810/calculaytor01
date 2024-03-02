import React, {useState} from "react";
import './style.css'
const Calculaytor = () =>{
    const [counter, setCounter] = useState(0);
    const [firslNumber, setFirslNumber] = useState(0);
    const [secondNumber, setSecondNumber] = useState(0);
    const [sign, setSign] = useState('+');
    const [result, setResult] = useState(0)
    const handleIncrement = () =>{
        const newcounter = counter + 1;
        setCounter(newcounter)
    }
    const handleDecrement = () =>{
        const newcounter = counter - 1;
        setCounter(newcounter)
    }
    //Nếu giá trị số thứ nhất mà chưa có thì nó sẽ gán số thứ nhất vào vị trí số thứ nhất
    //Nếu giá trị của số thứ nhất có rồi thì nó sẽ gán số thứ hai vào vị trí của số thứ hai 
    const handlePressNumber = (number) =>{
        if(!firslNumber){
            setFirslNumber(number)
        }else{
            setSecondNumber(number)
        }
    }
    
    //chuyền dấu 
    const handlePressSign = (sign) =>{
        setSign(sign)
    }

    const handleCalculaytor = () => {
        if(sign === '+'){
            const sum = (+firslNumber + +secondNumber)
            setResult(sum)
        }else if (sign === '-') {
            const sum = (+firslNumber - (+secondNumber))
            setResult(sum)
        }else if (sign === '*'){
            const sum = (+firslNumber * (+secondNumber))
            setResult(sum)
        }else if (sign === '/'){
            const sum = (+firslNumber / (+secondNumber))
            setResult(sum)
        }else if (sign === '%'){
            const sum = (+firslNumber % (+secondNumber))
            setResult(sum)
        }else if (sign === '^'){
            const sum = Math.pow(+firslNumber, (+secondNumber))
            setResult(sum)
        }else if (sign === '^'){
            const sum = Math.pow(+firslNumber, (+secondNumber))
            setResult(sum)
        }

    }
    //Reset về mặc định bản đấu
    const handleResetCalculaytor = () =>{
        setFirslNumber(0);
        setSecondNumber(0);
        setSign('+');
        setResult(0)
    }
    return(
        <React.Fragment>
            <div className="app-calculaytor">
                <h1>Counter: {counter}</h1>
                <button onClick={handleIncrement}>Increment (+)</button>
                <button onClick={handleDecrement}>Decrement (-)</button>
                <div className="calculaytor">
                    <button onClick={() => handlePressNumber(0)}>0</button>
                    <button onClick={() => handlePressNumber(1)}>1</button>
                    <button onClick={() => handlePressNumber(2)}>2</button>
                    <button onClick={() => handlePressNumber(3)}>3</button>
                    <button onClick={() => handlePressNumber(4)}>4</button>
                    <button onClick={() => handlePressNumber(5)}>5</button>
                    <button onClick={() => handlePressNumber(6)}>6</button>
                    <button onClick={() => handlePressNumber(7)}>7</button>
                    <button onClick={() => handlePressNumber(8)}>8</button>
                    <button onClick={() => handlePressNumber(9)}>9</button>
                    <button onClick={() => handlePressSign('+')}>+</button>
                    <button onClick={() => handlePressSign('-')}>-</button>
                    <button onClick={() => handlePressSign('*')}>*</button>
                    <button onClick={() => handlePressSign('/')}>/</button>
                    <button onClick={() => handlePressSign('%')}>%</button>
                    <button onClick={() => handlePressSign('^')}>^</button>
                    <button onClick={handleCalculaytor}>=</button>
                    <button onClick={handleResetCalculaytor}>Reset</button>
                    <h1>Số thứ nhất: {firslNumber}</h1>
                    <h1>Số thứ hai: {secondNumber}</h1>
                    <h1>Dấu: {sign}</h1>
                    <h1>Kết quả: {result}</h1>
                </div>
            
            </div>    
        </React.Fragment>
    )
}
export default Calculaytor;