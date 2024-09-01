import {useState} from 'react'; 
const MainContainer = ()=>{
    const [counter,setCounter] = useState(0);
    console.log(counter);
    const incriment = ()=>{
        setCounter((prevCounter)=>prevCounter+1);
    }

    const decriment = ()=>{
        setCounter((prevCounter)=>prevCounter-1);
    }
    return(
        <div className = "maincontainer">
        <h2>Counter Application</h2>
        <p>Counter : {counter}</p>
        <button onClick = {incriment}>Add </button>
        <button onClick = {decriment}>
        Subtract</button>
        </div>
    )
}

export default MainContainer;