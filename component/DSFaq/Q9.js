import { useState } from 'react'
import { FaPlusSquare } from 'react-icons/fa'
import styles from '../../styles/Questions.module.scss'

export default function Q9() {

  const [toggle, setToggle] = useState(false);

  return (
    <>

      <div className={styles.quebtn}>
        <span onClick={() => setToggle(!toggle)}> 9. Does Guidance Point provide job placement assistance for data science graduates?  </span>  <FaPlusSquare onClick={() => setToggle(!toggle)} className={styles.plusicon} /> </div>

      {
        toggle && (
          <div className={styles.question}>

            <p> Yes, we provide comprehensive job placement assistance, including resume building, interview preparation, and networking opportunities, to help our data science graduates secure rewarding positions in the tech industry. </p>

          </div>
        )
      }




    </>
  )
};

