import React from 'react';
import { connect } from 'react-redux';
import index from '../components/index';
// import { deletePost } from '../actions';

function BusinessList({ businesses, onDelete }) {
    if (!businesses.length) {
        return (
            <div>
                No
      </div>
        )
    }
    return (
        <div>
            {businesses.map(business => {
                return (
                    <index businesses={businesses} key={businesses._id} />
                );
            })}
        </div>
    );
}

const mapStateToProps = state => {
    return {
        businesses: state.businesses
    };
};

// const mapDispatchToProps = dispatch => {
//     return {
//         onDelete: id => {
//             dispatch(deletePost(id));
//         }
//     };
// };

export default connect(
    mapStateToProps,
    // mapDispatchToProps
)(BusinessList);