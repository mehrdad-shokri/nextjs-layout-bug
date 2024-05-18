import Link from "next/link";
import React from "react";


const Page = () => {
    return (
        <div>
            <h1>Navigation Links:</h1>
            <div><Link href={'/billing'}>Biling</Link></div>
            <div><Link href={'/settings'}>settings</Link></div>
            <div><Link href={'/usage'}>usage</Link></div>
        </div>
    )
}
export default Page