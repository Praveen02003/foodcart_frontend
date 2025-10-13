import React, { useEffect } from 'react'
import '../About/About.css'
import { useNavigate } from 'react-router-dom'
export const About = () => {
    return (
        <div className="about-page">
            <section className="about-hero">
                <div className="about-text">
                    <h1>About <span>Tastenow</span></h1>
                    <hr className="about-divider" />
                    <p>
                        Welcome to <strong>Tastenow</strong> — your one-stop destination for delicious food, quick delivery, and a satisfying dining experience from the comfort of your home.
                    </p>
                </div>
                <div className="about-image">
                    <img src="https://images.unsplash.com/photo-1615719413546-198b25453f85?q=80&w=736&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Delicious food" />
                </div>
            </section>

            <section className="about-mission">
                <h2>Our Mission</h2>
                <hr className="about-divider" />
                <p>
                    Our goal is simple — to bring the best restaurants and cuisines straight to your doorstep.
                    We believe food is more than just a meal — i's an experience that connects people, cultures, and emotions.
                </p>
            </section>

            <section className="about-values">
                <h2>What We Offer</h2>
                <hr className="about-divider" />
                <ul>
                    <li>Fast and reliable food delivery across your city.</li>
                    <li>Wide variety of cuisines - from street food to fine dining.</li>
                    <li>Easy and secure online payments.</li>
                    <li>Exclusive discounts and special offers every day.</li>
                    <li>Verified restaurants with real customer reviews.</li>
                </ul>
            </section>

            <section className="about-vision">
                <h2>Our Vision</h2>
                <hr className="about-divider" />
                <p>
                    To revolutionize the way people enjoy their favorite meals — making great food accessible, affordable, and enjoyable for everyone, anytime, anywhere.
                </p>
            </section>

            <section className="about-footer">
                <h3>Join the <span>Tastenow</span> Family Today!</h3>
                <p>
                    Whether you're craving pizza, burgers, or something sweet, <strong>Tastenow</strong> has got you covered.
                    Order now and taste the joy of hassle-free food delivery.
                </p>
            </section>
        </div>
    )
}
