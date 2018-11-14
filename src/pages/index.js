import React from 'react'
import Helmet from 'react-helmet'
// model
import PROJECTS from '../models/projects'
// components
import Projects from '../components/Projects'
import ContactForm from '../components/Contact'
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
                        <Projects images={PROJECTS.map(({
                            caption,
                            description,
                            img,
                            href,
                            roles,
                            credits,
                            technologies,
                            afterContent
                        }) => ({
                            caption,
                            description,
                            img,
                            href,
                            roles,
                            credits,
                            technologies,
                            afterContent
                        }))} />
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