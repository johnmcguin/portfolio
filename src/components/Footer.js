import React from 'react'

class Footer extends React.Component {
    render() {
        return (
            <div id="footer">
                <div className="inner">
                    <ul className="icons">
                        <li><a href="https://twitter.com/john_mcguin" target="_blank" className="icon fa-twitter"><span className="label">Twitter</span></a></li>
                        <li><a href="https://github.com/johnmcguin" target="_blank" className="icon fa-github"><span className="label">Github</span></a></li>
                        <li><a href="https://www.linkedin.com/in/johnmcguin/" target="_blank" className="icon fa-linkedin"><span className="label">Github</span></a></li>
                        <li><a href="mailto:johnmcguin88@gmail.com?Subject=Let&#39;s%20Do%20Work!" target="_top" className="icon fa-envelope-o"><span className="label">Email</span></a></li>
                    </ul>
                    {/* <ul className="copyright">
                        <li>&copy; Gatsby Starter Strata</li><li>Design: <a href="http://html5up.net">HTML5 UP</a></li>
                    </ul> */}
                </div>
            </div>
        )
    }
}

export default Footer
