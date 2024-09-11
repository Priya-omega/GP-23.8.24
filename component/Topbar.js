import React from 'react'
import { FaPhoneAlt, FaRegHandPointRight } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'

export default function Topbar() {
    return (
        <>
            <div className="topbar">
                <div className="contact">
                    <div className='box'>
                        <FaPhoneAlt className="phoneicon" />: 8605006788 |
                    </div>

                    <div className='box box1'>
                        <MdEmail className="mailicon" /> info@technoscripts.in
                    </div>
                </div>
            </div>

        </>
    )
}
