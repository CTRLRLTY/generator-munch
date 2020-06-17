import React from 'react';
import {connect} from 'react-redux';
import {printHello} from '../actions/exampleActions';

function HelloWorld(props) {
    return (
        <p>
            {props.hello} 
        </p>
    )
}

const mapStateToProps = state => ({
    hello: state.example.word
});

export default connect(mapStateToProps, {printHello})(HelloWorld);
