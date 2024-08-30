import { useState } from 'react'
import { FaPlusSquare } from 'react-icons/fa'
import styles from '../../styles/Questions.module.scss'

export default function Q4() {

  const [toggle, setToggle] = useState(false);

  return (
    <>

      <div className={styles.quebtn}>
        <span onClick={() => setToggle(!toggle)}>  Does Guidance Point offer any placement assistance or career support services for Power BI course graduates? </span>  <FaPlusSquare onClick={() => setToggle(!toggle)} className={styles.plusicon} /> </div>

      {
        toggle && (
          <div className={styles.question}>

            <p> Yes, Guidance Point is committed to providing placement assistance and career support services to our Power BI course graduates. Our dedicated placement cell works closely with leading organizations to help students secure job placements. We also offer resume building, interview preparation, and networking opportunities to enhance students' career prospects.</p>
          </div>
        )
      }




    </>
  )
};

