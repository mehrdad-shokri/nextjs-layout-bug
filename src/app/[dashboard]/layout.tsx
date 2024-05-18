'use client'
import React, {useState} from "react";
import Link from "next/link";

const Layout = ({children}: {
    children: React.ReactNode
}) => {
    console.log('Layout')
    const [counter, setCounter] = useState(0)
    return (
        <div>
            <h1>Layout</h1>
            <div>
                <button onClick={() => setCounter(prev => prev + 1)}>increase counter</button>
            </div>

            <div>counter: {counter}</div>
            {children}
        </div>
    )
}

export default React.memo(Layout)