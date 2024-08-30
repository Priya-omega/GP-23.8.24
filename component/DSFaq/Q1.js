import { useState } from 'react'
import { FaPlusSquare } from 'react-icons/fa'
import styles from '../../styles/Questions.module.scss'

export default function Q1() {

  const [toggle, setToggle] = useState(true);

  return (
    <>

      <div className={styles.quebtn}>
        <span onClick={() => setToggle(!toggle)}> 1. What makes Guidance Point the best technology institute in Pune?</span>  <FaPlusSquare onClick={() => setToggle(!toggle)} className={styles.plusicon} /> </div>

      {
        toggle && (
          <div className={styles.question}>

            <p> At Guidance Point, we pride ourselves on offering top-tier data science courses and unparalleled technology education, making us the preferred choice for aspiring professionals in Pune's thriving tech industry. </p>
          </div>
        )
      }




    </>
  )
};

