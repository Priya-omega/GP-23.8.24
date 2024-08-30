import { useState } from 'react'
import { FaPlusSquare } from 'react-icons/fa'
import styles from '../../styles/Questions.module.scss'

export default function Q6() {

  const [toggle, setToggle] = useState(false);

  return (
    <>

      <div className={styles.quebtn}>
        <span onClick={() => setToggle(!toggle)}>  Who are the instructors teaching the Power BI course at Guidance Point?  </span>  <FaPlusSquare onClick={() => setToggle(!toggle)} className={styles.plusicon} /> </div>

      {
        toggle && (
          <div className={styles.question}>

            <p> Our Power BI course is taught by experienced faculty members who are experts in the field of Power BI. They bring a wealth of industry experience and academic knowledge to the classroom, ensuring high-quality instruction and personalized attention for students.  </p>
          </div>
        )
      }




    </>
  )
};

