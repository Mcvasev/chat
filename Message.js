import React, {PureComponent} from 'react';
class Message extends PureComponent {
    render() {
        return (            
              <div>
                  {this.props.message.map((item) => <div><p>{item.name}</p><p>{item.text}</p></div>)}
              </div>            
        )
    }
}
export default Message;