import PropTypes from 'prop-types';
import React, { Component } from 'react';

class Projects extends Component {
    renderProjects() {
        const { projects } = this.props;

        if (!projects) return;

        const Projects = projects.map((obj, i) => {
            return (
                <article className="work-item" key={i}>
                    <a className="image fit thumb" href={obj.href} data-after-content={obj.afterContent} target="_blank">
                        <img src={obj.img} />
                    </a>
                    <h3>{obj.caption}</h3>
                    <p>{obj.description}</p>
                    <p>Technologies: {obj.technologies.join(', ')}</p>
                    <p>Roles: {obj.roles.join(', ')}</p>
                    <p>Credits: {obj.credits.join(', ')}</p>
                </article>
            );
        });

        return (
            <div className="work-list">
                {Projects}
            </div>
        );
    }
    render() {
        return (
            <div>
                <h2>Projects</h2>
                { this.renderProjects() }
            </div> 
        );
    }
}

Projects.displayName = 'Projects';
Projects.propTypes = {
    projects: PropTypes.array
};

export default Projects;