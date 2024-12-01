'use client'
import React, {useState} from "react";
import Link from "next/link";

const Layout = ({children}: {
    children: React.ReactNode
}) => {
    console.log('Layout')
    const [counter, setCounter] = useState(0)

    const revalidate = () => {
        console.log('counter before:', counter)
        setCounter(5)
        console.log('after update', counter)
    }
    console.log('render', counter)
    return (
        <div>
            <h1>Layout</h1>
            <div>
                <button onClick={() => revalidate()}>increase counter</button>
            </div>

            <div>counter: {counter}</div>
            {children}
        </div>
    )
}

export default React.memo(Layout)