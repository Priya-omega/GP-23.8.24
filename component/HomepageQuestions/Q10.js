import { useState } from 'react'
import { FaPlusSquare } from 'react-icons/fa'
import styles from '../../styles/Questions.module.scss'

export default function Q10() {

  const [toggle, setToggle] = useState(false);

  return (
    <>

      <div className={styles.quebtn}>
        <span onClick={() => setToggle(!toggle)}>  How can I apply for the data analytics course at Guidance Point, and what is the admission process?  </span>  <FaPlusSquare onClick={() => setToggle(!toggle)} className={styles.plusicon} /> </div>

      {
        toggle && (
          <div className={styles.question}>
            <p>To apply for our data analytics course, interested candidates can visit our website or contact our admissions team for more information. The admission process typically involves filling out an application form, attending an interview or assessment, and submitting any required documentation. Our admissions team will guide you through the process and assist you at every step of the way. </p>

          </div>
        )
      }




    </>
  )
};

