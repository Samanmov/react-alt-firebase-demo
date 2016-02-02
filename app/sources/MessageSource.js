import Actions from '../actions';
import Firebase from 'firebase';

let firebaseRef = null;

let MessageSource = {
  getMessages: {
    remote(state) {
      if (firebaseRef) {
        firebaseRef.off();
      }
      firebaseRef = new Firebase('https://react-stack-tut.firebaseio.com/messages/' + state.selectedChannel.key);
      return new Promise((resolve, reject)=> {
        firebaseRef.once('value', (data)=> {
          var messages = data.val();
          resolve(messages);
        });
      });
    },
    success: Actions.messagesReceived,
    error: Actions.messagesFailed
  }
}

export default MessageSource;
