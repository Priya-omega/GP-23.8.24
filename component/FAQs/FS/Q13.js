import { useState } from 'react'
import { FaPlusSquare } from 'react-icons/fa'
import styles from '../../../styles/Questions.module.scss'

export default function Q13() {

  const [toggle, setToggle] = useState(false);

  return (
    <>

      <div className={styles.quebtn}>
        <span onClick={() => setToggle(!toggle)}> 13. What type of career support do you provide once someone has completed the program?  </span>  <FaPlusSquare onClick={() => setToggle(!toggle)} className={styles.plusicon} /> </div>

      {
        toggle && (
          <div className={styles.question}>
            <p>Job Placement Support Services Once you get done with your course, we will still support your career. This includes continued support with job applications, interview training, and networking efforts. Career services and job fairs A Job fair is a type of event in which companies that are looking for employers meet with people who are seeking jobs, particularly students. Our Career Services team is dedicated to supporting you after graduation and moving into your professional expansion even further from alumni support to ensure that developing skills remains an ongoing part of the new role. </p>

          </div>
        )
      }




    </>
  )
};

