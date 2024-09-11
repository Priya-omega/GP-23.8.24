import { useState } from 'react'
import { FaPlusSquare } from 'react-icons/fa'
import styles from '../../../styles/Questions.module.scss'

export default function Q3() {

  const [toggle, setToggle] = useState(false);

  return (
    <>

      <div className={styles.quebtn}>
        <span onClick={() => setToggle(!toggle)}>  3. How is this course different from other programming courses? </span>  <FaPlusSquare onClick={() => setToggle(!toggle)} className={styles.plusicon} /> </div>

      {
        toggle && (
          <div className={styles.question}>
            <p> This course stands out from other programming courses by offering a comprehensive approach that covers both front-end and back-end development. You will learn to create complete applications from the ground up, seamlessly integrating client-side and server-side technologies. The focus is on practical projects, real-world applications, and industry best practices, ensuring you acquire hands-on experience and skills that are ready for the job market. </p>

          </div>
        )
      }




    </>
  )
};

