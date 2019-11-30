import React, { Component } from "react";
import ListContacts from "./ListContacts";
import * as ContactsAPI from "./utils/ContactsAPI";
import CreateContact from "./CreateContact";
import { Route } from "react-router-dom";

class App extends Component {
  state = {
    contacts: []
  };

  componentDidMount() {
    ContactsAPI.getAll().then(contacts => {
      this.setState({ contacts });
    });
  }

  deleteContact = contact => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(c => {
        return c.id !== contact.id;
      })
    }));

    ContactsAPI.remove(contact);
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
        <Route
          exact
          path="/"
          render={() => (
            <ListContacts
              contacts={this.state.contacts}
              onContactDelete={this.deleteContact}
              onSearch={this.searchContacts}
            />
          )}
        ></Route>
        <Route path="/create" component={CreateContact}></Route>
      </div>
    );
  }
}

export default App;
