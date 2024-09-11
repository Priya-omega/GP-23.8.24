import { useState } from 'react'
import { FaPlusSquare } from 'react-icons/fa'
import styles from '../../../styles/Questions.module.scss'

export default function Q4() {

  const [toggle, setToggle] = useState(false);

  return (
    <>

      <div className={styles.quebtn}>
        <span onClick={() => setToggle(!toggle)}> 4. What kind of practical projects will I work on during the course?  </span>  <FaPlusSquare onClick={() => setToggle(!toggle)} className={styles.plusicon} /> </div>

      {
        toggle && (
          <div className={styles.question}>
            <p> Throughout the course, you will engage in various hands-on projects that mimic real-world applications. These projects will involve building responsive web applications, developing RESTful APIs, creating dynamic databases, integrating front-end and back-end components, and deploying applications on cloud platforms. The capstone project at the end will help you consolidate all the skills you've acquired by developing a fully functional full-stack application. </p>

          </div>
        )
      }




    </>
  )
};

