import { useState } from 'react'
import { FaPlusSquare } from 'react-icons/fa'
import styles from '../../styles/Questions.module.scss'

export default function Q5() {

  const [toggle, setToggle] = useState(false);

  return (
    <>

      <div className={styles.quebtn}>
        <span onClick={() => setToggle(!toggle)}> 5. Can I trust Guidance Point to provide the best data science education in Pune?  </span>  <FaPlusSquare onClick={() => setToggle(!toggle)} className={styles.plusicon} /> </div>

      {
        toggle && (
          <div className={styles.question}>

            <p> Absolutely. With our proven track record of producing skilled data scientists, strong industry partnerships, and innovative teaching methodologies, Guidance Point is widely recognized as the ultimate destination for data science education in Pune. </p>

          </div>
        )
      }




    </>
  )
};

