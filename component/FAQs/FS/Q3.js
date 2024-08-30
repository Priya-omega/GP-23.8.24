import { useState } from 'react'
import { FaPlusSquare } from 'react-icons/fa'
import styles from '../../../styles/Questions.module.scss'

export default function Q3() {

  const [toggle, setToggle] = useState(false);

  return (
    <>

      <div className={styles.quebtn}>
        <span onClick={() => setToggle(!toggle)}> 3. What is the structure of teaching in this course?  </span>  <FaPlusSquare onClick={() => setToggle(!toggle)} className={styles.plusicon} /> </div>

      {
        toggle && (
          <div className={styles.question}>
            <p>It comes with classes both in classrooms and online so you can take them whenever it suits depending on your learning preferences. Classroom training offers a human-driven learning environment with an actual structure. You will get to know live online sessions, recorded lectures, and all your study material which you can access at any time from anywhere in this universe. Best of both worlds hybrid means anywhere you are, with the option to mix your learning experience around all things life While still getting hands-on instruction from Stunt Camp Australia in person. </p>

          </div>
        )
      }




    </>
  )
};

