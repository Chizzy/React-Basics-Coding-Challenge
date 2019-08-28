import React, { Component } from 'react';
import C2 from './C2';
import axios from 'axios';
import styled from 'styled-components';

const LeftButton = styled.button`
    color: white;
    text-transform: uppercase;
    text-decoration: none;
    background: darkgray;
    padding: 20px;
    margin: 1rem;
    border-radius: 5px;
    display: inline-block;
    border: none;
    box-shadow: 
      inset 0 0 8px  rgba(0,0,0,0.1),
            0 0 16px rgba(0,0,0,0.1); 
`
const RightButton = styled.button`
    color: white;
    text-transform: uppercase;
    text-decoration: none;
    background: darkgray;
    padding: 20px;
    margin: 1rem;
    border-radius: 5px;
    display: inline-block;
    border: none;
    box-shadow: 
      inset 0 0 8px  rgba(0,0,0,0.1),
            0 0 16px rgba(0,0,0,0.1); 
`
const InputField = styled.input`
    border: 5px solid; 
    box-shadow: 
      inset 0 0 8px  rgba(0,0,0,0.1),
            0 0 16px rgba(0,0,0,0.1); 
    padding: 15px;
    background: rgba(255,255,255,0.5);
    margin: 0 0 10px 0;
`

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
        // using third party middleware server to call on the API 
        // this adds the header and sends the response back
        // added url as a prefix in order to work
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
                    <InputField type="text" name="C1" value={this.state.C1} readOnly /><br />
                    <LeftButton onClick={this.handleClick}>Send to C2</LeftButton>
                    <RightButton type="submit">Access Address</RightButton>
                </form>
                <C2 C2={this.state.C2} modifiedC2={this.getFromC2} fact={this.state.fact} length={this.state.length}  />
            </div>
        );
    }
}

export default C1;