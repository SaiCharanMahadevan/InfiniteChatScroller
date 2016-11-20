import React from 'react';
// import { Component } from 'react';

import ChatInput from '../components/ChatInput';
import ChatHistory from '../components/ChatHistory';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userID: Math.round(Math.random() * 1000000).toString(),
      history: [],
    };
  }

  componentDidMount() {
    this.PubNub = PUBNUB.init({
      publish_key: 'pub-c-464cc4db-5d7c-4b8c-8c1c-2a3ea9499ed3',
      subscribe_key: 'sub-c-383e8266-a987-11e6-80fa-02ee2ddab7fe',
      ssl: (location.protocol.toLowerCase() === 'https:'),
    });
    this.PubNub.subscribe({
      channel: 'ReactChat',
      message: (message) => this.setState({
        history: this.state.history.concat(message),
      }),
    });
  }

  render() {
    const sendMessage = (message) => {
      this.PubNub.publish({
        channel: 'ReactChat',
        message: message,
      });
    };
    return (
      <div>
        <ChatHistory history={this.state.history} />
        <ChatInput userID={this.state.userID} sendMessage={sendMessage} />
      </div>
    );
  }
}

export default App;
