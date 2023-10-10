import React from "react";
import { useState } from 'react';

export default function Homepage() {

    const [count, setCount] = useState(0);

    function updateCount(){
        setCount(count+1);
    }   

    return (
        <div>
            <button id="clickme" onClick={updateCount}>Click Me {count}</button>
        </div>
    ); 
};
