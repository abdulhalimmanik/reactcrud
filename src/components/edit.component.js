import React, { Component } from 'react';
import axios from 'axios';
// import { connect } from 'net';
import { connect } from 'react-redux';
import { editBusiness } from '../actions/index';

class Edit extends Component {
    
    constructor(props) {
        super(props);

        this.state = {
            person_name: '',
            business_name: '',
            business_gst_number: ''
        }
    }

    componentDidMount() {
        axios.get('http://localhost:4000/business/edit/' + this.props.match.params.id)
            .then(response => {
                this.setState({
                    person_name: response.data.person_name,
                    business_name: response.data.business_name,
                    business_gst_number: response.data.business_gst_number
                });
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    onChangePersonName = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    onSubmit = e => {
        e.preventDefault();
        const obj = {
            person_name: this.state.person_name,
            business_name: this.state.business_name,
            business_gst_number: this.state.business_gst_number
        };

        this.props.editBusiness(this.props.match.params.id, obj);
        // axios.post('http://localhost:4000/business/update/' + this.props.match.params.id, obj)
        //     .then(res => console.log(res.data));

        // this.props.history.push('/index');
    }

    render() {
        return (
            <div style={{ marginTop: 10 }}>
                <h3 align="center">Update Business</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Person Name:  </label>
                        <input
                            type="text"
                            name="person_name"
                            className="form-control"
                            value={this.state.person_name}
                            onChange={this.onChangePersonName}
                        />
                    </div>
                    <div className="form-group">
                        <label>Business Name: </label>
                        <input type="text"
                            name="business_name"
                            className="form-control"
                            value={this.state.business_name}
                            onChange={this.onChangePersonName}
                        />
                    </div>
                    <div className="form-group">
                        <label>GST Number: </label>
                        <input type="text"
                            name="business_gst_number"
                            className="form-control"
                            value={this.state.business_gst_number}
                            onChange={this.onChangePersonName}
                        />
                    </div>
                    <div className="form-group">
                        <input type="submit"
                            value="Update Business"
                            className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }

}

export default connect(null, {editBusiness})(Edit);