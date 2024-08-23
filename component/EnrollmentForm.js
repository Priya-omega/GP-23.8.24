import React from 'react'
import styles from '../styles/Popup.module.scss'
import Link from 'next/link'

export default function EnrollmentForm() {
    function handleSubmit() {
        alert("Form Submitted Successfully!")
    }

    return (
        <>

            <div className='EnrollmentForm'>


                <h3>Enroll Now</h3>


                <form action="https://formsubmit.co/technoscriptspune@gmail.com" method="POST" onSubmit={handleSubmit} >

                    <input type="hidden" name="_captcha" value="false" />

                    <input type="hidden" name="_subject" value="Technoscripts Enquiry Form!" />

                    <input type="hidden" name="_next" value="https://technoscripts.in/" />

                    {/* <input type="hidden" name="_next" value=" http://localhost:3000/" /> */}

                    <div className='inputdiv'>
                        <label>Full Name</label> <br />
                        <input
                            type="text"
                            name='user_name'
                            placeholder='John Doe'
                            required
                        />
                    </div>

                    <div className='inputdiv'>
                        <label>Mobile Number</label> <br />

                        <input
                            type="number"
                            name='user_number'
                            placeholder='+91 8988906777'
                            required

                        />
                    </div>

                    <div className='inputdiv'>
                        <label>Email ID</label> <br />

                        <input
                            type="email"
                            name='user_email'
                            placeholder='john@example.com'
                            required
                        />
                    </div>

                    <div className='inputdiv'>
                        <label>Feedback</label> <br />

                        <input
                            type="text"
                            name='user_email'
                            placeholder='Enter your feedback'
                            required
                        />
                    </div>



                    <div className='btn'>
                        <button type='submit'>Submit</button>
                    </div>

                    <p className='tnc'>By enrolling, you agree to our <Link href=""> Terms and Conditions</Link>.</p>

                </form>
            </div>


        </>
    )
}
