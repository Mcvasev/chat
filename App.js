import React, { PureComponent } from 'react';
import Users from './Users';
import Message from './Messages';

class App extends PureComponent {
  state = {
    arrChat: [],
    message: [],
    chatID: '',
  }
  componentDidMount() {
    this.linkData().then((data) => { this.setState({ arrChat: data }); console.log(this.state.arrChat) })
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.chatID !== this.state.chatID) {
      this.linkData().then((data) => {
        console.log(data)
        this.setState({ message: data })
      })
    }
    console.log(this.state.message)
  }
  linkData = () => {
    let url = '';
    if (this.state.chatID === '') {
      url = `https://60895abe8c8043001757e9c6.mockapi.io/chats`;
    } else {
      url = `https://60895abe8c8043001757e9c6.mockapi.io/chats/${this.state.chatID}/messages`
      console.log(url)
    }
    return fetch(url)
      .then((response) => response.json())
  }
  onClick = (id) => {
    this.setState({ chatID: id })
  }
  render() {
    return (
      <>
        {this.state.arrChat.map((item) => <Users {...item} onClick={this.onClick} />)}
        <Message message={this.state.message} />
      </>
    )
  }
}

export default App;
