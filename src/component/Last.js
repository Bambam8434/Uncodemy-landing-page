import React, {useState} from 'react'
import axios from "axios"
import pdfFile from '../image/tools/u.png'
import contact from '../image/contact.png'


const Last = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [Phone, setPhone] = useState('');
    const [location, setLocation] = useState('');

    const submitHandle = ()=>{
        console.log("name ",name);
      
       if(name.length<3){
      
        alert("Name should be at least four character");
        
       }
       if(Phone.length!==10){
        alert("Please enter correct Phone no.");
        
       }
       if(email.length===0){
        alert("Email must be filled");
     
       }
       if(location.length===0){
        alert("Location must be filled");
      
       }
  
       else{
            const url = 'http://localhost/uncodemy/formSubmit.php';
  
            let data = new FormData();
            data.append('name', name);
            data.append('email', email);
            data.append('Phone', Phone);
            data.append('location', location);
  
            axios.post(url, data).then(window.open(pdfFile, '_blank'))
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
        <div  className='last'>
            <div  class="got-a-ques-summary">
                <div class="container ">
                    <img src={contact} alt="Support" title="Support" />
                    <div class="row">
                        <div class="col-md-6 offset-md-6">
                        <div className='last-form-main form-main'>
        <div className='last-form-container form-container'>
        <div className='last-form-heading-text form-heading-text'>
        Submit your details below to learn more about the course fee, curriculum, placements, and more.
        <hr></hr>
        </div>
      <form>
        <input type='text' name='name' placeholder="Enter your Name*" value={name} onChange={(e)=>setName(e.target.value)}/>
        <input type='email' name='email' placeholder="Enter your Email*" value={email} onChange={(e)=>setEmail(e.target.value)}/>
         <input type='number' name='Phone' placeholder="Enter your Phone No." value={Phone} onChange={(e)=>setPhone(e.target.value)}/>
       <input type='text' name='location'placeholder="Enter your Location"  value={location} onChange={(e)=>setLocation(e.target.value)}/>
       <select placeholder='select the training mode'>
        <option disabled selected>Select the Training Mode</option>
        <option>Online</option>
        <option>Class room</option>
       </select>

       <div className='agree-box'><input type="checkbox" name="terms" id="terms" required onchange="activateButton(this) " style={{cursor:"pointer"}}/>  I Agree Terms & Coditions
       </div>
        <div className='submit-btn'>

        <input style={{cursor:"pointer"}} type='submit'  onClick={submitHandle}/>
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


















// import React from 'react'
// import contact from "../image/contact.png"
// import pdf from "../image/tools/uncodemy.pdf";
// const Last = () => {
//   return (
//     <div className='last'>
//         <div class="got-a-ques-summary">
//         <div class="container">
//             <img src={contact} alt="Support" title="Support"/>
//             <div class="row">
//                 <div class="col-md-6 offset-md-6">
//                 <div className='footer-form-container form-container'>
//                                 <form>
//                                     Name <input/>
//                                     Email <input/>
//                                     Phone No. <input/>
//                                     Location <input/>
//                                     <div className='footer-submit-btn submit-btn'>

//                                     <button style={{background:"red", width:"100%", border:"none"}}><a style={{color:"white"}} href={pdf} download="uncodemy">Submit</a></button>
//                                     </div>
//                                 </form>
//                             </div>
//                 </div>
//             </div>
//         </div>
//     </div>
//         </div>
//   )
// }

// export default Last