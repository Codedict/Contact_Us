import React,{Fragment} from 'react'
import '../src/Contact.css'

const Contact = () => {
  return (
    <Fragment>

    <section className="contact">

    <div className='contact-heading'>
        <h2> Contact Us </h2>
    </div>

    <div className="container">

    <div className="row">

        <div className="column">
            <div className="contact-widget">
                <div className="contact-widget-item">
                    <div className="icon"> 
                      <i class="fa-solid fa-location-dot"></i>
                    </div>
                    <div className="text">
                      <h5>Address</h5>
                      <p>Saintgits College of Engineering, Kottukulam Hills, Pathamuttom P.O, Kottayam-686 532.</p>
                    </div>
                </div>
                <div className="contact-widget-item">
                    <div className="icon">
                      <i class="fa-solid fa-phone"></i>
                    </div>
                    <div className="text">
                      <h5>Contact Us</h5>
                      <p>+91-6238830855</p>
                    </div>
                </div>
                <div className="contact-widget-item">
                    <div className="icon">
                      <i class="fa-regular fa-envelope"></i>
                    </div>
                    <div className="text">
                      <h5>Mail</h5>
                      <p>nakshatra@saintgits.org</p>
                    </div>
                </div>
            </div>
        </div>

        <div className="column">
            <div className="contact-form">
                <form action="#">
                    <input type="text" placeholder='Name' />
                    <input type="email" placeholder='Email' />
                    <textarea placeholder='Comment'></textarea>
                    <button type='submit' className='site-btn'> Send Message </button>
                </form>
            </div>
        </div>

    </div>

    <div className="row">
      <div className="column-map">
        <div class="contact-map">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3934.985260128457!2d76.54917071399433!3d9.510009593188125!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b062ed484f475a7%3A0xea66b5d0e55062ca!2sSaintgits%20College%20of%20Engineering%20(Autonomous)%2C%20Kottayam%2C%20Kerala!5e0!3m2!1sen!2sin!4v1676740179090!5m2!1sen!2sin"
         width="600"
         height="450"
         style={{border:0}}
         allowfullscreen="" 
         loading="lazy" 
         referrerpolicy="no-referrer-when-downgrade">
         </iframe>
        </div>
      </div>
    </div>

    </div>
    
    </section>
    
    </Fragment>
  )
}

export default Contact