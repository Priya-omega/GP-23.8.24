import { useState } from 'react'
import { FaPlusSquare } from 'react-icons/fa'
import styles from '../../../styles/Questions.module.scss'

export default function Q9() {

  const [toggle, setToggle] = useState(false);

  return (
    <>

      <div className={styles.quebtn}>
        <span onClick={() => setToggle(!toggle)}> 9. What Projects Will I Work on During the full stack Java course in Pune?  </span>  <FaPlusSquare onClick={() => setToggle(!toggle)} className={styles.plusicon} /> </div>

      {
        toggle && (
          <div className={styles.question}>
            <p>You will be solving several real world problems so that you can apply and practice your skills. From creating dynamic websites to backend full-stack applications, API projects, etc. These are jobs built to mirror actual industry situations and provide you with the experience of your hands along with a direct avenue for potential employers to display your capabilities. Projects are designed to incorporate front-end and back-end web development tasks together for a more balanced learning option. </p>

          </div>
        )
      }




    </>
  )
};

