import { useState } from 'react'
import { FaPlusSquare } from 'react-icons/fa'
import styles from '../../../styles/Questions.module.scss'

export default function Q8() {

  const [toggle, setToggle] = useState(false);

  return (
    <>

      <div className={styles.quebtn}>
        <span onClick={() => setToggle(!toggle)}> 8. Are there any course prerequisites for Full Stack Development?  </span>  <FaPlusSquare onClick={() => setToggle(!toggle)} className={styles.plusicon} /> </div>

      {
        toggle && (
          <div className={styles.question}>
            <p> The course is designed to cater to all, without a hard set of prerequisites. If you do, knowing a bit about web tech and general programming practices helps. This course/tutorial is an intermediate-level coding project; if you are newer, both categories of Codecademy and the Python variant may be useful as pre-work. We built our program to start from the ground up and work its way into advanced subject matter, so you will develop a sturdy full-stack education.</p>

          </div>
        )
      }




    </>
  )
};

