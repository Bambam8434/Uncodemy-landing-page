import React, { useState, useEffect } from 'react'
import Left from "../image/banner-left-arrow.png";
import Right from "../image/banner-right-arrow.png";
import technology from "../image/tools/news.jpg";
import Netflix from "../image/tools/Netflix.png";
import Company from "../image/tools/banck.jpg";
import twiter from "../image/tools/twitter.jpg";
import book from "../image/tools/book.jpg";
import retail from "../image/tools/retail.png";
import tools from "../image/tools/card.png";

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
            // leftArrow.style.opacity = "1"

        }

        if (imageAt === 4) {
            console.log("second if");

            leftArrow.style.cursor = "auto";
            // leftArrow.style.opacity = "0.5";
        }

        if (imageAt === 8) {
            console.log("third if");

            rightArrow.style.cursor = "auto";
            // rightArrow.style.opacity = "0.5";
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
            <h2>Get a real world understanding through <b style={{ color: "#ff5421" }}>industry projects</b></h2>


            <div className='project-left-arrow arrow-img' onClick={moveImageLeft}>
                <  img src={Left}  style={{background:"#ff5421 !importent " }}/>
            </div>

            <div className='project-right-arrow arrow-img' onClick={moveImageRight}>
                <img src={Right} />

            </div>
            <div className='project-card-container'>
                <div className='project-card'>
                    <div class="project-thumb">
                        <img class="project-img" src={technology} alt="Bookshelf" title="Bookshelf" />
                        <h5 style={{ color: "#ff5421" }} class="proj-title"> News Articles </h5>
                        <h3 class="proj-name"> Topic Modeling on News Articles </h3>
                        <p>
                            In this poject your task is to identify major themes/topics across a collection of BBC news articles.
                            You can use clustering algorithms such as LDA ,LSA etc.
                        </p>
                        <ul class="skills">
                            <li>
                                Pandas
                            </li>
                            <li>
                                Mtpltlib
                            </li>
                            <li>
                                Seaborn
                            </li>
                            <li>
                                Numpy
                            </li>

                        </ul>
                    </div>

                    <div class="project-thumb">
                        <img class="project-img" src={Netflix} alt="Bookshelf" title="Bookshelf" />
                        <h5 style={{ color: "#ff5421" }} class="proj-title"> Netflix Movies </h5>
                        <h3 class="proj-name"> Netflix Movies and TV Shows Clustering </h3>
                        <p>
                            The dataset consists of TV shows and movies available on Netflix as of 2019.
                            The dataset is collection from Flixable which is a third party netflix search engine.
                        </p>
                        <ul class="skills">
                            <li>
                                Pandas
                            </li>
                            <li>
                                Mtpltlib
                            </li>
                            <li>
                                Seaborn
                            </li>
                            <li>
                                Numpy
                            </li>
                            <li>
                                Machine learning algorithm
                            </li>

                        </ul>
                    </div>

                    <div class="project-thumb">
                        <img class="project-img" src={Company} alt="Bookshelf" title="Bookshelf" />
                        <h5 style={{ color: "#ff5421" }} class="proj-title"> Company Bankruptcy </h5>
                        <h3 class="proj-name"> Company Bankruptcy Prediction </h3>
                        <p>
                            Prediction of bankruptcy is a phenomenon of increasing interest of firms who stand to lose money because of unpaid
                            debts.
                        </p>
                        <ul class="skills">
                            <li>
                                Pandas
                            </li>
                            <li>
                                Mtpltlib
                            </li>
                            <li>
                                Seaborn
                            </li>
                            <li>
                                Numpy
                            </li>
                            <li>
                                Machine learning algorithm
                            </li>

                        </ul>
                    </div>

                    <div class="project-thumb">
                        <img class="project-img" src={twiter} alt="Bookshelf" title="Bookshelf" />
                        <h5 style={{ color: "#ff5421" }} class="proj-title"> Coronavirus Tweet  </h5>
                        <h3 class="proj-name"> Coronavirus Tweet Sentiment Analysis </h3>
                        <p>
                            This challenge asks you to build a classification model to predict the sentiment of COVID-19 tweets.
                        </p>
                        <ul class="skills">
                            <li>
                                Pandas
                            </li>
                            <li>
                                Mtpltlib
                            </li>
                            <li>
                                Seaborn
                            </li>
                            <li>
                                Numpy
                            </li>
                            <li>
                                Machine learning algorithm
                            </li>

                        </ul>
                    </div>

                    <div class="project-thumb">
                        <img class="project-img" src={book} alt="Bookshelf" title="Bookshelf" />
                        <h5 style={{ color: "#ff5421" }} class="proj-title"> Learning objectives </h5>
                        <h3 class="proj-name"> Book Recommendation </h3>
                        <p>
                            In this project we use three different datasets to come up with a book recommendation system for different users based on how they and others have rated previously purchased books.
                        </p>
                        <ul class="skills">
                            <li>
                                Recommendation Systems
                            </li>
                            <li>
                                Data Science
                            </li>
                            <li>
                                Machine Learning
                            </li>
                            <li>
                                Collaborative Filtering
                            </li>


                        </ul>
                    </div>

                    <div class="project-thumb">
                        <img class="project-img" src={retail} alt="Bookshelf" title="Bookshelf" />
                        <h5 style={{ color: "#ff5421" }} class="proj-title"> Retail Sales  </h5>
                        <h3 class="proj-name"> Retail Sales Prediction. </h3>
                        <p>
                            Rossmann operates over 3,000 drug stores in 7 European countries. Currently, Rossmann store managers are tasked with predicting their daily sales for up to six weeks in advance
                        </p>
                        <ul class="skills">
                            <li>
                                Logistic Regression
                            </li>
                            <li>
                                Random Forrest Classifier
                            </li>
                            <li>
                                XGBoost
                            </li>
                            <li>
                                Support Vector Classifier
                            </li>
                            <li>
                                SMOTE
                            </li>
                            <li>
                                Class Imbalance
                            </li>
                            <li>
                                Deep Learning
                            </li>
                            <li>
                                Computer Vision
                            </li>



                        </ul>
                    </div>

                    <div class="project-thumb">
                        <img class="project-img" src={tools} alt="Bookshelf" title="Bookshelf" />
                        <h5 style={{ color: "#ff5421" }} class="proj-title"> Credit Card </h5>
                        <h3 class="proj-name"> Credit Card Default Prediction. </h3>
                        <p>
                            Built a Classification model using Machine learing to predict whether a customer will default on his/her credit card.
                        </p>
                        <ul>
                            <li>
                                Logistic Regression
                            </li>
                            <li>
                                Random Forrest Classifier
                            </li>
                            <li>
                                XGBoost
                            </li>
                            <li>
                                Support Vector Classifier
                            </li>
                            <li>
                                SMOTE
                            </li>
                            <li>
                                Class Imbalance
                            </li>
                            <li>
                                Deep Learning
                            </li>
                            <li>
                                Computer Vision
                            </li>
                            <li>
                                Image Preprocessing
                            </li>
                            <li>
                                Transfer Learning
                            </li>
                            <li>
                                Model Deployment
                            </li>
                        </ul>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Project