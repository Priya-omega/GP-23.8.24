import { useState } from 'react'
import { FaPlusSquare } from 'react-icons/fa'
import styles from '../../../styles/Questions.module.scss'

export default function Q4() {

  const [toggle, setToggle] = useState(false);

  return (
    <>

      <div className={styles.quebtn}>
        <span onClick={() => setToggle(!toggle)}>  4. Full Stack Development Course Duration </span>  <FaPlusSquare onClick={() => setToggle(!toggle)} className={styles.plusicon} /> </div>

      {
        toggle && (
          <div className={styles.question}>
            <p> Our full stack Java course in Pune is generally 12–16 weeks with the learning format and pace you select. Full-time students can finish the program in 3 months; part-time or hybrid learners may take longer. The program is built as a full stack track that fits into the shorter duration that will ensure deep education and hand on practice.</p>

          </div>
        )
      }




    </>
  )
};

