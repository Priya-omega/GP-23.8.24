import { useState } from 'react'
import { FaPlusSquare } from 'react-icons/fa'
import styles from '../../../styles/Questions.module.scss'

export default function Q3() {

  const [toggle, setToggle] = useState(false);

  return (
    <>

      <div className={styles.quebtn}>
        <span onClick={() => setToggle(!toggle)}> 3. What are the key features of SAP FICO? </span>  <FaPlusSquare onClick={() => setToggle(!toggle)} className={styles.plusicon} /> </div>

      {
        toggle && (
          <div className={styles.question}>
            <p>The main features of SAP FICO include real-time financial reporting, seamless integration with other SAP modules, comprehensive budgeting and forecasting, efficient asset management, and streamlined processes for accounts payable and receivable. </p>

          </div>
        )
      }




    </>
  )
};

