import { useState } from 'react'
import { FaPlusSquare } from 'react-icons/fa'
import styles from '../../../styles/Questions.module.scss'

export default function Q12() {

  const [toggle, setToggle] = useState(false);

  return (
    <>

      <div className={styles.quebtn}>
        <span onClick={() => setToggle(!toggle)}>  12. Do I get a certification on course completion? </span>  <FaPlusSquare onClick={() => setToggle(!toggle)} className={styles.plusicon} /> </div>

      {
        toggle && (
          <div className={styles.question}>
            <p>You will get a certification that confirms your expertise in web development by completing the Full Stack Development course. Having this certification on your resume or LinkedIn profile is demonstrative of you as an individual in terms of skills and commitment to the employers. It is proof of your learning and preparedness for a full-stack development job.</p>

          </div>
        )
      }




    </>
  )
};

