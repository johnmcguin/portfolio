import React from 'react'
import Helmet from 'react-helmet'
// model
import { PROJECTS, SERVICES } from '../models'
// components
import { Projects, ContactForm, Services, About } from '../components'
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
                    {/* About */}
                    <section>
                        <About></About>
                    </section>
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