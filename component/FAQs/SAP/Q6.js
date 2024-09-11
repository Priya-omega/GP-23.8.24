import { useState } from 'react'
import { FaPlusSquare } from 'react-icons/fa'
import styles from '../../../styles/Questions.module.scss'

export default function Q6() {

  const [toggle, setToggle] = useState(false);

  return (
    <>

      <div className={styles.quebtn}>
        <span onClick={() => setToggle(!toggle)}> 6. What are the career opportunities after completing an SAP FICO Classes in Pune? </span>  <FaPlusSquare onClick={() => setToggle(!toggle)} className={styles.plusicon} /> </div>

      {
        toggle && (
          <div className={styles.question}>
            <p> After completing an SAP FICO course, career opportunities may include positions like SAP FICO Consultant, SAP Financial Manager, SAP Analyst, SAP Trainer, and SAP FICO Support Specialist. These roles involve the implementation, management, and optimization of SAP FICO systems and processes.</p>

          </div>
        )
      }




    </>
  )
};

