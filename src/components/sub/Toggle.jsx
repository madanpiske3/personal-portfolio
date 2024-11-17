'use client'
// import { reactLocalStorage } from 'reactjs-localstorage'
import { moonIcon, sunIcon } from "@/assets"
import { useRef, useState } from "react"

// import {reactLocalStorage} from 'reactjs-localstorage'

const Toggle = ({ children }) => {
    // const storedTheme = reactLocalStorage.get('darkTheme')
    // const storedTheme = reactLocalStorage.get('darkTheme', false);
    const [darkTheme, setDarkTheme] = useState(false)
    // const [darkTheme, setDarkTheme] = useState(true)

    // if(storedTheme) {
    //     const [darkTheme, setDarkTheme] = useState(true)
    // }else{
    //     const [darkTheme, setDarkTheme] = useState(false)
    // }
    const mainRef = useRef(null)
    // const 
    const adddarkTheme = () => {
        mainRef.current.classList.add('dark')
        setDarkTheme(true)

    }
    const removedarkTheme = () => {
        mainRef.current.classList.remove('dark')
        setDarkTheme(false)
    } 
  return (
    <main ref={mainRef}>
        <div className="bg-zinc-50">
            <button onClick={() => {
                if(!darkTheme) {
                    adddarkTheme()
                    // reactLocalStorage.set('darkTheme', true)
                }else{
                    removedarkTheme()
                    // reactLocalStorage.set('darkTheme', false)
                }
            }} className="fixed right-14 sm:right-10 top-10 z-50">
                {/* <motion */}
                {/* <span className="absolute block rounded-full bg-zinc-300 p-1 text-4xl hover:text-orange-300 text-orange-600 ">{sunIcon}</span> */}
                <span className={`sm:hidden absolute block rounded-full dark:bg-orange-100  bg-slate-300 p-1 text-4xl ${darkTheme && 'text-fuchsia-900 hover:text-fuchsia-300'} ${!darkTheme && 'hover:text-orange-300 text-orange-600'} `}>{darkTheme ? moonIcon : sunIcon}</span>
            </button>
            {children}
        </div>
    </main>
  )
}

export default Toggle
