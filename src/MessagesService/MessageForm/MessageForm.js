import React, {Component} from 'react';
import styles from './MessageForm.modules.css';
import Header from "./Header";

class MessageForm extends Component {
  render() {
    return (
      <div className={styles.MessageForm}>
        <Header>Отправлялка сообщений</Header>
      </div>
    );
  }
}

export default MessageForm;