import { useState } from 'react'
import { FaPlusSquare } from 'react-icons/fa'
import styles from '../../../styles/Questions.module.scss'

export default function Q2() {

  const [toggle, setToggle] = useState(false);

  return (
    <>

      <div className={styles.quebtn}>
        <span onClick={() => setToggle(!toggle)}>2. Why is SAP FICO important for businesses? </span>  <FaPlusSquare onClick={() => setToggle(!toggle)} className={styles.plusicon} /> </div>

      {
        toggle && (
          <div className={styles.question}>
            <p> SAP FICO plays a vital role as it simplifies financial processes, improves accuracy in financial reporting, and aids in effective budgeting and cost management. It enables businesses to handle their financial operations more efficiently, ensuring compliance and supporting informed decision-making become a master with SAP FICO Classes in Pune.</p>

          </div>
        )
      }




    </>
  )
};

