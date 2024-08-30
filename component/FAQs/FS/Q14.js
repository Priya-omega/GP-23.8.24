import { useState } from 'react'
import { FaPlusSquare } from 'react-icons/fa'
import styles from '../../../styles/Questions.module.scss'

export default function Q14() {

  const [toggle, setToggle] = useState(false);

  return (
    <>

      <div className={styles.quebtn}>
        <span onClick={() => setToggle(!toggle)}>14. How do I get hold of course materials and resources?   </span>  <FaPlusSquare onClick={() => setToggle(!toggle)} className={styles.plusicon} /> </div>

      {
        toggle && (
          <div className={styles.question}>
            <p>You will have the course materials, such as lecture notes and video recordings (including captions), available to you for life. This access in turn enables you to have the ability to go back and review those lessons that may be rusty whether it was simple or as complex… reinforcements are sometimes necessary, which is also something staying up-to-date for information firefighters out there seeking new finds. The course has its online learning platforms so all the resources required for your better understanding will be available there and live interaction with instructors as well as peers. </p>

          </div>
        )
      }




    </>
  )
};

