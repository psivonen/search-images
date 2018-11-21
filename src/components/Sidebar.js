import React, {Component} from 'react';
import "../index.css";
import Footer from "./Footer";

class Sidebar extends Component {

    render() {

        return (
            <div>
                <div>
                    <h1>Search images</h1>
                    <p className="info-text">
                        Search high resolution royalty free images for your needs. You can filter your search by amount
                        and
                        type of images.
                        <br/>
                        <br/>All images are released under Creative Commons CC0, which makes them safe to use
                        without asking for permission or giving credit to the artist - even for commercial purposes. <a
                        href="https://pixabay.com/en/service/faq/" target="_blank" rel="noopener noreferrer"
                        className="normal_link">Learn more.</a>
                    </p>
                    <Footer/>
                </div>
            </div>

        );
    }
}

export default Sidebar;