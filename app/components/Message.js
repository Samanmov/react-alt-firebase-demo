import React from 'react';
import mui from 'material-ui';

var {ListItem, Avatar} = mui;
class Message extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ListItem
        leftAvatar={<Avatar src="http://wiseheartdesign.com/images/articles/default-avatar.png"/>} >
        {this.props.message}
      </ListItem>
    );
  }
}

export default Message;
