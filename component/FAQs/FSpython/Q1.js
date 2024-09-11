import { useState } from 'react'
import { FaPlusSquare } from 'react-icons/fa'
import styles from '../../../styles/Questions.module.scss'

export default function Q1() {

  const [toggle, setToggle] = useState(true);

  return (
    <>

      <div className={styles.quebtn}>
        <span onClick={() => setToggle(!toggle)}>  1. Who is this Full Stack Python course best suited for? </span>  <FaPlusSquare onClick={() => setToggle(!toggle)} className={styles.plusicon} /> </div>

      {
        toggle && (
          <div className={styles.question}>
            <p> This course is perfect for anyone eager to start or advance their career in software development. Whether you’re a recent graduate, a professional aiming to enhance your skills, or someone transitioning into the tech field, this course will equip you with the essential skills and knowledge. While having a basic understanding of programming concepts is beneficial, it’s not a requirement, as the course begins with foundational modules. </p>

          </div>
        )
      }




    </>
  )
};

