import { useState } from 'react'
import { FaPlusSquare } from 'react-icons/fa'
import styles from '../../styles/Questions.module.scss'

export default function Q4() {

  const [toggle, setToggle] = useState(false);

  return (
    <>

      <div className={styles.quebtn}>
        <span onClick={() => setToggle(!toggle)}> 4. What sets your data science training apart from competitors in Pune?  </span>  <FaPlusSquare onClick={() => setToggle(!toggle)} className={styles.plusicon} /> </div>

      {
        toggle && (
          <div className={styles.question}>

            <p>Our data science training is known for its industry relevance, cutting-edge tools, and focus on applied learning, making us the preferred choice for those seeking the best data science courses in Pune.  </p>

          </div>
        )
      }




    </>
  )
};

