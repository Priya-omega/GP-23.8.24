import { useState } from 'react'
import { FaPlusSquare } from 'react-icons/fa'
import styles from '../../../styles/Questions.module.scss'

export default function Q2() {

  const [toggle, setToggle] = useState(false);

  return (
    <>

      <div className={styles.quebtn}>
        <span onClick={() => setToggle(!toggle)}> 2. What topics will be covered in this Python Full stack developer course in Pune?  </span>  <FaPlusSquare onClick={() => setToggle(!toggle)} className={styles.plusicon} /> </div>

      {
        toggle && (
          <div className={styles.question}>
            <p> The course encompasses a broad array of topics, starting with the fundamentals of Python programming and advancing to more complex subjects like object-oriented programming, web development using frameworks such as Spring and Hibernate, database management, RESTful API development, DevOps essentials, security best practices, and the creation and deployment of complete Python-based applications. The curriculum is structured to provide you with a comprehensive understanding of full-stack development. </p>

          </div>
        )
      }




    </>
  )
};

