import React from 'react'
import './style.css'
import Idea from './svg/idea';
import Message from './svg/message';
import Check from './svg/check';
import Print from './svg/print';
import Logistics from './svg/logistics';

export default function Bottombody2() {
    return (
        <div className='bottombody2'>
            <div className='bottombody2_TextDiv'> 
                <h1 className='bottombody2_Text'>
                How we work to deliver custom parts
                and custom prints.</h1>
                <p>From Idea To Reality</p>
            </div>
            {/* steps to get 3d printng service with troniclab */}
            <div  className='bottombody2_Steps'>
                <div>
                    <h2>Contact us And Speak To A Professional.</h2>
                    <Idea/>
                </div>
                <div>
                    <h2>Send Us A Design in STL File.</h2>
                    <Message/>
                </div>
                <div>
                    <h2>Quote Will Be Sent</h2>
                    <Check/>
                </div>
                <div>
                    <h2>Design Will Be Printed</h2>
                    <Print/>
                </div>
                <div>
                    <h2>Recieve Your Printed Design.</h2>
                    <Logistics/>
                </div>
            </div>
        </div>
    )
}
