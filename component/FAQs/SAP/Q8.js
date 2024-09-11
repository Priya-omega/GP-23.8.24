import { useState } from 'react'
import { FaPlusSquare } from 'react-icons/fa'
import styles from '../../../styles/Questions.module.scss'

export default function Q8() {

  const [toggle, setToggle] = useState(false);

  return (
    <>

      <div className={styles.quebtn}>
        <span onClick={() => setToggle(!toggle)}> 8. What is SAP FICO Course fees in Pune? </span>  <FaPlusSquare onClick={() => setToggle(!toggle)} className={styles.plusicon} /> </div>

      {
        toggle && (
          <div className={styles.question}>
            <p> SAP FICO Course fees in pune varies from facilities you take in so connect our counsellor to know more about it, you can alter it according to your needs thats why guidance point is the best SAP Training institute in Pune.</p>

          </div>
        )
      }




    </>
  )
};

