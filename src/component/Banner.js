import React, {useState} from 'react'
import banner  from  "../image/banner1.jpg";
import pdfFile from "../image/tools/uncodemy.pdf";
import axios from 'axios';



const Banner = () => {
    const[name, setName] =useState('')
    const[email, setEmail] =useState('')
    const[phone, setphone] =useState('')
    const[location, setLocation] =useState('')
    const [status, setStatus] = useState(0);

    const hideBanner=()=>{

        const Banner = document.getElementsByClassName('banner-lower-box')[0];
        const formContainer = document.getElementsByClassName('form-container')[0];
        if(status===0){

            Banner.style.opacity = "0.5";
            formContainer.style.visibility = "visible";
            setStatus(1);
        }

        else{
            Banner.style.opacity = "1";
            formContainer.style.visibility = "hidden";
            setStatus(0);
        }
    }

    const hideForm = ()=>{
      if(status===1)
      {
        const formContainer = document.getElementsByClassName('form-container')[0];
        const Banner = document.getElementsByClassName('banner-lower-box')[0];
        formContainer.style.visibility="hidden";
        Banner.style.opacity = "1";
        setStatus(0);
      }
    }
const gotobottom=  ()=>{
  window.scrollTo({
    top:document.body.scrollHeight-800,
    left:0,
    behavior:'smooth'
  })
}


const submitHandle = ()=>{
  if(name.length<3){
   alert("Name should be at least four character");
  }
  if(phone.length!=10){
   alert("Please enter correct phone no.");
  }
  if(email.length===0){
   alert("Email must be filled");
  }
  if(location.length===0){
   alert("Location must be filled");
  }

  else{
       const url = 'http://localhost/uncodemy/form-submit.php';

       let data = new FormData();
       data.append('name', name);
       data.append('email', email);
       data.append('phone', phone);
       data.append('location', location);
       axios.post(url,data).then (window.open(pdfFile, '__blank'))
       .catch(error=>alert(error));
  }
 }


  return (
    
   <>

    <div className='banner'>
    <div className='form-container'>
          <div className='form-top'></div>
      <form >
      Name <input type='text' name='name' value={name} onChange={(e)=>setName(e.target.value)}/>
        Email <input type='email' name='email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
        Phone No. <input type='number' name='phone' value={phone} onChange={(e)=>setphone(e.target.value)}/>
        Location <input type='text' name='location' value={location} onChange={(e)=>setLocation(e.target.value)}/>



        {/* Name* <input type="text" id="username" name="username" required/>
        Email* <input type="email" id="username" name="username" required/>
        Phone No* <input type="text" id="username" name="username" required/>
        Location<input type="text" id="username" name="username" required/> */}
        
        {/* <input type='submit' onClick={submitHandle }/> */}
 <button style={{background:"red", width:"100%", border:"none",cursor:"pointer"}}><a  style={{color:"white"}} onClick={submitHandle}>Submit</a></button>
        
      </form>
    </div>
        <div className='banner-at-point'>
            <ul>
                <li>Home</li>
                <li>Bootcamps</li>
                <li>Job Oriented Data Science Bootcamp for Freshers and Professional</li>
            </ul>
        </div>

        <div className='banner-lower-box' onClick={hideForm}>
            <div className='lower-box-left'>
                <h2>Job Assistance with Interview Opportunity*</h2>
                <h1>
                    <span>Job Oriented Data Science</span>
                    Bootcamp for Freshers and Professional
                </h1>
                <p>
                Earn upto 12LPA on Course Completion - Book Your Seat With As Low As <span id='price-text'>INR 2,000/- only</span>
                <strong>Duration of the program- 6 months</strong>

                <span className='cohort-text'>New Batches Starts From: 01 May, 05 May, 07 May 2023</span>
                <span className='limited-text'>Limited no. of seats available</span>
                </p>

                {/*  */}
            </div>
            <div className='lower-box-right'>
            <img style={{width:"100%"}} class="video-thumbnail" src={banner}/>
            
            </div>
        </div>
        <div className='btn-group'>
               <button type='submit' id='curriculum-btn' onClick={hideBanner}><img src="https://www.upgrad.com/bootcamps/images/download.svg"/>Download Curriculum</button>
                <button onClick={gotobottom} id='curriculum-btn'>Apply Now</button>


                <div>
    </div>
                </div>
                
        </div>


    
      </>  
     
  )
}

export default Banner