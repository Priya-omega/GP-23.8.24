import { useState } from 'react'
import { FaPlusSquare } from 'react-icons/fa'
import styles from '../../styles/Questions.module.scss'

export default function Q1() {

  const [toggle, setToggle] = useState(true);

  return (
    <>

      <div className={styles.quebtn}>
        <span onClick={() => setToggle(!toggle)}>  What is the duration of the data analytics course offered by Guidance Point? </span>  <FaPlusSquare onClick={() => setToggle(!toggle)} className={styles.plusicon} /> </div>

      {
        toggle && (
          <div className={styles.question}>
            <p>The duration of our data analytics course typically ranges from 3 to 6 months, depending on the specific program and the depth of coverage. We offer flexible scheduling options to accommodate students' needs. </p>

          </div>
        )
      }




    </>
  )
};

