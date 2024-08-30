import { useState } from 'react'
import { FaPlusSquare } from 'react-icons/fa'
import styles from '../../../styles/Questions.module.scss'

export default function Q6() {

  const [toggle, setToggle] = useState(false);

  return (
    <>

      <div className={styles.quebtn}>
        <span onClick={() => setToggle(!toggle)}> 6. What is the "pay after placement" process?  </span>  <FaPlusSquare onClick={() => setToggle(!toggle)} className={styles.plusicon} /> </div>

      {
        toggle && (
          <div className={styles.question}>
            <p> The pay After Placement option saves you from learning under financial pressure. You do not have to pay for the full stack developer course in Pune upfront. But with this, you ), and only after getting a job in the tech industry. This approach to this problem helps you pay for the course when you eventually land a job, it can be seen as a sort of financial help and correlates with money spent on your career. </p>

          </div>
        )
      }




    </>
  )
};

