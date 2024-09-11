import { useState } from 'react'
import { FaPlusSquare } from 'react-icons/fa'
import styles from '../../../styles/Questions.module.scss'

export default function Q1() {

  const [toggle, setToggle] = useState(true);

  return (
    <>

      <div className={styles.quebtn}>
        <span onClick={() => setToggle(!toggle)}> 1. What is SAP FICO? </span>  <FaPlusSquare onClick={() => setToggle(!toggle)} className={styles.plusicon} /> </div>

      {
        toggle && (
          <div className={styles.question}>
            <p>SAP FICO refers to Financial Accounting and Controlling. It is a fundamental module within SAP ERP that merges financial accounting with management accounting, offering a complete perspective on financial data and performance get to know all this with our SAP FICO Classes in Pune. </p>

          </div>
        )
      }




    </>
  )
};

