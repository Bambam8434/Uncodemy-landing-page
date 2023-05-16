import React from 'react'
import learning from "../image/tools/learning.jpg"
import timing  from "../image/tools/time.jpg"
import trainer  from "../image/tools/trainer.png"
import lab  from "../image/tools/lab.png"
import Fees  from "../image/tools/fees.png"
import Placement  from "../image/tools/placement.png"
import wa from "../image/whats-removebg-preview.png"

const Bootcamp = () => {
  return (
    <div className='bootcamp'>
     <h2 className='uplift-text'>This Bootcamp Will Uplift Your Career. <b style={{color:"#ff5421"}}>Here’s How.</b></h2>

     <div className='course-summary'>
     <div class="benefit-thumb">
                        
                        <img style={{borderRadius:"50%", height:"3rem", width:"4rem"}} src={timing} class="icons icon-benefit-1"/><h3> 120+ hours learning </h3>
                        <p>
                        With over 120 hours of instruction from an experienced Data Science, you will gain in-depth knowledge of the latest web development technologies and best practices.
                        </p>
                    </div>
     <div class="benefit-thumb">
                        
                        <img style={{borderRadius:"50%"}} src={learning} class="icons icon-benefit-2"/><h3> Immersive learning platform </h3>
                        <p>
                        Get an Opportunity to work in Real-time Projects that will give you a Deep Experience. Showcase your Project Experience & Increase your chance of getting Hired!
                        </p>
                    </div>
     <div class="benefit-thumb">
                        
                        <img style={{borderRadius:"50%", width:"3.3rem"}} src={trainer} class="icons icon-benefit-3"/><h3> 10+ Year Experience Industry Expert Trainers </h3>
                        <p>
                        At Uncodemy, You will Learn from the Experts from industry who are Passionate in sharing their Knowledge with Learners. Get Personally Mentored by the Experts.
                        </p>
                    </div>
     <div class="benefit-thumb">
                        
                        <img style={{borderRadius:"50%", height:"3rem", width:"3rem"}} src={lab} class="icons icon-benefit-4"/><h3> Lab Facility with Internet </h3>
                        <p>
                        At Uncodemy, the availability of a lab facility with internet access for students can greatly enhance their practical experience and prepare for the Dream Job.
                        </p>
                    </div>
     <div class="benefit-thumb">
                        
                        <img style={{borderRadius:"50%",height:"3rem",  width:"4rem"}} src={Fees} /><h3> Affordable Fees with No Cost EMI </h3>
                        <p>
                        At Uncodemy, Course Fee is not only Affordable, but you have the option to pay it in Installments and also No Cost EMI. Quality Training at an Affordable Price is our Motto.
                        </p>
                    </div>
     <div class="benefit-thumb">
                        
                        <img style={{borderRadius:"50%", height:"3rem", width:"4rem"}} src={Placement} /><h3> 100% Placement Support </h3>
                        <p>
                        Tie-up & MOU with more than 500+ Small & Medium Companies to Support you with Opportunities to Kick-Start & Step-up your Career.
                        </p>
                    </div>
     </div>

     <div className='btn-group'>
    
     <button style={{background:"#ff5421"}}  id='call-us-btn' >  <a style={{color: "white", }} href="tel:+91-770 192 8515">Call Us</a></button>
        <button id='chat-btn'><img src={wa} class="icon whatsapp-icon"></img><a style={{color: "green"}}  href="https://wa.link/14ytee" target='_blank'>Chat With Us</a></button>
      </div>

        </div>
  )
}

export default Bootcamp