import { useState } from 'react'
import { FaPlusSquare } from 'react-icons/fa'
import styles from '../../styles/Questions.module.scss'

export default function Q2() {

  const [toggle, setToggle] = useState(false);

  return (
    <>

      <div className={styles.quebtn}>
        <span onClick={() => setToggle(!toggle)}> What are the prerequisites for enrolling in the Power BI course at Guidance Point?  </span>  <FaPlusSquare onClick={() => setToggle(!toggle)} className={styles.plusicon} /> </div>

      {
        toggle && (
          <div className={styles.question}>

            <p>There are no specific prerequisites for enrolling in our Power BI course. However, a basic understanding of mathematics, statistics, and programming concepts can be beneficial. Our course is designed to cater to students from diverse academic backgrounds. </p>
          </div>
        )
      }




    </>
  )
};

