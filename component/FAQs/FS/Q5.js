import { useState } from 'react'
import { FaPlusSquare } from 'react-icons/fa'
import styles from '../../../styles/Questions.module.scss'

export default function Q5() {

  const [toggle, setToggle] = useState(false);

  return (
    <>

      <div className={styles.quebtn}>
        <span onClick={() => setToggle(!toggle)}> 5. Is there assistance with job placement?  </span>  <FaPlusSquare onClick={() => setToggle(!toggle)} className={styles.plusicon} /> </div>

      {
        toggle && (
          <div className={styles.question}>
            <p> To assist in helping our students get jobs, we offer an array of job placement support options as a part of the success package. We provide you with a 100% job guarantee according to which we assist you in the industry attachment after completion of the course. These services involve resume building, LinkedIn profile optimization, mock interviews, and job search strategies. We'll also connect you with potential employers and our dedicated career services team will help walk you through the job application process. </p>

          </div>
        )
      }




    </>
  )
};

