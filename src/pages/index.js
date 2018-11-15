import React from 'react'
import Helmet from 'react-helmet'
// model
import { PROJECTS, SERVICES } from '../models'
// components
import Projects from '../components/Projects'
import ContactForm from '../components/Contact'
import Services from '../components/Services'
class HomeIndex extends React.Component {

    render() {
        const siteTitle = this.props.data.site.siteMetadata.title
        const siteDescription = this.props.data.site.siteMetadata.description

        return (
            <div>
                <Helmet>
                    <title>{siteTitle}</title>
                    <meta name="description" content={siteDescription} />
                </Helmet>

                <div id="main">
                    {/* Projects */}
                    <section>
                        <Projects projects={PROJECTS}></Projects>
                    </section>
                    {/* Services */}
                    <section>
                        <Services services={SERVICES}></Services>
                    </section>
                    {/* Contact */}
                    <section>
                        <ContactForm></ContactForm>
                    </section>
                </div>
            </div>
        )
    }
}

export default HomeIndex

export const pageQuery = graphql`
    query PageQuery {
        site {
            siteMetadata {
                title
                description
            }
        }
    }
`