import React, { Component } from 'react';
// import C1 from './C1';

class C2 extends Component {
    state = {
        C2: ''
    }
    handleChange = (event) => {
        event.preventDefault()
        this.setState({C2: event.target.value})
    }

    render() {
        return (
            <div>
                <form>
                    <input type="text" name="C2" defaultValue={this.props.C2} onChange={this.handleChange} /><br />
                    <button>A</button>
                </form>
            </div>
        );
    }
}

export default C2;