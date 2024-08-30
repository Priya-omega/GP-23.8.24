import { useState } from 'react'
import { FaPlusSquare } from 'react-icons/fa'
import styles from '../../styles/Questions.module.scss'

export default function Q3() {

  const [toggle, setToggle] = useState(false);

  return (
    <>

      <div className={styles.quebtn}>
        <span onClick={() => setToggle(!toggle)}> 3. How do your data science courses stand out compared to others in Pune?  </span>  <FaPlusSquare onClick={() => setToggle(!toggle)} className={styles.plusicon} /> </div>

      {
        toggle && (
          <div className={styles.question}>

            <p> Our data science courses are distinguished by their practical approach, real-world projects, and personalized mentorship, ensuring our students gain the skills and experience needed to excel in the field of data science. </p>

          </div>
        )
      }




    </>
  )
};

