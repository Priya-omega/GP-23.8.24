import { useState } from 'react'
import { FaPlusSquare } from 'react-icons/fa'
import styles from '../../../styles/Questions.module.scss'

export default function Q5() {

  const [toggle, setToggle] = useState(false);

  return (
    <>

      <div className={styles.quebtn}>
        <span onClick={() => setToggle(!toggle)}> 5. Who can benefit from learning SAP FICO Course in Pune? </span>  <FaPlusSquare onClick={() => setToggle(!toggle)} className={styles.plusicon} /> </div>

      {
        toggle && (
          <div className={styles.question}>
            <p> Individuals such as financial analysts, accountants, auditors, and consultants can gain from learning SAP FICO. It is also beneficial for those looking to enhance their careers in finance and accounting or move into SAP-related positions.</p>

          </div>
        )
      }




    </>
  )
};

