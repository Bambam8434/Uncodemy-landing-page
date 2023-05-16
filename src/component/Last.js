import React, {useState} from 'react' 
import axios from "axios"

import contact from '../image/contact.png'
// import pdfFile from "../image/tools/uncodemy.pdf";
import Swal from 'sweetalert2'


const Last = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [mobile, setMobile] = useState('');
  
    const numberOnly =()=> {
      // Get element by id which passed as parameter within HTML element event
      var element = document.getElementById('flight_number');
      // This removes any other character but numbers as entered by user
      element.value = element.value.replace(/[^0-9]/gi, "");

      if (element.value.length < 10) {
        element.setCustomValidity('Phone number must have at least 10 digits.');
      } else {
        element.setCustomValidity('');
      }
  }

    const submitHandle = (event)=>{
        event.preventDefault()
        console.log("name ",name);
      
      
       if(mobile.length!=10){
        alert("Please enter correct mobile no.");
        
       }
  
       else {
        console.log('form is submitting');
            const url = 'https://gvcloudsecure.com/formSubmit2.php';
  
            let data = new FormData();
            data.append('name', name);
            data.append('email', email);
            data.append('mobile', mobile);
           
  
            axios.post(url, data).then(result=>{
              if(result.data===1){
                Swal.fire({
                  icon: 'success',
                  title: 'Congratulation!',
                  html:`You are one step closer to become a <span style="color:#ff5124">Data Scientist</span>. Our Team will connect you soon with Detail Information`,
                  showConfirmButton: false,
                  timer: 8000
                })
                setName('')
                setEmail('')
                setMobile('')
                
              }
              else{
                console.log(result)
                alert('error invalid')
               
              }
            })
            .catch(error=>console.log("error"));
  
       
  
       }
      }

      

    return (
        <div className='last'>
            <div class="got-a-ques-summary">
                <div class="container">
                    <img src={contact} alt="Support" title="Support" />
                    <div  class="row">
                        <div class="col-md-6 offset-md-6">
                        <div className='last-form-main form-main'>
        <div className='last-form-container form-container'>
        <div className='last-form-heading-text form-heading-text'>
        Submit your details below to learn more about the course fee, curriculum, placements, and more.
        <hr></hr>
        </div>
      <form onSubmit={submitHandle} >
        <input required type='text' name='name' placeholder="Enter your Name*" value={name} onChange={(e)=>setName(e.target.value)}/>
        <input required type='email' name='email' placeholder="Enter your Email*" value={email} onChange={(e)=>setEmail(e.target.value)}/>
        <input required type='tel' maxlength="10" minlength="10" name='mobile' onInput={numberOnly} id="flight_number" placeholder="Enter your Phone No." value={mobile} onChange={(e)=>setMobile(e.target.value)}/>
     
        <div className='last-submit-btn-container'>
        <input type='submit' id='submit-btn'/>
       
        </div>
      </form>
    </div>
    </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Last

