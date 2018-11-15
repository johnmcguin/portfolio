import React from 'react'

class ContactForm extends React.Component {
    render() {
        return (
            <div>
                <h2>Let's Chat</h2>
                <p>If you like what you've seen so far, let's start a conversation and see where it goes!</p>
                <div className="row">
                    <div className="8u 12u$(small)">
                        <form method="post" name="contact" data-netlify="true" id="contactForm">
                            <div className="row uniform 50%">
                                <div className="6u 12u$(xsmall)"><input type="text" name="name" id="name" placeholder="Name*" required /></div>
                                <div className="6u 12u$(xsmall)"><input type="email" name="email" id="email" placeholder="Email*" required /></div>
                                <div className="12u"><textarea name="message" id="message" placeholder="Message*" rows="4" required></textarea></div>
                            </div>
                        </form>
                        <ul className="actions">
                            <li><input type="submit" value="Send Message" form="contactForm" /></li>
                        </ul>
                    </div>
                    <div className="4u 12u$(small)">
                        <ul className="labeled-icons">
                            <li>
                                <h3 className="icon fa-home"><span className="label">Address</span></h3>
                                Denver, CO<br />
                                U.S.A<br />
                            </li>
                            <li>
                                <h3 className="icon fa-envelope-o"><span className="label">Email</span></h3>
                                <a href="mailto:johnmcguin88@gmail.com?Subject=Let&#39;s%20Do%20Work!" target="_top">johnmcguin88@gmail.com</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default ContactForm
