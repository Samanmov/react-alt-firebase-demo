import React from 'react';
import MessageList from './MessageList';
import ChannelList from './ChannelList';
import MessageBox from './MessageBox';
import Login from './Login';
import mui from 'material-ui';
import connectToStores from 'alt/utils/connectToStores';
import ChatStore from '../stores/ChatStore';

var ThemeManager = new mui.Styles.ThemeManager(),
    Colors = mui.Styles.Colors,
    AppBar = mui.AppBar;

@connectToStores
class App extends React.Component {
  constructor() {
    super();
    ThemeManager.setPalette({
      primary1Color: Colors.blue500,
      primary2Color: Colors.blue700,
      primary3Color: Colors.blue100,
      accent1Color: Colors.pink400
    })
  }

  static getStores() {
    return [ChatStore];
  }

  static getPropsFromStores() {
    return ChatStore.getState();
  }

  static childContextTypes = {
    muiTheme: React.PropTypes.object
  }

  getChildContext() {
    return {
      muiTheme: ThemeManager.getCurrentTheme()
    }
  }

  render() {
    //var view = <Login />
    // if(this.props.user){
    /*var view = (
        <div style={{
          display: 'flex',
          flexFlow: 'row wrap',
          maxWidth: 1200,
          width: '100%',
          margin: '30px auto 30px'
        }}>
          <ChannelList />
          <MessageList />
        </div>
        <MessageBox />
    );*/


    return (
      <div>
        <AppBar title="Awesome Chat App" />
        <div style={{
          display: 'flex',
          flexFlow: 'row wrap',
          maxWidth: 1200,
          width: '100%',
          margin: '30px auto 30px'
        }}>
          <ChannelList />
          <MessageList />
        </div>
        <MessageBox />
      </div>
    );
  }
}

export default App;
