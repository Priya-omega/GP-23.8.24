import { useState } from 'react'
import { FaPlusSquare } from 'react-icons/fa'
import styles from '../../../styles/Questions.module.scss'

export default function Q6() {

  const [toggle, setToggle] = useState(false);

  return (
    <>

      <div className={styles.quebtn}>
        <span onClick={() => setToggle(!toggle)}>  6. Will I receive any certification upon completing the Python Full stack developer course in Pune? </span>  <FaPlusSquare onClick={() => setToggle(!toggle)} className={styles.plusicon} /> </div>

      {
        toggle && (
          <div className={styles.question}>
            <p> Yes, once you complete the course, you will earn a Full Stack Python Developer Certification. This certification is recognized in the industry and can greatly enhance your resume. It showcases your skills in Python-based full-stack development, making you a competitive candidate for various job opportunities in the tech field. </p>

          </div>
        )
      }




    </>
  )
};

