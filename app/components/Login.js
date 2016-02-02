import React from 'react';
import mui from 'material-ui';
import Actions from '../actions';

var { Card, CardText, RaisedButton } = mui;

class Login extends React.Component {
  onClick() {
    Actions.login();
  }

  render() {
    return (
      <Card style={{
        'maxWidth': '800px',
        'margin': '30px auto',
        'padding': 50
      }}>
        <CardText style={{
          'textAlign': 'center'
        }}>
        To start chatting away, please login with your google account.
        </CardText>
        <RaisedButton
          onClick={this.onClick.bind(this)}
          label="Login with Google"
          style={{
            'display': 'block',
          }}>
        </RaisedButton>
      </Card>
    );
  }
}

export default Login;
