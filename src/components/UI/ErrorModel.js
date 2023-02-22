import React from "react";
import ReactDOM from 'react-dom';
import Card from "./Card";
import Button from "./Button";
import styles from "./ErrorModel.module.css";

const Backdrop = (props) => {
  return (<div className={styles.backdrop} onClick={props.onConfirmError}/>);
};

const Model = (props) => {
    return (<Card className={styles.model}>
      <header className={styles.header}>
        <h2>{props.title}</h2>
      </header>
      <div className={styles.content}>
        <p>{props.message}</p>
      </div>
      <footer className={styles.actions}>
        <Button onClick={props.onConfirmError}>Okay</Button>
      </footer>
    </Card>);

};

const ErrorModel = (props) => {
  return (
    <React.Fragment>
      {/* <div className={styles.backdrop} onClick={props.onConfirmError}/>
      <Card className={styles.model}>
        <header className={styles.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={styles.content}>
          <p>{props.message}</p>
        </div>
        <footer className={styles.actions}>
          <Button onClick={props.onConfirmError}>Okay</Button>
        </footer>
      </Card> */}
      {ReactDOM.createPortal(<Backdrop onConfirmError={props.onConfirmError}/>, document.getElementById('backdrop-root'))}
      {ReactDOM.createPortal(<Model title={props.title} message={props.message} onConfirmError={props.onConfirmError}/>, document.getElementById('model-root'))}
    </React.Fragment>
  );
};

export default ErrorModel;
