import { useState } from 'react'
import { FaPlusSquare } from 'react-icons/fa'
import styles from '../../styles/Questions.module.scss'

export default function Q8() {

  const [toggle, setToggle] = useState(false);

  return (
    <>

      <div className={styles.quebtn}>
        <span onClick={() => setToggle(!toggle)}> 8. How do you ensure the quality of data science education at Guidance Point?  </span>  <FaPlusSquare onClick={() => setToggle(!toggle)} className={styles.plusicon} /> </div>

      {
        toggle && (
          <div className={styles.question}>

            <p> We maintain high standards of data science education through rigorous curriculum design, continuous instructor training, and regular updates to keep pace with industry advancements, ensuring our courses remain at the forefront of data science training in Pune. </p>

          </div>
        )
      }




    </>
  )
};

