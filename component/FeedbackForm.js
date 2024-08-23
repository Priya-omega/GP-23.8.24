import React from 'react'
import Form from './Form'
import { FaHandPeace } from "react-icons/fa"
export default function FeedbackForm() {
    return (
        <>
            <div className='FeedbackForm'>
                <div className="text">

                    <h3> Welcome to Guidance Point </h3>
                    <h2>Where Knowledge Meets Opportunity <FaHandPeace className='handicon' /></h2>

                    <p>
                        The best institute for training in Pune, your ultimate destination for comprehensive education and professional development!
                    </p>

                    <div className="img">
                        <img src="img/feedbackform.svg" alt="" />
                    </div>
                </div>

                <div className="form">
                    <Form />
                </div>
            </div>
        </>

    )
}
