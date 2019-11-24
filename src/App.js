import React, { Component } from "react";
import ListContacts from "./ListContacts";

class App extends Component {
  state = {
    contacts: [
      {
        id: "kathy",
        name: "Kathy Haro",
        handle: "kharo",
        avatarURL: "http://localhost:5001/karen.jpg"
      },
      {
        id: "Parker",
        name: "Peter Parker",
        handle: "p_parkerhoff",
        avatarURL: "http://localhost:5001/richard.jpg"
      },
      {
        id: "tyler",
        name: "Tyler McGinnis",
        handle: "tylermcginnis",
        avatarURL: "http://localhost:5001/tyler.jpg"
      }
    ]
  };

  deleteContact = contact => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(c => {
        return c.id !== contact.id;
      })
    }));
  };

  searchContacts = textQuery => {
    this.setState = prevState => ({
      contacts: prevState.contacts.filter(c =>
        c.name
          .toLowercase()
          .trim()
          .contains(textQuery)
      )
    });
  };

  render() {
    return (
      <div>
        <ListContacts
          contacts={this.state.contacts}
          onContactDelete={this.deleteContact}
          onSearch={this.searchContacts}
        />
      </div>
    );
  }
}

export default App;
