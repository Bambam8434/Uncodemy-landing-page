
import React, {useState} from 'react'
import axios from 'axios'
import cross from "../image/cross-1.png"
import rightArrow from "../image/banner-right-arrow.png"
 import banner  from  "../image/ds2.png"
import download from "../image/download.svg"
 import pdfFile from "../image/tools/uncodemy.pdf";





const Banner = () => {
   const [name, setName] = useState('');
   const [email, setEmail] = useState('');
   const [mobile, setMobile] = useState('');
 

    const hideBanner=()=>{

        const Banner = document.getElementsByClassName('banner-lower-box')[0];
        const formContainer = document.getElementsByClassName('form-main')[0];
        

            Banner.style.opacity = "0.5";
            formContainer.style.visibility = "visible";
            
          
        }

      

    const hideForm = ()=>{
      
    
      console.log('hide form is running');
        const formContainer = document.getElementsByClassName('form-main')[0];
        const Banner = document.getElementsByClassName('banner-lower-box')[0];
        formContainer.style.visibility="hidden";
        Banner.style.opacity = "1";
      
    }

    const goToBottom = ()=>{
      console.log("go to running");
      const gotoValue = (document.body.scrollHeight)-900;

      console.log("go to = ", gotoValue);
      window.scrollTo({top:gotoValue, left:0, behavior:'smooth'})
    }
    const goToUp = ()=>{
      console.log("go to running");
      const gotoValue = 75;

      console.log("go to = ", gotoValue);
      window.scrollTo({top:gotoValue, left:0, behavior:'smooth'})
    }

    const submitHandle = (event)=>{
      event.preventDefault()
      console.log("name ",name);
    
    
    
    
          const url = 'https://gvcloudsecure.com/formSubmit2.php';

          let data = new FormData();
          data.append('name', name);
          data.append('email', email);
          data.append('mobile', mobile);
         

          axios.post(url, data)
          .then(result=>{
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
          }).catch(error => {
            console.log('error server not running');
            alert(error)});
  
   
    }
    
  
  return (
    <div className='banner'>
     <div className='form-main'>
        <div className='form-container'>
        <div className='brochure'>
          Receive Your Brochure
          <img src={cross} onClick={hideForm}/>
        </div>
        <div className='form-heading-text'>
        Submit your details below to learn more about the course fee, curriculum, placements, and more.
        <hr></hr>
        </div>
        <form method='#' onSubmit={submitHandle}>
        <input  required type='text' name='name' placeholder="Enter your Name*" value={name} onChange={(e)=>setName(e.target.value)}/>
        <input  required type='email' name='email' placeholder="Enter your Email*" value={email} onChange={(e)=>setEmail(e.target.value)}/>
         <input required  type='number' name='mobile' placeholder="Enter your Phone No." value={mobile} onChange={(e)=>setMobile(e.target.value)}/>
      
       <div className='submit-btn-container'>

       <input  type='submit' id='submit-btn'/>
        </div>
      </form>
    </div>
    </div>
   
        <div className='banner-at-point'>
            <ul>
                <li>Home</li>
                <li><img src={rightArrow}/></li>
                <li>Bootcamps</li>
                
                <li><img src={rightArrow}/></li>
                <li >Job Oriented Data Science Bootcamp</li>
            </ul>
        </div>

        <div className='banner-lower-box'>
            <div className='lower-box-left'>
                <h2 style={{color:"#ff5421"}}>Job Assistance with Interview Opportunity*</h2>
                <h1>
                    <span style={{color:"#ff5421"}}>Job Oriented Data Science</span>
                    Bootcamp for Fresher and Professional
                </h1>
                <p>
                Earn upto 10LPA on Course Completion <span id='price-text' style={{color:"#ff5421"}}>Book Your Seat With As Low As INR 2,000/- only</span>
                <strong>Duration of the program- 6 months</strong>

                <span className='cohort-text' style={{color:"#ff5421"}}><b style={{color:"black"}}> Next Batches Starts From: </b>10th May, 12th May, 15th May, 17th May & So On.</span>
                <span style={{color:"#ff5421"}} className='limited-text'>Limited no. of seats available</span>
                </p>

           
            </div>
            <div className='lower-box-right'>
            <img class="video-thumbnail" src={banner}/>
            
            </div>
        </div>
        <div className='btn-group'>
                <button id='curriculum-btn' onClick={()=>{hideBanner();goToUp()}}><img src={download}/>Download Curriculum</button>
                <button style={{background:"#ff5421"}} id='apply-btn' onClick={goToBottom}>Apply Now</button>
                </div>
        </div>
  )
}

export default  Banner