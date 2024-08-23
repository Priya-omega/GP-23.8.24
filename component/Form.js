import React from 'react'
import styles from '../styles/Popup.module.scss'

export default function Form() {
    function handleSubmit() {
        alert("Form Submitted Successfully!")
    }

    return (
        <>

            <div className={styles.popup}>


                <h3>Request a callback</h3>


                <form action="https://formsubmit.co/technoscriptspune@gmail.com" method="POST" onSubmit={handleSubmit} className={styles.popupform}>

                    <input type="hidden" name="_captcha" value="false" />

                    <input type="hidden" name="_subject" value="Technoscripts Enquiry Form!" />

                    <input type="hidden" name="_next" value="https://technoscripts.in/" />

                    {/* <input type="hidden" name="_next" value=" http://localhost:3000/" /> */}

                    <div className={styles.popupinput}>
                        <input
                            type="text"
                            name='user_name'
                            placeholder='Enter your name'
                            required
                        />
                    </div>

                    <div className={styles.popupinput}>
                        <input
                            type="number"
                            name='user_number'
                            placeholder='Enter your contact number'
                            required

                        />
                    </div>

                    <div className={styles.popupinput}>
                        <input
                            type="email"
                            name='user_email'
                            placeholder='Enter your email'
                            required
                        />
                    </div>

                    <div className={styles.popupbtn}>
                        <button type='submit'>Submit</button>
                    </div>

                </form>
            </div>


        </>
    )
}
