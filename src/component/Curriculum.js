import React, { useState } from 'react'

const Curriculum = () => {
    const [prevPoint, setPrevPoint] = useState(0);

    const MoveProgress = (point) => {
        const progressBar = document.getElementsByClassName("progress-bar")[0];
        const currentmodule = document.getElementsByClassName('module')[point];
        const previousmodule = document.getElementsByClassName('module')[prevPoint];
        console.log("point = ", prevPoint);

        previousmodule.style.display = "none";
        currentmodule.style.display = "block";

        setPrevPoint(point);

        if (point === 0) {
            progressBar.style.width = "10%"
        }
        if (point === 1) {
            progressBar.style.width = "25%"
        }
        if (point === 2) {
            progressBar.style.width = "38%"
        }
        if (point === 3) {
            progressBar.style.width = "53%"
        }
        if (point === 4) {
            progressBar.style.width = "67%"
        }
        if (point === 5) {
            progressBar.style.width = "81.5%"
        }
        if (point === 6) {
            progressBar.style.width = "100%"
        }

    }
    const showform = () => {
        const formContainer = document.getElementsByClassName('form-container')[0];
        formContainer.style.visibility = "visible";
        window.scrollTo({
            top: 60,
            left: 0,
            behavior: 'smooth'

        })
    }


    return (
        <div className='curriculum'>
            <h2>Learn with a world class <b style={{ color: "#ff5421" }}>curriculum</b></h2>

            <div className='curriculum-list'>
                <ul>
                    <li onClick={() => MoveProgress(0)}>Introduction to Data Science</li>
                    <li onClick={() => MoveProgress(1)}>Mastering Python</li>
                    <li onClick={() => MoveProgress(2)}>Probability and Statistics</li>
                    <li onClick={() => MoveProgress(3)}>Advanced Statistics</li>
                    <li onClick={() => MoveProgress(4)}>Predictive Modelling</li>
                    <li onClick={() => MoveProgress(5)}>Time Series Forecasting</li>
                    <li onClick={() => MoveProgress(6)}>Live Projects</li>
                </ul>
            </div>

            <div className='progress'>
                <div className='progress-bar'>

                </div>

            </div>
            <div className='modules'>
                <div className='modules-child'>
                    <div className='module-container module' id='module1'>
                        <span class="module-badge"> Module-1 </span>
                        <div class="curi-title">
                            <h3> Introduction to Data Science </h3>

                        </div>
                        <p>
                            Learning objectives
                            Understand the basics of Data Science and gauge the current landscape and opportunities. Get acquainted with various analysis and visualization tools used in data science.
                        </p>

                        <div class="topics-covered">
                            <h4><span>Topics</span></h4>
                            <ul>
                                <li>
                                    What is Data Science?
                                </li>
                                <li>
                                    Data Analytics Landscape
                                </li>
                                <li>
                                    Life Cycle of a Data Science Project
                                </li>
                                <li>
                                    Data Science Tools and Technologies
                                </li>
                            </ul>
                        </div>
                    </div>



                    <div className='module-container module' id='module2'>
                        <span class="module-badge"> Module-2 </span>
                        <div class="curi-title">
                            <h3> Mastering Python </h3>

                        </div>
                        <p>
                            Learning objectives

                            To Install Python Distribution
                            To write user-defined functions in Python
                            About Lambda function and the object-oriented way of writing classes and objects
                            How to import datasets into Python
                            How to write output into files from Python, manipulate and analyze data using Pandas library
                            Use Python libraries like Matplotlib, Seaborn, and ggplot for data visualization
                        </p>

                        <div class="topics-covered">
                            <h4><span>Topics </span></h4>
                            <ul>
                                <li>
                                    Python Basics
                                </li>
                                <li>
                                    Data Structures in Python
                                </li>
                                <li>
                                    Control and Loop Statements in Python
                                </li>
                                <li>
                                    Functions and Classes in Python
                                </li>
                                <li>
                                    Working with Data
                                </li>
                                <li>
                                    Data Analysis using Pandas
                                </li>
                                <li>
                                    Data Visualisation
                                </li>
                                <li>
                                    Case Study
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className='module-container module' id='module2'>
                        <span class="module-badge"> Module-3 </span>
                        <div class="curi-title">
                            <h3> Probability and Statistics </h3>

                        </div>
                        <p>
                            Learning objectives

                            Basics of data-driven values - mean, median, and mode
                            Distribution of data in terms of variance, standard deviation, interquartile range
                            Basic summaries of data and measures and simple graphical analysis
                            Basics of probability with real-time examples
                            Marginal probability, and its crucial role in data science
                            Bayes’ theorem and how to use it to calculate conditional probability via Hypothesis Testing
                            Alternate and Null hypothesis - Type1 error, Type2 error, Statistical Power, and p-value
                        </p>

                        <div class="topics-covered">
                            <h4><span>Topics</span></h4>
                            <ul>
                                <li>
                                    Measures of Central Tendency
                                </li>
                                <li>
                                    Measures of Dispersion
                                </li>
                                <li>
                                    Descriptive Statistics
                                </li>
                                <li>
                                    Probability Basics
                                </li>
                                <li>
                                    Marginal Probability
                                </li>
                                <li>
                                    Bayes Theorem
                                </li>
                                <li>
                                    Probability Distributions
                                </li>
                                <li>
                                    Hypothesis Testing
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className='module-container module' id='module2'>
                        <span class="module-badge"> Module-4 </span>
                        <div class="curi-title">
                            <h3> Advanced Statistics and Predictive Modelling I </h3>

                        </div>
                        <p>
                            Learning objectives

                            Analysis of Variance (ANOVA) and its practicality
                            Linear Regression with Ordinary Least Square Estimate to predict a continuous variable
                            Model building, evaluating model parameters, and measuring performance metrics on the Test and Validation set
                            How to enhance model performance by means of various steps via processes
                            Dimensionality Reduction Technique with Principal Component Analysis and Factor Analysis
                            Various techniques to find the optimum number of components or factors using screen plot and one-eigenvalue criterion, in addition to a real-Life case study with PCA and FA.
                        </p>

                        <div class="topics-covered">
                            <h4><span>Topics</span></h4>
                            <ul>
                                <li>
                                    Analysis of Variance (ANOVA)
                                </li>
                                <li>
                                    Linear Regression (OLS)
                                </li>
                                <li>
                                    Case Study: Linear Regression
                                </li>
                                <li>
                                    Principal Component Analysis
                                </li>
                                <li>
                                    Factor Analysis
                                </li>
                                <li>
                                    Case Study: PCA/FA
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className='module-container module' id='module2'>
                        <span class="module-badge"> Module-5 </span>
                        <div class="curi-title">
                            <h3> Advanced Statistics and Predictive Modelling II
                            </h3>

                        </div>
                        <p>
                            Learning objectives

                            Binomial Logistic Regression for Binomial Classification Problems
                            Evaluation of model parameters
                            Model performance using various metrics
                            Binomial Logistic Regression with a real-life case Study
                            KNN Algorithm for Classification Problem and techniques
                            Decision Trees - for both regression and classification problem
                            Entropy, Information Gain, Standard Deviation reduction, Gini Index, and CHAID
                            Using Decision Tree with real-life Case Study
                        </p>

                        <div class="topics-covered">
                            <h4><span>Topics</span></h4>
                            <ul>
                                <li>
                                    Logistic Regression
                                </li>
                                <li>
                                    Case Study: Logistic Regression
                                </li>
                                <li>
                                    K-Nearest Neighbour Algorithm
                                </li>
                                <li>
                                    Case Study: K-Nearest Neighbour Algorithm
                                </li>
                                <li>
                                    Decision Tree
                                </li>
                                <li>
                                    Case Study: Decision Tree
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className='module-container module' id='module2'>
                        <span class="module-badge"> Module-6 </span>
                        <div class="curi-title">
                            <h3> Time Series Forecasting </h3>

                        </div>
                        <p>
                            Learning objectives

                            Understand Time Series Data and its components - Level Data, Trend Data, and Seasonal Data
                            Work on a real-life Case Study with ARIMA.
                        </p>

                        <div class="topics-covered">
                            <h4><span>Topics </span></h4>
                            <ul>
                                <li>
                                    Understand Time Series Data
                                </li>
                                <li>
                                    Visualizing Time Series Components

                                </li>
                                <li>
                                    Exponential Smoothing
                                </li>
                                <li>
                                    Holt's Model
                                </li>
                                <li>
                                    Holt-Winter's Model
                                </li>
                                <li>
                                    ARIMA
                                </li>
                                <li>
                                    Case Study: Time Series Modelling on Stock Price
                                </li>
                            </ul>
                        </div>
                    </div>


                    <div className='module-container module' id='module2'>
                        <span class="module-badge"> Module-7 </span>
                        <div class="curi-title">
                            <h3>Live Project </h3>

                        </div>
                        <p>
                            Learning objectives

                            This industry-relevant capstone project under the experienced guidance of an industry expert is the cornerstone of this Data Science with Python course. In this immersive learning mentor-guided live group project, you will go about executing the data science project as you would any business problem in the real world.
                        </p>

                        <div class="topics-covered">
                            <h4><span> Hands-on </span></h4>
                            <ul>
                                <li>
                                    Project to be selected by candidates.
                                </li>

                            </ul>
                        </div>
                    </div>
                </div>


            </div>

            <div className='curi-btn'>
                <button onClick={showform} id='curriculum-btn'><img src="https://www.upgrad.com/bootcamps/images/download.svg" />Download Curriculum</button>
            </div>
        </div>
    )
}

export default Curriculum