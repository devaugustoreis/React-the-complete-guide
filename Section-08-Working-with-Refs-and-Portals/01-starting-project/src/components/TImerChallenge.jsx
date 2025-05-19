import { useRef, useState } from "react"
import ResultModal from "./ResultModal"

// let timer; // The problem of doing this is that this variable would be shared by all components instances. (so the pointer to setTimeout would be overwritten).

export default function TimerChallenge({ title, targetTime }) {
    const timer = useRef() // Every component instance will have its own timer const ref. This is not recreated when component re-renders.
    const dialog = useRef()

    // let timer; // This do not work, because when the component is re-renders (state change on timerStarted), the variable is also recreated. 

    const [ timeRemaining, setTimeRemaining ] = useState(targetTime * 1000)
    const timeIsActive = timeRemaining > 0 && timeRemaining < targetTime * 1000

    if (timeRemaining <= 0) {
        clearInterval(timer.current)
        dialog.current.open()
    }
    
    function handleReset() {
        setTimeRemaining(targetTime * 1000)
    }

    function handleStart() {
        timer.current = setInterval(() => {
            setTimeRemaining(prevTimeRemaining => prevTimeRemaining - 10)
        }, 10)
    }

    function handleStop() {
        dialog.current.open()
        clearInterval(timer.current)
    }
    
    return (
        <>
            {/* Dialog is invisible by default */}
            <ResultModal 
                ref={ dialog } 
                targetTime={ targetTime } 
                remainingTime={ timeRemaining }
                onReset={ handleReset }    
            /> 
            <section className="challenge">
                <h2>{ title }</h2>
                <p className="challenge-time">
                    { targetTime } second{targetTime > 1 ? "s" : "" }
                </p>
                <p>
                    <button onClick={ timeIsActive ? handleStop : handleStart }>
                        { timeIsActive ? "Stop" : "Start" } Challenge
                    </button>
                </p>
                <p className={ timeIsActive ? "active" : undefined }>
                    { timeIsActive ? "Time is running..." : "Timer inactive" }
                </p>
            </section>
        </>
    )
}