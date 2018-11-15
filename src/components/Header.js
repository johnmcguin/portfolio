import React from 'react'

import Footer from './Footer'
import avatar from '../assets/images/avatar.jpg'

class Header extends React.Component {
    render() {
        return (
            <header id="header">
                <div className="inner">
                    <div className="profile" style={{backgroundImage: "url(" + avatar + ")"}}></div>
                    <h1>John McGuin</h1>
                    <p>Full Stack web developer based in Denver, Colorado</p>
                </div>
                <Footer />
            </header>
        )
    }
}

export default Header
