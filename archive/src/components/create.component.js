import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from "react-router-dom";

export default class Create extends Component {
    
    constructor(props) {
        super(props);
        // this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            person_name: '',
            business_name: '',
            business_gst_number: '',
            done: false
        }
    }

    onChangePerson = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({
            [name]: value
        });
    }

    onSubmit = (e) => {
        e.preventDefault();
        
        const obj = {
            person_name: this.state.person_name,
            business_name: this.state.business_name,
            business_gst_number: this.state.business_gst_number
        };
        // console.log(obj);
        axios.post('http://localhost:4000/business/add', obj)
            .then(res => {this.setState({done: true}); console.log(res.data)});

        this.setState({
            person_name: '',
            business_name: '',
            business_gst_number: ''
        })
    }

    render() {
        return (
            <div style={{ marginTop: 10 }}>
                <h3>Add New Business</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Person Name:  </label>
                        <input
                            type="text"
                            className="form-control"
                            name="person_name"
                            value={this.state.person_name}
                            onChange={this.onChangePerson}
                        />
                    </div>
                    <div className="form-group">
                        <label>Business Name: </label>
                        <input type="text"
                            className="form-control"
                            name="business_name"
                            value={this.state.business_name}
                            onChange={this.onChangePerson}
                        />
                    </div>
                    <div className="form-group">
                        <label>GST Number: </label>
                        <input type="text"
                            className="form-control"
                            name="business_gst_number"
                            value={this.state.business_gst_number}
                            onChange={this.onChangePerson}
                        />
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Register Business" className="btn btn-primary" />
                    </div>
                </form>
                {this.state.done ? <Redirect to="/" /> : null}
            </div>
        )
    }
    
}