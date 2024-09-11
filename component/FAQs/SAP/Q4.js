import { useState } from 'react'
import { FaPlusSquare } from 'react-icons/fa'
import styles from '../../../styles/Questions.module.scss'

export default function Q4() {

  const [toggle, setToggle] = useState(false);

  return (
    <>

      <div className={styles.quebtn}>
        <span onClick={() => setToggle(!toggle)}> 4. What is the difference between SAP FI and SAP CO? </span>  <FaPlusSquare onClick={() => setToggle(!toggle)} className={styles.plusicon} /> </div>

      {
        toggle && (
          <div className={styles.question}>
            <p>SAP FI (Financial Accounting) is centered on external financial reporting and compliance, covering aspects like the general ledger and accounts receivable/payable. In contrast, SAP CO (Controlling) focuses on internal cost management, including cost centers, profit centers, and internal orders. </p>

          </div>
        )
      }




    </>
  )
};

