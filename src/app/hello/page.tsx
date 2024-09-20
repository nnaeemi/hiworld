'use client'
import { use, useEffect, useRef, useState } from "react"
import { Component } from "./Component"
 

export default function Page() {
    const [count, setCount] = useState(1)
    const [random, setRandom] = useState('') 
    const secret = useRef()
    const getRandomID = ({
        secretKey
    }: {
        secretKey: string
    }) => `Bearer ${secretKey}`

    useEffect(()=>{
        setInterval(()=> {
            setCount((priv)=> {
                return priv+1 
            })
        },1000)

    },[]) //dependency array (if this changes run again) (needs to be here)

    const secretKey = crypto.randomUUID()

    useEffect(()=> {
    setRandom(crypto.randomUUID())
    },[count])
    return (<>
        <h1>count: {count}</h1>
        <h1>random: {random}</h1> 
        <h1>myFN: {getRandomID({secretKey})}</h1>

        <h1>{(() => {
            const myVal = 'test'
            return crypto.randomUUID()
        })()}</h1>

        <Component />
    </>
    )
}