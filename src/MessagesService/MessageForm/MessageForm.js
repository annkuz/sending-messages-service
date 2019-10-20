import React, {Component} from 'react';
import styles from './MessageForm.module.css';
import Header from "./Header";
import Form from "../../common/form/Form";
import TextField from "../../common/form/TextField";
import Group from "../../common/form/Group";
import TextArea from "../../common/form/TextArea";
import Button from "../../common/button/Button";

class MessageForm extends Component {
  render() {
    return (
      <div className={styles.MessageForm}>
        <Header>Отправлялка сообщений</Header>
        <Form>
          <Group>
            <TextField
              field='nameFrom'
              label='От кого'
              placeholder='Имя'
            />
            <TextField
              field='emailFrom'
              type='email'
              placeholder='Email'
            />
          </Group>
          <Group>
            <TextField
              field='nameTo'
              label='Кому'
              placeholder='Имя'
            />
            <TextField
              field='emailTo'
              type='email'
              placeholder='Email'
            />
          </Group>
          <TextField
            field='subject'
            label='Тема письма'
            placeholder='Тема'
          />
          <TextArea
            field='message'
            label='Сообщение'
            placeholder='Сообщение'
          />
          <Button
            title='Отправить'
            isActive={false}
          />
        </Form>
      </div>
    );
  }
}

export default MessageForm;