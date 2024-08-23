import { useState } from 'react'
import { FaPlusSquare } from 'react-icons/fa'
import styles from '../../styles/Questions.module.scss'

export default function Q3() {

  const [toggle, setToggle] = useState(false);

  return (
    <>

      <div className={styles.quebtn}>
        <span onClick={() => setToggle(!toggle)}> Can you provide details about the curriculum covered in the data analytics course? </span>  <FaPlusSquare onClick={() => setToggle(!toggle)} className={styles.plusicon} /> </div>

      {
        toggle && (
          <div className={styles.question}>
            <p>Our data analytics course covers a comprehensive curriculum that includes topics such as statistics, data manipulation, data visualization, machine learning, and big data technologies. The curriculum is designed to provide students with a strong foundation in data analytics and prepare them for careers in the field. </p>

          </div>
        )
      }




    </>
  )
};

