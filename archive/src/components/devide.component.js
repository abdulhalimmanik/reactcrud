import React, { Component } from 'react';
import Select from 'react-select';
import DatePicker from 'react-datepicker';
// import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class Create extends Component {
    constructor(props) {
        super(props);

        this.techCompanies = [
            { label: "Apple", value: 1 },
            { label: "Facebook", value: 2 },
            { label: "Netflix", value: 3 },
            { label: "Tesla", value: 4 },
            { label: "Amazon", value: 5 },
            { label: "Alphabet", value: 6 },
        ];
        this.selectedOption = null;
        this.defaultValue = "Tesla";
        this.state = {
            startDate: new Date()
        };
    }

    handleChange = selectedOption => {
        this.setState({ selectedOption });
        console.log(`Option selected:`, selectedOption);
    };

    handleChangeDate = date => {
        this.setState({
            startDate: date
        })
    }

    handleSubmitDate = e => {
        e.preventDefault();
        let main = this.state.startDate
        console.log(main.format('L'));
    }

    render() {
        return (
            <div className="container">
                <div className="row">

                    <div className="col-md-4">
                        <Select options={this.techCompanies} value={this.selectedOption}
                            onChange={this.handleChange} defaultValue={{ label: 'Facebook', value: 'facebook' }} defaultMenuIsOpen />
                    </div>
                    <div className="col-md-4">
                        
                        <h3>React Datepicker Example</h3>
                        <form onSubmit={this.handleSubmitDate}>
                            <div className="form-group">
                                <label>Select Date: </label>
                                <DatePicker
                                    selected={this.state.startDate}
                                    onChange={this.handleChangeDate}
                                    name="startDate"
                                />
                            </div>
                            <div className="form-group">
                                <button className="btn btn-success">Add Date</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}


// react crud - done
// react dropdown => defaultValue - done
// datepicker - done
// sidebar - done

// material
// autocomplete
// jwt

// tut
// online q => react, app, question
// crud
// redux

// 28/08/19

// grocery
// room
// food
// daily activity

// redux
// app redux
// stream
// interview question
// cv