import axios from 'axios'
import React, { Component } from 'react'

export class PersonList extends Component {

    state = {
        persons: []
    }

    componentDidMount() {
        axios.get(`https://jsonplaceholder.typicode.com/users`)
        .then(res => {
            console.log(res);
            this.setState({ persons: res.data});
        });
    }

    render() {
        return (
            <div>
                <ul>
                    {this.state.persons.map(person => 
                    <li key={person.id}>{person.name}</li>)}
                </ul>
            </div>
        )
    }
}

export default PersonList
