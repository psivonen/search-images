import React, {Component} from 'react';
import "../index.css";
import '../App.css';
import axios from 'axios';
import ImageResults from './ImageResults';
import {Form, Input} from 'semantic-ui-react';

class SearchImages extends Component {

    state = {
        searchText: '',
        amount: 30,
        imageType: 'all',
        order: 'popular',
        apiUrl: 'https://pixabay.com/api',
        // API key can be obtained, when user registers on pixabay.com
        apiKey: '2485689-f3bf8f960ae62571c4b69a3f9',
        images: []
    };

    onTextChange = searchText => event => {
        const value = event.target.value;
        this.setState({[searchText]: value}, () => {

            // If search input is empty, no data will be shown.
            // Instead it will return an empty array.
            if (value === '') {
                this.setState({images: []});
            } else {
                // When user writes something on the search bar, data will de displayed below.
                axios.get(
                    `${this.state.apiUrl}/?key=${this.state.apiKey}&q=${this.state.searchText}
                    &image_type=${this.state.imageType}&per_page=${this.state.amount}&order=${this.state.order}&safesearch=true`)
                    .then(res => this.setState({images: res.data.hits}))
                    .catch(err => console.log(err));
            }
        });
    };

    // Filter images displayed by amount, image type or by order.
    onSelectChange = event => {
        this.setState({[event.target.name]: event.target.value});
    };

    render() {
        console.log(this.state.images);
        return (
            <div>
                <Form>
                    <label>What kind of image do you need?</label>
                    <br/>
                    <Input type="text"
                           name="searchText"
                           placeholder="Search..."
                           value={this.state.searchText}
                           onChange={this.onTextChange('searchText')}
                           icon='search'
                           fluid
                    />
                    <br/>
                    <Form.Group widths='equal'>
                        {/* Filter images by amount */}
                        <Form.Field label='Amount' control='select'
                                    name="amount"
                                    value={this.state.amount}
                                    onChange={this.onSelectChange}
                        >

                            <option value={30}>30</option>
                            <option value={50}>50</option>
                            <option value={100}>100</option>
                            <option value={200}>200</option>
                        </Form.Field>

                        {/* Filter images by type */}
                        <Form.Field label='Image type' control='select'
                                    name="imageType"
                                    value={this.state.imageType}
                                    onChange={this.onSelectChange}
                        >
                            <option value={'all'}>All</option>
                            <option value={'photo'}>Photo</option>
                            <option value={'illustration'}>Illustration</option>
                            <option value={'vector'}>Vector</option>
                        </Form.Field>

                        {/* Filter images by order */}
                        <Form.Field label='Order' control='select'
                                    name="order"
                                    value={this.state.order}
                                    onChange={this.onSelectChange}
                        >
                            <option value={'popular'}>Popular</option>
                            <option value={'latest'}>Latest</option>
                        </Form.Field>
                    </Form.Group>
                </Form>

                {/* Display image results */}
                {this.state.images.length > 0 ? (
                    <ImageResults images={this.state.images}/>
                ) : null}

            </div>
        )
    }
}


export default SearchImages;
