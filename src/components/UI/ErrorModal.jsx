import React from "react";
import Button from "./Button";
import Card from "./Card";
import css from "./ErrorModal.module.css";

const ErrorModal = (props) => {
  return (
    <div>
      <div className={css.backdrop} onClick={props.onConfirm} />
      <Card className={css.modal}>
        <header className={css.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={css.content}>
          <p>{props.message}</p>
        </div>
        <footer className={css.actions}>
          <Button onClick={props.onConfirm}>Okay</Button>
        </footer>
      </Card>
    </div>
  );
};

export default ErrorModal;
