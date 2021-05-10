import React, { useContext } from 'react'
import { ValueContext } from '../context/valuecontext'

import styles from '../styles/Piano.module.css'


export const Button = ({ htmlValue }) => {

    const { handleGlobal } = useContext(ValueContext)

    const handleClick = () => {
        let slicedValue = htmlValue.slice(1)

        slicedValue.forEach((element, index) => {

            setTimeout(() => {
                handleGlobal({ name: 'value', payload: { note: element, noteAgain: true } })

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
