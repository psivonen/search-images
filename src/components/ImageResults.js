import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Button, Grid, Image, Modal, Container, Label, Segment} from 'semantic-ui-react';

class ImageResults extends Component {

    state = {
        open: false,
        currentImg: ''
    };

    // Open Modal
    handleOpen = img => {
        this.setState({open: true, currentImg: img})
    };

    // Close Modal
    handleClose = () => {
        this.setState({open: false})
    };


    render() {

        // Position modal in the middle of the page.
        // There is some error on the React Semantic UI and modal wouldn't go in the middle.
        const inlineStyle = {
            modal: {
                marginTop: '100px',
                marginLeft: 'auto',
                marginRight: 'auto'
            }
        };

        let imageContent;
        const {images} = this.props;

        // Display images on a grid if user types something on the search bar.
        if (images) {

            imageContent = (
                <Grid>
                    {images.map(img => (
                        <Grid.Column key={img.id} mobile={16} tablet={8} computer={5} stretched>
                            <Segment>
                                <Image src={img.largeImageURL} alt=""/>
                                <Label attached='bottom' style={{background: 'white'}}>
                                    <Label>
                                        by <a href={'https://pixabay.com/users/' + img.user + '-' + img.user_id}
                                              target='_blank' rel='noopener noreferrer'>{img.user}</a>
                                    </Label>
                                    <Label>
                                        <a href={img.imageURL} target='_blank'
                                           rel='noopener noreferrer'>Download</a>
                                    </Label>
                                    <Button size='tiny' icon='zoom-in' onClick={() => this.handleOpen(img.imageURL)}
                                            compact/>
                                </Label>
                            </Segment>
                        </Grid.Column>
                    ))}
                </Grid>
            )
            
        } else {
            imageContent = null;
        }

        return (
            <Container>
                {imageContent}
                <Modal
                    open={this.state.open}
                    close={this.state.handleClose}
                    basic size='small'
                    style={inlineStyle.modal}
                >
                    <Modal.Content scrolling={true}>
                        <Image src={this.state.currentImg} alt=""/>
                    </Modal.Content>
                    <Modal.Actions style={{paddingTop: '10px'}}>
                       <Button icon='close' onClick={this.handleClose}/>
                    </Modal.Actions>
                </Modal>
            </Container>
        );
    }
}

ImageResults.propTypes = {
    images: PropTypes.array.isRequired
};

export default ImageResults;
