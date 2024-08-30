import { useState } from 'react'
import { FaPlusSquare } from 'react-icons/fa'
import styles from '../../../styles/Questions.module.scss'

export default function Q10() {

  const [toggle, setToggle] = useState(false);

  return (
    <>

      <div className={styles.quebtn}>
        <span onClick={() => setToggle(!toggle)}> 10. So tell me how do I practice the mock interviews or job preparation workshops?  </span>  <FaPlusSquare onClick={() => setToggle(!toggle)} className={styles.plusicon} /> </div>

      {
        toggle && (
          <div className={styles.question}>
            <p>These are dummy interviews where you solve regular tech and behavioral questions. These performance sessions are facilitated by experienced professionals who give feedback and coaching to help you improve. Such things as job preparation workshops, interview strategies, resume writing, or proper ways to search for a job. Workshops that give you the tools and confidence to succeed in a current marketplace </p>

          </div>
        )
      }




    </>
  )
};

