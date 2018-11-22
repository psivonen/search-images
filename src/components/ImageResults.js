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

        const inlineStyle = {
            modal: {
                marginTop: '100px',
                marginLeft: 'auto',
                marginRight: 'auto'
            }
        };

        let imageListContent;
        const {images} = this.props;

        // Display images on a grid
        if (images) {
            imageListContent = (
                <Grid stackable columns={2}>
                    {images.map(img => (
                        <Grid.Column key={img.id} width={8} stretched>
                            <Segment>
                                <Image src={img.largeImageURL} alt="" fluid/>
                                <Label attached='bottom' style={{background: 'white'}}>
                                    <Label>
                                        by <a href={'https://pixabay.com/users/' + img.user + '-' + img.user_id}
                                              target='_blank' rel='noopener noreferrer'>{img.user}</a>
                                    </Label>
                                    <Label>
                                        <a href={img.imageURL} target='_blank' rel='noopener noreferrer'>Download</a>
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
            imageListContent = null;
        }

        return (
            <Container>
                {imageListContent}
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
