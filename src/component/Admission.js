import React from 'react'
import step1 from '../image/step-1.png'
import step2 from '../image/step-2.png'
import step3 from '../image/step-3.png'
import step4 from '../image/step-4.png'
const Admission = () => {
  return (
    <div className='admission'>
        <div class="container">
			
		<h2 style={{color:"white", fontWeight:"700"}} class="section-heading text-center"> Admission <b style={{color:"#ff5421", fontWeight:"700"}}>Process</b></h2>
		<ul>
			<li>
				<span class="count"><img src={step1} alt="" /></span>
				<h3 style={{color:"white", fontWeight:"700"}} class="content">Click on Apply Now</h3>
			</li>
			<li>
			<span class="count"><img src={step2} alt="" /></span>
				<h3 style={{color:"white", fontWeight:"700"}} class="content">Complete the application form</h3>
			</li>
			<li>
			<span class="count"><img src={step3} alt="" /></span>
				<h3 style={{color:"white", fontWeight:"700"}} class="content">Clear the	admission test</h3>
			</li>
			<li>
			<span class="count"><img src={step4} alt="" /></span>
				<h3 style={{color:"white", fontWeight:"700"}} class="content">Pay to reserve your seat</h3>
			</li>
		</ul>
		</div>
	</div>
    
  )
}
export default Admission