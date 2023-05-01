import React, { useState, useEffect } from 'react'
import Left from "../image/left.png";
import Right from "../image/right.png";
import technology from "../image/tools/news.jpg";
import  Netflix from "../image/tools/Netflix.png";
import  Company from "../image/tools/banck.jpg";
import twiter  from  "../image/tools/twitter.jpg";
import book  from  "../image/tools/book.jpg";
import retail  from  "../image/tools/retail.png";
import tools  from  "../image/tools/card.png";

const Project = () => {

    const [moveProjectImage, setmoveProjectImage] = useState(0);
    const [imageAt, setImageAt] = useState(4);

    useEffect(() => {

        const rightArrow = document.getElementsByClassName('project-right-arrow')[0]
        const leftArrow = document.getElementsByClassName('project-left-arrow')[0]

        if (imageAt > 4 && imageAt < 8) {
            console.log("first if");
            rightArrow.style.cursor = "pointer";
            leftArrow.style.cursor = "pointer";

            rightArrow.style.opacity = "1"
            leftArrow.style.opacity = "1"

        }

        if (imageAt === 4) {
            console.log("second if");

            leftArrow.style.cursor = "auto";
            leftArrow.style.opacity = "0.5";
        }

        if (imageAt === 8) {
            console.log("third if");

            rightArrow.style.cursor = "auto";
            rightArrow.style.opacity = "0.5";
        }

    }, [imageAt])

    const moveImageRight = () => {
        console.log("right running");
        const projectCard = document.getElementsByClassName('project-card')[0];

        if (imageAt < 8) {
            const nextMove = moveProjectImage - 30;
            projectCard.style.transform = "translate(" + nextMove + "vw)";
            setmoveProjectImage(nextMove);

            const addImage = imageAt + 1;
            setImageAt(addImage);
        }

    }

    const moveImageLeft = () => {
        console.log("left running");
        const projectCard = document.getElementsByClassName('project-card')[0];

        if (imageAt > 4) {
            const nextMove = moveProjectImage + 30;
            projectCard.style.transform = "translate(" + nextMove + "vw)";

            setmoveProjectImage(nextMove);
            const addImage = imageAt - 1;
            setImageAt(addImage);
        }

    }
    return (
        <div className='project'>
            <h2>Get a real world understanding through <b style={{color:"#ff5421"}}>industry projects</b></h2>

            
                <div className='project-left-arrow arrow-img' onClick={moveImageLeft}>
                    <img src={Left} />
                </div>

                <div className='project-right-arrow arrow-img' onClick={moveImageRight}>
                    <img src={Right} />
              
            </div>
            <div className='project-card-container'>
                <div className='project-card'>
                    <div class="project-thumb">
                        <img class="project-img" src={technology} alt="Bookshelf" title="Bookshelf" />
                        <h5 style={{color:"#ff5421"}} class="proj-title"> News </h5>
                        <h3 class="proj-name"> Topic Modeling on News Articles </h3>
                        <p>
                            A social networking application, like Facebook, that allows users to create a curated virtual bookshelf with reviews
                        </p>
                       
                    </div>

                    <div class="project-thumb">
                        <img class="project-img" src={Netflix} alt="Bookshelf" title="Bookshelf" />
                        <h5 style={{color:"#ff5421"}} class="proj-title"> Netflix </h5>
                        <h3 class="proj-name"> Netflix Movies and TV Shows Clustering </h3>
                        <p>
                            A video streaming web app like Netflix, Prime Video or Apple TV+
                        </p>
                       
                    </div>

                    <div class="project-thumb">
                        <img class="project-img" src={Company} alt="Bookshelf" title="Bookshelf" />
                        <h5 style={{color:"#ff5421"}} class="proj-title"> Company </h5>
                        <h3 class="proj-name"> Company Bankruptcy Prediction </h3>
                        <p>
                            An Amazon clone that allows users to create accounts, wish lists, browse and purchase products
                        </p>
                       
                    </div>

                    <div class="project-thumb">
                        <img class="project-img" src={twiter} alt="Bookshelf" title="Bookshelf" />
                        <h5 style={{color:"#ff5421"}} class="proj-title"> Coronavirus  </h5>
                        <h3 class="proj-name"> Coronavirus Tweet Sentiment Analysis </h3>
                        <p>
                            An Amazon clone that allows users to create accounts, wish lists, browse and purchase products
                        </p>
                       
                    </div>

                    <div class="project-thumb">
                        <img class="project-img" src={ book} alt="Bookshelf" title="Bookshelf" />
                        <h5 style={{color:"#ff5421"}} class="proj-title"> Learning objectives </h5>
                        <h3 class="proj-name"> Book Recommendation </h3>
                        <p>
                            An Amazon clone that allows users to create accounts, wish lists, browse and purchase products
                        </p>
                       
                    </div>

                    <div class="project-thumb">
                        <img class="project-img" src={retail} alt="Bookshelf" title="Bookshelf" />
                        <h5 style={{color:"#ff5421"}} class="proj-title"> Retails  </h5>
                        <h3 class="proj-name"> Retail Sales Prediction. </h3>
                        <p>
                            An Amazon clone that allows users to create accounts, wish lists, browse and purchase products
                        </p>
                       
                    </div>

                    <div class="project-thumb">
                        <img class="project-img" src={tools} alt="Bookshelf" title="Bookshelf" />
                        <h5 style={{color:"#ff5421"}} class="proj-title"> Credit Card </h5>
                        <h3 class="proj-name"> Credit Card Default Prediction. </h3>
                        <p>
                            An Amazon clone that allows users to create accounts, wish lists, browse and purchase products
                        </p>
                       
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Project