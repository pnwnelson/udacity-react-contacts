import React, { Component } from 'react'
import ListContacts from './ListContacts'

class App extends Component {

  state = {
    contacts: [
      {
        "id": "ryan",
        "name": "Ryan Florence",
        "email": "ryan@reacttraining.com",
        "avatarURL": "http://localhost:5001/ryan.jpg"
      },
      {
        "id": "michael",
        "name": "Michael Jackson",
        "email": "michael@reacttraining.com",
        "avatarURL": "http://localhost:5001/michael.jpg"
      },
      {
        "id": "tyler",
        "name": "Tyler McGinnis",
        "email": "tyler@reacttraining.com",
        "avatarURL": "http://localhost:5001/tyler.jpg"
      }
    ]
  }

  removeContact = (contact) => {
    this.setState((state) =>  ({
      //this will evaluate to a brand new array. This is a reducer function
      contacts: state.contacts.filter((c) => c.id !== contact.id) //the contact.id of the clicked on contact
    }))
  }

  render() {
    return (
      <div>
        <ListContacts 
          onDeleteContact={this.removeContact} 
          contacts={this.state.contacts}/>
      </div>
    )
  }
}

export default App;
