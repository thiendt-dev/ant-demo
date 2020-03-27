import React, { Component } from 'react'
import { getData } from '../action/getDataAction'
import { connect } from 'react-redux'

class GetDataContainer extends Component {
    constructor(props) {
        super(props)

        this.state = {
            eployees: []
        }
    }

    handleClick = () => {
        console.log('aaaaaaaaa');

        this.props.dispatchGetData()
    }

    render() {
        return (
            <div>
                <p>show data</p>
                <button onClick={this.handleClick}>GET DATA</button>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        dispatchGetData: () => { dispatch(getData()) }
    }
}

export default connect(null, mapDispatchToProps)(GetDataContainer)