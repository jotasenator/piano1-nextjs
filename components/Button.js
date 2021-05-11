import React, { useContext } from 'react'
import { ValueContext } from '../context/valuecontext'

import A from '../public/notes/notes_A.mp3'
import B from '../public/notes/notes_B.mp3'
import C from '../public/notes/notes_C.mp3'
import D from '../public/notes/notes_D.mp3'
import E from '../public/notes/notes_E.mp3'
import F from '../public/notes/notes_F.mp3'
import G from '../public/notes/notes_G.mp3'

import styles from '../styles/Piano.module.css'



export const Button = ({ htmlValue }) => {

    const { handleGlobal } = useContext(ValueContext)

    const handleNoteA = () => {
        let noteA = new Audio(A)
        noteA.play()
    }
    const handleNoteB = () => {
        let noteB = new Audio(B)
        noteB.play()
    }
    const handleNoteC = () => {
        let noteC = new Audio(C)
        noteC.play()
    }
    const handleNoteD = () => {
        let noteD = new Audio(D)
        noteD.play()
    }
    const handleNoteE = () => {
        let noteE = new Audio(E)
        noteE.play()
    }

    const handleNoteF = () => {
        let noteF = new Audio(F)
        noteF.play()
    }
    const handleNoteG = () => {
        let noteG = new Audio(G)
        noteG.play()
    }


    const handleClick = () => {
        let slicedValue = htmlValue.slice(1)


        slicedValue.forEach((element, index) => {

            setTimeout(() => {

                handleGlobal({ name: 'value', payload: { note: element, noteAgain: true } })

                switch (element) {
                    case element = 'A':
                        handleNoteA()
                        break
                    case element = 'B':
                        handleNoteB()
                        break
                    case element = 'C':
                        handleNoteC()
                        break
                    case element = 'D':
                        handleNoteD()
                        break
                    case element = 'E':
                        handleNoteE()
                        break
                    case element = 'F':
                        handleNoteF()
                        break
                    case element = 'G':
                        handleNoteG()
                        break
                }

            }, 500 * (index + 1))

        })

    }

    return (
        <div>
            <button
                className={styles.button}
                onClick={handleClick}
            >
                Play
            </button>


        </div>
    )
}
