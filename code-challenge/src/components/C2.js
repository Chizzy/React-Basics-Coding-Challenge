import React, { Component } from 'react';
// import C1 from './C1';

class C2 extends Component {
    state = {
        C1: '',
        C2: ''
    }
    handleChange = (event) => {
        event.preventDefault()
        this.setState({C2 : event.target.value})
    }
    handleClick = (event) => {
        event.preventDefault()
        this.props.modifiedC2(this.state.C2)
    }

    render() {
        return (
            <div>
                <form>
                    <input type="text" name="C2" defaultValue={this.props.C2} onChange={this.handleChange} /><br />
                    <button onClick={this.handleClick}>Send to C1</button>
                </form>
            </div>
        );
    }
}

export default C2;