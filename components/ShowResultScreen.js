import React, { useContext, useState } from 'react'
import { ValueContext } from '../context/valuecontext'



import styles from '../styles/Piano.module.css'
import { Button } from './Button'

export const ShowResultScreen = () => {

    const { value } = useContext(ValueContext)

    const [htmlValue, setHtmlValue] = useState([])


    const showLetters = () => {
        value?.noteAgain ||
            (htmlValue.length < 30 &&

                htmlValue.push(value?.note)//am I profaning state value??            


            )



        return (

            {
                __html: [...htmlValue].slice(1)



            }
        )
    }

    return (
        <>
            <div className={styles.window}>

                <div dangerouslySetInnerHTML={showLetters()} />


            </div>
            <Button htmlValue={htmlValue} />
        </>
    )
}
