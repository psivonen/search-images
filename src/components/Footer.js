import React, {Component} from 'react';

class Footer extends Component {
    render() {
        return (
            <div>
                <p style={{position: 'absolute', right: '0', bottom: '0',
                    left: '0', paddingBottom: '10px'}}>
                    Images provided by <a href="https://pixabay.com/" target="_blank" rel="noopener noreferrer" className='normal_link'>Pixabay.</a>
                </p>
            </div>
        );
    }
}

export default Footer;
