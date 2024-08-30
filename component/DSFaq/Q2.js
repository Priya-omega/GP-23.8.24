import { useState } from 'react'
import { FaPlusSquare } from 'react-icons/fa'
import styles from '../../styles/Questions.module.scss'

export default function Q2() {

  const [toggle, setToggle] = useState(false);

  return (
    <>

      <div className={styles.quebtn}>
        <span onClick={() => setToggle(!toggle)}> 2. Is Guidance Point recognized as the best data science institute in Pune?   </span>  <FaPlusSquare onClick={() => setToggle(!toggle)} className={styles.plusicon} /> </div>

      {
        toggle && (
          <div className={styles.question}>

            <p> Absolutely. Our data science program is renowned for its comprehensive curriculum, hands-on training, and expert faculty, earning us the distinction of being the leading data science institute in Pune. </p>

          </div>
        )
      }




    </>
  )
};

