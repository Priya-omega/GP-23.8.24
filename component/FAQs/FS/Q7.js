import { useState } from 'react'
import { FaPlusSquare } from 'react-icons/fa'
import styles from '../../../styles/Questions.module.scss'

export default function Q7() {

  const [toggle, setToggle] = useState(false);

  return (
    <>

      <div className={styles.quebtn}>
        <span onClick={() => setToggle(!toggle)}> 7. How will the course add value to my LinkedIn Profile and resume?  </span>  <FaPlusSquare onClick={() => setToggle(!toggle)} className={styles.plusicon} /> </div>

      {
        toggle && (
          <div className={styles.question}>
            <p>We help our candidates with services such as LinkedIn profile optimization, and ATS-friendly resume building. Our professionals will work with you to develop a powerful and attention-grabbing LinkedIn profile that features your skills, projects, and successes which make recruiters circle back. We help you to create a resume that is optimized for ATS applications/resumes ie written in the correct format. However such services ensure that your professional online presence and application materials represent you appropriately. </p>

          </div>
        )
      }




    </>
  )
};

