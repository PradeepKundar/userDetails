import React from "react";
import { createPortal } from "react-dom";
import Button from "./Button";
import Card from "./Card";
import css from "./ErrorModal.module.css";

const Backdrop = (props) => {
  return <div className={css.backdrop} onClick={props.onConfirm} />;
};

const Overlay = (props) => {
  return (
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
  );
};

const ErrorModal = (props) => {
  return (
    <React.Fragment>
      {createPortal(
        <Backdrop onConfirm={props.onConfirm} />,
        document.getElementById("backdrop-root")
      )}

      {createPortal(
        <Overlay
          onConfirm={props.onConfirm}
          title={props.title}
          message={props.message}
        />,
        document.getElementById("overlay-root")
      )}
    </React.Fragment>
  );
};

export default ErrorModal;
