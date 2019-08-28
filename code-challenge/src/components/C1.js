import React, { Component } from 'react';
import C2 from './C2';
import axios from 'axios';

class C1 extends Component {
    state = {
        C1: 'www.placeholder.com',
        C2: '',
        fact: '',
        length: 0
    }
    handleClick = (event) => {
        event.preventDefault()
        this.setState({C2 : this.state.C1})
    }
    getFromC2 = (modifiedC2) => {
        this.setState({C1 : modifiedC2})
    }
    handleSubmit =(event) => {
        event.preventDefault()
        const url = ('https://cors-anywhere.herokuapp.com/' + this.state.C1)
        axios
            .get(url)
            .then(response  => {
                console.log(response.data)
                this.setState({
                    fact: response.data.fact,
                    length: response.data.length
                })
            })
            .catch(error => {
                console.log("FAIL: " + error)
            })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" name="C1" value={this.state.C1} readOnly /><br />
                    <button onClick={this.handleClick}>Send to C2</button>
                    <button type="submit">Access Address</button>
                </form>
                <C2 C2={this.state.C2} modifiedC2={this.getFromC2} fact={this.state.fact} length={this.state.length}  />
            </div>
        );
    }
}

export default C1;