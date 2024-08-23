import { useState } from 'react'
import { FaPlusSquare } from 'react-icons/fa'
import styles from '../../styles/Questions.module.scss'

export default function Q9() {

  const [toggle, setToggle] = useState(false);

  return (
    <>

      <div className={styles.quebtn}>
        <span onClick={() => setToggle(!toggle)}>  What kind of certification will I receive upon completing the data analytics course at Guidance Point?  </span>  <FaPlusSquare onClick={() => setToggle(!toggle)} className={styles.plusicon} /> </div>

      {
        toggle && (
          <div className={styles.question}>
            <p>Upon successfully completing our data analytics course, students will receive a certification from Guidance Point, acknowledging their proficiency in data analytics concepts and techniques. Our certification is recognized by industry professionals and can enhance students' career prospects. </p>

          </div>
        )
      }




    </>
  )
};

