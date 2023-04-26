import React, {useState} from 'react'




const Banner = () => {
     
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
    top:document.body.scrollHeight,
    left:0,
    behavior:'smooth'
  })
}


  return (
    
   <>
    <div className='banner'>
    <div className='form-container'>
          <div className='form-top'></div>
      <form>
        Name <input/>
        Email <input/>
        Phone No. <input/>
        Location <input/>
        <div className='submit-btn'>

        <input type='submit'/>
        </div>
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

                <span className='cohort-text'>New Batch Starts: 01 May, 2023</span>
                <span className='limited-text'>Limited no. of seats available</span>
                </p>

                {/*  */}
            </div>
            <div className='lower-box-right'>
            <img class="video-thumbnail" src="https://www.upgrad.com/bootcamps/images/bnr-thumb.png"/>
            
            </div>
        </div>
        <div className='btn-group'>
                <button id='curriculum-btn' onClick={hideBanner}><img src="https://www.upgrad.com/bootcamps/images/download.svg"/>Download Curriculum</button>
                <button onClick={gotobottom} id='curriculum-btn'>Apply Now</button>


                <div>
    </div>
                </div>
                
        </div>


    
      </>  
     
  )
}

export default Banner