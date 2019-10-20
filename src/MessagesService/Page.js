import React from 'react';
import MessageForm from "./MessageForm/MessageForm";
import styles from './Page.module.css';

function MessagesServicePage() {
  return (
    <div className="MessagesServicePage">
      <div className={styles.Wrapper}>
        <header>
          PageHeader -logo place
        </header>
        <MessageForm />
      </div>
    </div>
  );
}

export default MessagesServicePage;
