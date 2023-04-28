import React from 'react'
import contact from "../image/contact.png"
import pdf from "../image/tools/uncodemy.pdf";
const Last = () => {
  return (
    <div className='last'>
        <div class="got-a-ques-summary">
        <div class="container">
            <img src={contact} alt="Support" title="Support"/>
            <div class="row">
                <div class="col-md-6 offset-md-6">
                <div className='footer-form-container form-container'>
                                <form>
                                    Name <input/>
                                    Email <input/>
                                    Phone No. <input/>
                                    Location <input/>
                                    <div className='footer-submit-btn submit-btn'>

                                    <button style={{background:"red", width:"100%", border:"none"}}><a style={{color:"white"}} href={pdf} download="uncodemy">Submit</a></button>
                                    </div>
                                </form>
                            </div>
                </div>
            </div>
        </div>
    </div>
        </div>
  )
}

export default Last