import React, { Component } from 'react';
import C2 from './C2';

class C1 extends Component {
    state = {
        C1: 'www.placeholder.com',
        C2: ''
    }
    handleClick = (event) => {
        event.preventDefault()
        this.setState({C2 : this.state.C1})
    }
    getFromC2 = (modifiedC2) => {
        this.setState({C1 : modifiedC2})
    }

    render() {
        return (
            <div>
                <form>
                    <input type="text" name="C1" value={this.state.C1} readOnly /><br />
                    <button onClick={this.handleClick}>Send to C2</button>
                    <button type="submit">Access Address</button>
                </form>
                <C2 C2={this.state.C2} modifiedC2={this.getFromC2}  />
            </div>
        );
    }
}

export default C1;