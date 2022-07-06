import React from 'react'
import './About.css'
import aboutImg from '../../images/about-img.jpg'

const About = () => {
  return (
    <section className="about">
      <div className="container">
        <div className="div section-title">
          <h2>About</h2>
        </div>

        <div className="about-content grid">
          <div className="about-img">
            <img src={aboutImg} alt="" />
          </div>
          <div className="about-text">
            <h2 className="about-title fs-26 ls-1">About BookHub</h2>
            <p className="fs-17">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia sit commodi odit accusantium facilis expedita deleniti inventore quibusdam vel, illum, delectus rem sed natus deserunt et hic itaque culpa quae eveniet explicabo, labore ex repellendus. Est impedit error ab quaerat.</p>
            <p className="fs-17">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque quaerat rem libero nulla, sunt itaque sint officia! Quae voluptatum libero accusamus doloremque vero sint quo aliquid sed! Exercitationem, illum neque.</p>
              
          </div>
        </div>
      </div>
    </section>
  )
} 

export default About