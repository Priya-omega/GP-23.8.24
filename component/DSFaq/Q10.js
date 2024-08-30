import { useState } from 'react'
import { FaPlusSquare } from 'react-icons/fa'
import styles from '../../styles/Questions.module.scss'

export default function Q10() {

  const [toggle, setToggle] = useState(false);

  return (
    <>

      <div className={styles.quebtn}>
        <span onClick={() => setToggle(!toggle)}> 10. How can I enroll in a data science course at Guidance Point?  </span>  <FaPlusSquare onClick={() => setToggle(!toggle)} className={styles.plusicon} /> </div>

      {
        toggle && (
          <div className={styles.question}>

            <p> Enrolling in a data science course at Guidance Point is simple. Visit our website to explore our data science offerings, schedule a consultation with our admissions team, and begin your journey towards a successful career in data science. </p>

          </div>
        )
      }




    </>
  )
};

