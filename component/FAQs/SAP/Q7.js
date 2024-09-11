import { useState } from 'react'
import { FaPlusSquare } from 'react-icons/fa'
import styles from '../../../styles/Questions.module.scss'

export default function Q7() {

  const [toggle, setToggle] = useState(false);

  return (
    <>

      <div className={styles.quebtn}>
        <span onClick={() => setToggle(!toggle)}> 7. What topics are covered in a typical SAP FICO Classes in Pune? </span>  <FaPlusSquare onClick={() => setToggle(!toggle)} className={styles.plusicon} /> </div>

      {
        toggle && (
          <div className={styles.question}>
            <p> A typical SAP FICO Training in Pune covers topics such as the fundamentals of financial accounting, principles of controlling, the SAP FI and CO modules, asset accounting, integration with other SAP modules, and advanced reporting techniques.</p>

          </div>
        )
      }




    </>
  )
};

