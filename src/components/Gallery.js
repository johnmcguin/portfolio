import PropTypes from 'prop-types';
import React, { Component } from 'react';

class Gallery extends Component {

    renderGallery() {
        const { images } = this.props;

        if (!images) return;

        const gallery = images.map((obj, i) => {
            return (
                <article className="work-item" key={i}>
                    <a className="image fit thumb" href={obj.href} data-after-content={obj.afterContent} target="_blank">
                        <img src={obj.img} />
                    </a>
                    <h3>{obj.caption}</h3>
                    <p>{obj.description}</p>
                </article>
            );
        });

        return (
            <div className="work-list">
                {gallery}
            </div>
        );
    }
    render() {
        return (
            <div>
                {this.renderGallery()}
            </div>
        );
    }
}

Gallery.displayName = 'Gallery';
Gallery.propTypes = {
    images: PropTypes.array
};

export default Gallery;