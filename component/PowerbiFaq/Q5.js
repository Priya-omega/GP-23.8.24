import { useState } from 'react'
import { FaPlusSquare } from 'react-icons/fa'
import styles from '../../styles/Questions.module.scss'

export default function Q5() {

  const [toggle, setToggle] = useState(false);

  return (
    <>

      <div className={styles.quebtn}>
        <span onClick={() => setToggle(!toggle)}> What are the class timings and schedules for the Power BI course?  </span>  <FaPlusSquare onClick={() => setToggle(!toggle)} className={styles.plusicon} /> </div>

      {
        toggle && (
          <div className={styles.question}>

            <p> We offer flexible class timings and schedules for our Power BI course to accommodate students' needs. We have both weekday and weekend batches available, allowing students to choose a schedule that works best for them.</p>
          </div>
        )
      }




    </>
  )
};

