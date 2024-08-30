import { useState } from 'react'
import { FaPlusSquare } from 'react-icons/fa'
import styles from '../../styles/Questions.module.scss'

export default function Q8() {

  const [toggle, setToggle] = useState(false);

  return (
    <>

      <div className={styles.quebtn}>
        <span onClick={() => setToggle(!toggle)}>  Is the Power BI course instructor-led or self-paced?  </span>  <FaPlusSquare onClick={() => setToggle(!toggle)} className={styles.plusicon} /> </div>

      {
        toggle && (
          <div className={styles.question}>

            <p> Our Power BI course primarily follows an instructor-led format, with interactive sessions conducted by our experienced faculty members. However, we also offer some self-paced learning options to accommodate students' diverse learning styles and schedules.  </p>
          </div>
        )
      }




    </>
  )
};

