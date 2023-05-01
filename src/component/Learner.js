import React, { useState, useEffect } from 'react'
import Left from "../image/left.png";
import Right from "../image/right.png";
import star from '../image/star.png'
import r1 from '../image/r1.jpeg'
import r2 from '../image/r2.jpeg'
import r3 from '../image/r3.jpeg'
import r4 from '../image/r4.jpeg'
import r5 from '../image/r5.jpeg'
import r6 from '../image/r6.jpeg'
import r7 from '../image/r7.jpeg'
import r8 from '../image/r8.jpeg'
import r9 from '../image/r9.jpeg'
import r10 from '../image/r10.jpeg'

const Learner = () => {

    const [imageAt, setImageAt] = useState(2);
    const [imageMove, setImageMove] = useState(0);

    useEffect(() => {

        const leftArrow = document.getElementsByClassName('review-left-arrow')[0];
        const RightArrow = document.getElementsByClassName('review-right-arrow')[0];

        if (imageAt > 2 && imageAt < 10) {
            leftArrow.style.cursor = "pointer";
            RightArrow.style.cursor = "pointer";

            leftArrow.style.opacity = "1";
            RightArrow.style.opacity = "1";
        }

        if (imageAt === 2) {
            leftArrow.style.cursor = "auto";
            leftArrow.style.opacity = "0.5";
        }

        if (imageAt === 10) {
            RightArrow.style.cursor = "auto";
            RightArrow.style.opacity = "0.5";
        }

    }, [imageAt])

    const moveImageLeft = () => {
        console.log("learner left");

        const reviews = document.getElementsByClassName('reviews')[0];

        if (imageAt > 2) {
            const nextmove = imageMove + 38;
            reviews.style.transform = "translate(" + nextmove + "vw)";
            setImageMove(nextmove);

            const currentimage = imageAt - 1;
            setImageAt(currentimage);
        }
    }

    const moveImageRight = () => {
        console.log("learner right");
        const reviews = document.getElementsByClassName('reviews')[0];

        if (imageAt < 10) {
            const nextmove = imageMove - 38;
            reviews.style.transform = "translate(" + nextmove + "vw)";
            setImageMove(nextmove);

            const currentimage = imageAt + 1;
            setImageAt(currentimage);
        }
    }
    return (
        <div className='learner'>
            <h2 class="section-heading text-center"> See what <b style={{color:"#ff5421"}}>Our learners say</b></h2>
            <div className='review-left-arrow arrow-img' onClick={moveImageLeft}>
                <img src={Left} />
            </div>
            <div className='reviews-container'>
                <div className='reviews'>
                    <div class="review-thumb">
                        <div class="media">
                            <div class="review-img">
                                <img src={r1} alt="Mohamed Mufasil Mufeeth" title="Mohamed Mufasil Mufeeth" />
                            </div>
                            <div class="media-body align-self-center">
                                <div class="review-title">
                                    <h3> Swapnil Mhatre </h3>
                                </div>
                                <div className="star-img-group">
                                    <img src={star} />
                                    <img src={star} />
                                    <img src={star} />
                                    <img src={star} />
                                    <img src={star} />
                                </div>

                                <hr></hr>
                                <p>
                                    I had enrolled for the Advanced Data Science Program at Uncodemy in October and I recently completed the Python module and I have to say, it has been an amazing experience so far. The instructor is extremely knowledgeable and always willing to help when I have questions. The course material is well-organized and easy to follow. I feel like I am learning a lot and improving my skills every day. Overall, I highly recommend this data science course to anyone looking to learn Python. It has been a great investment in my education and I am excited to see what I can accomplish with my new skills.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div class="review-thumb">
                        <div class="media">
                            <div class="review-img">
                                <img src={r2} alt="Mohamed Mufasil Mufeeth" title="Mohamed Mufasil Mufeeth" />
                            </div>
                            <div class="media-body align-self-center">
                                <div class="review-title">
                                    <h3> Ramesh Chaudhary </h3>
                                </div>
                                <div className="star-img-group">
                                    <img src={star} />
                                    <img src={star} />
                                    <img src={star} />
                                    <img src={star} />
                                    <img src={star} />
                                </div>

                                <hr></hr>
                                <p>
                                    I had a great experience with the Data Science course at Uncodemy. The instructors were very knowledgeable and the course content was well-structured and easy to follow. The projects were challenging but also fun, and they really helped me develop my skills in data analysis and machine learning. The community of students was also very supportive and made the learning experience even more enjoyable. Overall, I would definitely recommend this course to anyone who wants to learn about data science.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div class="review-thumb">
                        <div class="media">
                            <div class="review-img">
                                <img src={r3} alt="Mohamed Mufasil Mufeeth" title="Mohamed Mufasil Mufeeth" />
                            </div>
                            <div class="media-body align-self-center">
                                <div class="review-title">
                                    <h3> queen tanisha </h3>
                                </div>
                                <div className="star-img-group">
                                    <img src={star} />
                                    <img src={star} />
                                    <img src={star} />
                                    <img src={star} />
                                    <img src={star} />
                                </div>

                                <hr></hr>
                                <p>
                                    I m happy to choose the Data science course at Uncodemy. It was a great learning experience.
                                    In depth course content, faculty knowledge, and most importantly attention to each n every attendee are the main pros I felt. Also, we can repeat the classes at any time without any changes. After completing my specialization in Data Science and Machine Learning they provided me placement opportunities and through them, I got a job in Orient Technologies as a Business Intelligence Specialist. I would like to thank Upendra sir and the team Uncodemy for this. Wonderful Faculty, Good Syllabus, and great Placement support. Thanks, Uncodemy and specially to our trainer, for all your efforts.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div class="review-thumb">
                        <div class="media">
                            <div class="review-img">
                                <img src={r4} alt="Mohamed Mufasil Mufeeth" title="Mohamed Mufasil Mufeeth" />
                            </div>
                            <div class="media-body align-self-center">
                                <div class="review-title">
                                    <h3> Manish Kumar </h3>
                                </div>
                                <div className="star-img-group">
                                    <img src={star} />
                                    <img src={star} />
                                    <img src={star} />
                                    <img src={star} />
                                    <img src={star} />
                                </div>

                                <hr></hr>
                                <p>
                                    Uncodemy is the Best Place for Learning Data Science course in noida.... Teaching staff is very nice and supportive and also gives placement calls. The placement team is best and I like the way they handle each and every student. Placement team provides all required things for preparation like grooming sessions, many mock interviews. All staff trainers are friendly and ready to help any time.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div class="review-thumb">
                        <div class="media">
                            <div class="review-img">
                                <img src={r5} alt="Mohamed Mufasil Mufeeth" title="Mohamed Mufasil Mufeeth" />
                            </div>
                            <div class="media-body align-self-center">
                                <div class="review-title">
                                    <h3> Laxmi Rajput </h3>
                                </div>
                                <div className="star-img-group">
                                    <img src={star} />
                                    <img src={star} />
                                    <img src={star} />
                                    <img src={star} />
                                    <img src={star} />
                                </div>

                                <hr></hr>
                                <p>

                                    This is the best platform for data science aspirants to explore good knowledge. The institute provides the best set of classes from high professionals that helps in getting concepts clear and a great experience for me. The mentors are supportive and friendly.
                                    It has one of the best curriculum designs and projects that makes the learning process easy and better understood. I am going to miss the entire journey of the Uncodemy classes. Thankyou Uncodemy.

                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="review-thumb">
                        <div class="media">
                            <div class="review-img">
                                <img src={r6} alt="Mohamed Mufasil Mufeeth" title="Mohamed Mufasil Mufeeth" />
                            </div>
                            <div class="media-body align-self-center">
                                <div class="review-title">
                                    <h3> Goddess Parvati </h3>
                                </div>
                                <div className="star-img-group">
                                    <img src={star} />
                                    <img src={star} />
                                    <img src={star} />
                                    <img src={star} />
                                    <img src={star} />
                                </div>

                                <hr></hr>
                                <p>

                                    I am very happy that I joined Uncodemy for Data Science Professional Course, which turned out to be the right decision. It was a wonderful and enriching learning experience. It’s very important to get quality education, along with proper guidance in the right direction and I have discovered both things here.

                                    Few qualities of this institute:

                                    1. The trainers are very knowledgeable and give us a deep understanding of every topic by giving simple examples.
                                    2. The class is not overcrowded and has limited students in it. So, the trainer can properly give time to each and every student for explaining topics and clearing their doubts.
                                    3. With no extra cost, you can repeat the same course even after its completion and can attend any other batch class whenever you need it.

                                    I strongly recommend everyone to join Uncodemy. The experience of learning with proper course hands-on knowledge will be amazing.

                                    Thank you so much to the trainers and staff of this institute and I wish all the very best to you all for your future endeavours!

                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="review-thumb">
                        <div class="media">
                            <div class="review-img">
                                <img src={r7} alt="Mohamed Mufasil Mufeeth" title="Mohamed Mufasil Mufeeth" />
                            </div>
                            <div class="media-body align-self-center">
                                <div class="review-title">
                                    <h3> Ramesh Chaudhary </h3>
                                </div>
                                <div className="star-img-group">
                                    <img src={star} />
                                    <img src={star} />
                                    <img src={star} />
                                    <img src={star} />
                                    <img src={star} />
                                </div>

                                <hr></hr>
                                <p>

                                    I had a great experience with the Data Science course at Uncodemy. The instructors were very knowledgeable and the course content was well-structured and easy to follow. The projects were challenging but also fun, and they really helped me develop my skills in data analysis and machine learning. The community of students was also very supportive and made the learning experience even more enjoyable. Overall, I would definitely recommend this course to anyone who wants to learn about data science.

                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="review-thumb">
                        <div class="media">
                            <div class="review-img">
                                <img src={r8} alt="Mohamed Mufasil Mufeeth" title="Mohamed Mufasil Mufeeth" />
                            </div>
                            <div class="media-body align-self-center">
                                <div class="review-title">
                                    <h3> Manish Kumar </h3>
                                </div>
                                <div className="star-img-group">
                                    <img src={star} />
                                    <img src={star} />
                                    <img src={star} />
                                    <img src={star} />
                                    <img src={star} />
                                </div>

                                <hr></hr>
                                <p>
                                    Uncodemy is the Best Place for Learning Data Science course in noida.... Teaching staff is very nice and supportive and also gives placement calls. The placement team is best and I like the way they handle each and every student. Placement team provides all required things for preparation like grooming sessions, many mock interviews. All staff trainers are friendly and ready to help any time.

                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="review-thumb">
                        <div class="media">
                            <div class="review-img">
                                <img src={r9} alt="Mohamed Mufasil Mufeeth" title="Mohamed Mufasil Mufeeth" />
                            </div>
                            <div class="media-body align-self-center">
                                <div class="review-title">
                                    <h3> ritu jain </h3>
                                </div>
                                <div className="star-img-group">
                                    <img src={star} />
                                    <img src={star} />
                                    <img src={star} />
                                    <img src={star} />
                                    <img src={star} />
                                </div>

                                <hr></hr>
                                <p>

                                    Uncodemy is a best Data Science Institute in Noida. With a wide and extraordinary classes, they also helps us with business development strategies, projects across different industries.
                                    The courses that I looked to gain knowledge in AI and machine learning and etc. One can have a decent learning experience with long hours devoted to the course. Offers project based learning which we can use in real time as it helps us to enhance our decision making abilities.
                                    Unpendra Sir is really a good person and have broad knowledge across data analytics industry.

                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="review-thumb">
                        <div class="media">
                            <div class="review-img">
                                <img src={r10} alt="Mohamed Mufasil Mufeeth" title="Mohamed Mufasil Mufeeth" />
                            </div>
                            <div class="media-body align-self-center">
                                <div class="review-title">
                                    <h3> Dharmendra Kushwah </h3>
                                </div>
                                <div className="star-img-group">
                                    <img src={star} />
                                    <img src={star} />
                                    <img src={star} />
                                    <img src={star} />
                                    <img src={star} />
                                </div>

                                <hr></hr>
                                <p>

                                    I have taken a course named data science. Uncodemy is a very good platform in order to grow a career in your dream field. As I belong to Punjab, I am very satisfied with their service because they really helped me a lot not only in course concepts but also they listen to any kind of problems including doubts n all. They have very well experienced staff. Mentors are very helpful and talented. Finally, If you want to pursue your dream and want good placement, Go for Uncodemy . Thank you Uncodemy team for this kind of training.....

                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='review-right-arrow arrow-img' onClick={moveImageRight}>
                <img src={Right} />
            </div>
        </div>
    )
}

export default Learner