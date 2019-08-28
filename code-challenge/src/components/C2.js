import React, { Component } from 'react';
import styled from 'styled-components';

const Form = styled.form`
    padding: 2rem;
`
const Button = styled.button`
    color: white;
    text-transform: uppercase;
    text-decoration: none;
    background: darkkhaki;
    padding: 20px;
    border-radius: 5px;
    display: inline-block;
    border: none;
    transition: all 0.4s ease 0s;
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
const Fact = styled.div`
    font-family: 'Special Elite', cursive;
    h2 {
        word-wrap:break-word;
    }
`

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
        let C2 = this.state.C2
        // user input error for extra whitespace
        C2.trim()
        C2 = C2.replace(/\s/g, '')
        this.props.modifiedC2(C2)
    }

    render() {
        return (
            <div>
                <Form>
                    <InputField type="url" name="C2" defaultValue={this.props.C2} onChange={this.handleChange} /><br />
                    <Button onClick={this.handleClick}>Send to C1</Button>
                </Form>
                <Fact>
                    <h2>{this.props.fact}</h2>
                    <h3>{(this.props.length) === 0 ? '' : this.props.length}</h3>
                </Fact>
            </div>
        );
    }
}

export default C2;