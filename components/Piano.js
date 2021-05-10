import React, { useContext } from 'react'
import { ValueContext } from '../context/valuecontext'

import styles from '../styles/Piano.module.css'

export const Piano = () => {

    const { handleGlobal, value } = useContext(ValueContext)

    const handleClickC = () => {

        handleGlobal({ name: 'value', payload: { note: 'C' } })
    }
    const handleClickD = () => {


        handleGlobal({ name: 'value', payload: { note: 'D' } })
    }
    const handleClickE = () => {


        handleGlobal({ name: 'value', payload: { note: 'E' } })
    }
    const handleClickF = () => {


        handleGlobal({ name: 'value', payload: { note: 'F' } }
        )

    }
    const handleClickG = () => {

        handleGlobal({ name: 'value', payload: { note: 'G' } })
    }
    const handleClickA = () => {


        handleGlobal({ name: 'value', payload: { note: 'A' } })
    }
    const handleClickB = () => {

        handleGlobal({ name: 'value', payload: { note: 'B' } })
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

        </div>
    )
}
