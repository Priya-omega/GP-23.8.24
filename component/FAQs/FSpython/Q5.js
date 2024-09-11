import { useState } from 'react'
import { FaPlusSquare } from 'react-icons/fa'
import styles from '../../../styles/Questions.module.scss'

export default function Q5() {

  const [toggle, setToggle] = useState(false);

  return (
    <>

      <div className={styles.quebtn}>
        <span onClick={() => setToggle(!toggle)}> 5. How much time should I dedicate to this course each week?  </span>  <FaPlusSquare onClick={() => setToggle(!toggle)} className={styles.plusicon} /> </div>

      {
        toggle && (
          <div className={styles.question}>
            <p> The amount of time you should dedicate to this course each week can vary based on your previous experience and learning speed. Generally, you should plan to spend around 10-15 hours weekly to attend live sessions, complete assignments, and work on projects. The course is designed to be flexible, allowing you to learn at your own pace, with access to recorded sessions and online materials. </p>

          </div>
        )
      }




    </>
  )
};

