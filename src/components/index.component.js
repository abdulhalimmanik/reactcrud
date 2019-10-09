import React, { Component } from 'react';
// import axios from 'axios';
import TableRow from './TableRow';
import { connect } from 'react-redux';

class Index extends Component {

    // constructor(props) {
    //     super(props);
    //     this.state = { business: [] };
    // }
    // componentDidMount() {
    //     axios.get('http://localhost:4000/business')
    //         .then(response => {
    //             this.setState({ business: response.data });
    //             console.log(response.data);
    //         })
    //         .catch(function (error) {
    //             console.log(error);
    //         })
            
    // }
    tabRow() {
        if (!this.props.businesses.length) {
            return (
                <tr></tr>
            )
        }

        return this.props.businesses.map(function (object, i) {
            return <TableRow obj={object} key={i} />;
        });
    }

    render() {
        return (
            <div>
                <h3 align="center">Business List</h3>
                <table className="table table-striped" style={{ marginTop: 20 }}>
                    <thead>
                        <tr>
                            <th>Person</th>
                            <th>Business</th>
                            <th>GST Number</th>
                            <th colSpan="2">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.tabRow()}
                    </tbody>
                </table>
            </div>
        );
    }

    
}

const mapStateToProps = state => {
    return {
        businesses: state.businesses
    };
};

export default connect(
    mapStateToProps,
    // mapDispatchToProps
)(Index);