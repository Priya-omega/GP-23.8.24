import { useState } from 'react'
import { FaPlusSquare } from 'react-icons/fa'
import styles from '../../styles/Questions.module.scss'

export default function Q7() {

  const [toggle, setToggle] = useState(false);

  return (
    <>

      <div className={styles.quebtn}>
        <span onClick={() => setToggle(!toggle)}>  Can you provide information about any industry projects or practical assignments included in the Power BI course?  </span>  <FaPlusSquare onClick={() => setToggle(!toggle)} className={styles.plusicon} /> </div>

      {
        toggle && (
          <div className={styles.question}>

            <p> Yes, our Power BI course includes industry projects, case studies, and practical assignments that allow students to apply their knowledge and skills to real-world scenarios. These hands-on learning opportunities are an integral part of our curriculum and help students gain practical experience  </p>
          </div>
        )
      }




    </>
  )
};

