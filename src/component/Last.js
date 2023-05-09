import React, {useState} from 'react'
import axios from "axios"
// import pdfFile from '../image/tools/u.png'
import contact from '../image/contact.png'
import pdfFile from "../image/tools/uncodemy.pdf";

const Last = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [mobile, setMobile] = useState('');
    // const [submitStatus, setSubmitStatus] = useState(true);

    // const checkAgree =()=>{
    //     console.log('status ',submitStatus);
    //   const agreeCheck = document.getElementById('terms');
    //   const submitBtn = document.getElementsByClassName('last-submit-btn-container')[0];
      
    //   submitBtn.style.opacity="1";
    //   setSubmitStatus(false);

    //     if(agreeCheck.checked){
    //       submitBtn.style.opacity="1";
    //       setSubmitStatus(false)
    //     }
    //     else{
    //         console.log('else is running');
    //       submitBtn.style.opacity="0.5";
    //       setSubmitStatus(true)
    //     }
    // }

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
                console.log('data submitted')
                window.open(pdfFile, '_blank');
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
  
            // axios({
            //   method: 'post',
            //   url: url,
            //   data: data
            // }).then(()=> window.open(pdfFile))
            // .catch(error=>alert(error));
  
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
         <input required type='number' name='mobile' placeholder="Enter your Phone No." value={mobile} onChange={(e)=>setMobile(e.target.value)}/>
     
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

