import React from 'react'
import Excel  from "../image/tools/Excel.jpg"
import Tableau from "../image/tools/Tableau.png"
import Power from "../image/tools/Power-BI-Symbol.png"
import ggplot from "../image/tools/ggplot.png"
import Jupyter from "../image/tools/Jupyter.png"
import Numpy  from "../image/tools/Numpy .png"
import Pandas from "../image/tools/Pandas.png"
import Seaborn  from "../image/tools/Seaborn .jpg"
import Looker from "../image/tools/looker.png"
import Matplotlib from "../image/tools/Matplotlib-logo.png"
import PyCharm from "../image/tools/PyCharm.png"
import Google from "../image/tools/Google Colab.jpg"
import Anaconda from "../image/tools/Anaconda.jpg"
import NLTK from "../image/tools/NLTK.png"
import Scikit from "../image/tools/Scikit-learn.png"
import MySql from "../image/tools/MySql.png"
import PostgreSQL from "../image/tools/PostgreSQL.png"
import Deep from "../image/tools/Deep Learning.png"
import NLP from "../image/tools/NLP.jpg"
import ML from "../image/tools/ML.jpg"
import SQL from "../image/tools/SQL.png"
const goToBottom = ()=>{
    console.log("go to running");
    const gotoValue = (document.body.scrollHeight)-800;

    console.log("go to = ", gotoValue);
    window.scrollTo({top:gotoValue, left:0, behavior:'smooth'})
  }
const Technologies = () => {
  return (
    <div className='technologies'>
        <h2>Tools and <b>Technologies covered</b></h2>

        <ul>
            <li>
               <img src={Excel}/>
                <h3>Excel</h3>
            </li>
            <li>
            <img src={Tableau}/>
                <h3>Tableau</h3>
            </li>
            <li>
                    <img src={Power}/>
                <h3>Power-Bi</h3>
            </li>
            <li>
                    <img src={ggplot}/>
                <h3>ggplot</h3>
            </li>
            <li>
                    <img src={Jupyter}/>
                <h3>Jupyter</h3>
            </li>
            <li>
                    <img src={Numpy}/>
                <h3>Numpy </h3>
            </li>
            <li>
            <img src={Pandas}/>
                <h3>Pandas</h3>
            </li>
            <li>
            <img src={Seaborn }/>
                <h3>Seaborn </h3>
            </li>
            <li>
            <img src={Looker}/>
                <h3>Looker</h3>
            </li>
            <li>
            <img src={Matplotlib}/>
                <h3>Matplotlib</h3>
            </li>
            <li>
            <img src={PyCharm}/>
                <h3>PyCharm</h3>
            </li>
            <li>
            <img src={Google}/>
                <h3>Google Colab</h3>
            </li>
            <li>
            <img src={Anaconda}/>
                <h3>Anaconda</h3>
            </li>
            <li>
            <img src={NLTK}/>
                <h3>NLTK</h3>
            </li>
            <li>
            <img src={Scikit}/>
                <h3>Scikit-learn</h3>
            </li>
            <li>
            <img src={SQL}/>
                <h3>SQL</h3>
            </li>
            <li>
            <img src={MySql}/>
                <h3>MySql</h3>
            </li>
            <li>
            <img src={PostgreSQL}/>
                <h3>PostgreSQL</h3>
            </li>
            <li>
                <img src={ML}/>
                <h3>ML</h3>
            </li>
            <li>
            <img src={Deep}/>
                <h3>Deep Learning</h3>
            </li>
            <li>
            <img src={NLP}/>
                <h3>NLP</h3>
            </li>
            
        </ul>

        <div className='apply-btn'>
        <button id='apply-btn' onClick={goToBottom}>Apply Now</button>
        </div>
    </div>
  )
}

export default Technologies