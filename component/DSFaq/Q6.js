import { useState } from 'react'
import { FaPlusSquare } from 'react-icons/fa'
import styles from '../../styles/Questions.module.scss'

export default function Q6() {

  const [toggle, setToggle] = useState(false);

  return (
    <>

      <div className={styles.quebtn}>
        <span onClick={() => setToggle(!toggle)}> 6. Do you offer flexible scheduling options for your data science courses?  </span>  <FaPlusSquare onClick={() => setToggle(!toggle)} className={styles.plusicon} /> </div>

      {
        toggle && (
          <div className={styles.question}>

            <p> Yes, we understand the importance of flexibility for our students. That's why we offer flexible scheduling options, including evening and weekend classes, to accommodate diverse schedules and commitments. </p>

          </div>
        )
      }




    </>
  )
};

