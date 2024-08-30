import { useState } from 'react'
import { FaPlusSquare } from 'react-icons/fa'
import styles from '../../styles/Questions.module.scss'

export default function Q7() {

  const [toggle, setToggle] = useState(false);

  return (
    <>

      <div className={styles.quebtn}>
        <span onClick={() => setToggle(!toggle)}> 7. Are your data science instructors industry experts?  </span>  <FaPlusSquare onClick={() => setToggle(!toggle)} className={styles.plusicon} /> </div>

      {
        toggle && (
          <div className={styles.question}>

            <p> Yes, our data science instructors are seasoned professionals with extensive experience in the field, ensuring our students receive practical insights and real-world knowledge to excel in their data science careers. </p>

          </div>
        )
      }




    </>
  )
};

