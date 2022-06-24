import {useEffect, useState} from "react";

//we need to start with 'use....'
const useCounter = (operator = true) => {
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            if(operator){
                setCounter((prevCounter) => prevCounter + 1);
            }else{
                setCounter((prevCounter) => prevCounter - 1);
            }
        }, 1000);

        return () => clearInterval(interval);
    }, [operator]);

    return counter;
};

export default useCounter;

//we can make them configurable by letting them to accept parameters