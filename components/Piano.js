import React, { useContext, useEffect, useState } from 'react'
import { ValueContext } from '../context/valuecontext'

import A from '../public/notes/notes_A.mp3'
import B from '../public/notes/notes_B.mp3'
import C from '../public/notes/notes_C.mp3'
import D from '../public/notes/notes_D.mp3'
import E from '../public/notes/notes_E.mp3'
import F from '../public/notes/notes_F.mp3'
import G from '../public/notes/notes_G.mp3'

import styles from '../styles/Piano.module.css'

export const Piano = () => {

    const { handleGlobal, value } = useContext(ValueContext)

    const handleClickC = () => {
        handleGlobal({ name: 'value', payload: { note: 'C' } })
        let noteC = new Audio(C)
        noteC.play()

    }
    const handleClickD = () => {
        handleGlobal({ name: 'value', payload: { note: 'D' } })
        let noteD = new Audio(D)
        noteD.play()
    }
    const handleClickE = () => {
        handleGlobal({ name: 'value', payload: { note: 'E' } })
        let noteE = new Audio(E)
        noteE.play()
    }
    const handleClickF = () => {
        handleGlobal({ name: 'value', payload: { note: 'F' } })
        let noteF = new Audio(F)
        noteF.play()

    }
    const handleClickG = () => {
        handleGlobal({ name: 'value', payload: { note: 'G' } })
        let noteG = new Audio(G)
        noteG.play()
    }
    const handleClickA = () => {
        handleGlobal({ name: 'value', payload: { note: 'A' } })
        let noteA = new Audio(A)
        noteA.play()
    }
    const handleClickB = () => {
        handleGlobal({ name: 'value', payload: { note: 'B' } })
        let noteB = new Audio(B)
        noteB.play()
    }


    return (
        <div className={styles.piano}>

            {
                value?.note === 'C'
                    ?

                    (
                        <div >

                            <div onClick={handleClickC}
                                className={styles.keyWhite}
                                style={{ backgroundColor: 'yellow' }}
                            >C</div>
                        </div>

                    )
                    :
                    (
                        <div >
                            <div onClick={handleClickC}
                                className={styles.keyWhite}
                            >C</div>
                        </div>
                    )
            }




            <div className={styles.keyBlack}></div>

            {
                value?.note === 'D'
                    ?
                    (
                        <div >
                            <div onClick={handleClickD}
                                className={styles.keyWhite}
                                style={{ backgroundColor: 'yellow' }}
                            >D</div>
                        </div>

                    )
                    :
                    (
                        <div >
                            <div onClick={handleClickD}
                                className={styles.keyWhite}
                            >D</div>
                        </div>
                    )
            }

            <div className={styles.keyBlack}></div>

            {
                value?.note === 'E'
                    ?
                    (
                        <div >
                            <div onClick={handleClickE}
                                className={styles.keyWhite}
                                style={{ backgroundColor: 'yellow' }}
                            >E</div>
                        </div>

                    )
                    :
                    (
                        <div >
                            <div onClick={handleClickE}
                                className={styles.keyWhite}
                            >E</div>
                        </div>
                    )
            }
            {
                value?.note === 'F'
                    ?
                    (
                        <div >
                            <div onClick={handleClickF}
                                className={styles.keyWhite}
                                style={{ backgroundColor: 'yellow' }}
                            >F</div>
                        </div>

                    )
                    :
                    (
                        <div >
                            <div onClick={handleClickF}
                                className={styles.keyWhite}
                            >F</div>
                        </div>
                    )
            }

            <div className={styles.keyBlack}></div>

            {
                value?.note === 'G'
                    ?
                    (
                        <div >
                            <div onClick={handleClickG}
                                className={styles.keyWhite}
                                style={{ backgroundColor: 'yellow' }}
                            >G</div>
                        </div>

                    )
                    :
                    (
                        <div >
                            <div onClick={handleClickG}
                                className={styles.keyWhite}
                            >G</div>
                        </div>
                    )
            }

            <div className={styles.keyBlack}></div>

            {
                value?.note === 'A'
                    ?
                    (
                        <div >
                            <div onClick={handleClickA}
                                className={styles.keyWhite}
                                style={{ backgroundColor: 'yellow' }}
                            >A</div>
                        </div>

                    )
                    :
                    (
                        <div >
                            <div onClick={handleClickA}
                                className={styles.keyWhite}
                            >A</div>
                        </div>
                    )
            }

            <div className={styles.keyBlack}></div>

            {
                value?.note === 'B'
                    ?
                    (
                        <div >
                            <div onClick={handleClickB}
                                className={styles.keyWhite}
                                style={{ backgroundColor: 'yellow' }}
                            >B</div>
                        </div>

                    )
                    :
                    (
                        <div >
                            <div onClick={handleClickB}
                                className={styles.keyWhite}
                            >B</div>
                        </div>
                    )
            }



        </div >
    )
}
