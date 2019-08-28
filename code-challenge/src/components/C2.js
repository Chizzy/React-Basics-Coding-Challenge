import React, { Component } from 'react';
// import C1 from './C1';

class C2 extends Component {
    state = {
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
                <div>
                    <h2>{this.props.fact}</h2>
                    <h3>{this.props.length}</h3>
                </div>
            </div>
        );
    }
}

export default C2;