import React from "react";

import Button from "../Button";

import styles from "./ToastPlayground.module.css";
import ToastShelf from "../ToastShelf";
import { ToastContext } from "../ToastProvider";

const VARIANT_OPTIONS = ["notice", "warning", "success", "error"];

function ToastPlayground() {

  const {addToast, toastList} = React.useContext(ToastContext);
  React.useDebugValue(() => {
    console.log(selectedVariant);
  });
  const [selectedVariant, setSelectedVariant] = React.useState("notice");
  React.useDebugValue("Selected Message");
  const [message, setMessage] = React.useState("");
  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>

      {toastList.length > 0 && (
        <ToastShelf
         
        />
      )}

      <div className={styles.controlsWrapper}>
        <form
          onSubmit={(event) => {
            event.preventDefault();
            addToast(message, selectedVariant);
            setMessage("");
            setSelectedVariant("notice");
          }}
        >
          <div className={styles.row}>
            <label
              htmlFor="message"
              className={styles.label}
              style={{ alignSelf: "baseline" }}
            >
              Message
            </label>
            <div className={styles.inputWrapper}>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                id="message"
                className={styles.messageInput}
              />
            </div>
          </div>

          <div className={styles.row}>
            <div className={styles.label}>Variant</div>
            {VARIANT_OPTIONS.map((variant) => (
              <div
                key={variant}
                className={`${styles.inputWrapper} ${styles.radioWrapper}`}
              >
                <label htmlFor={`variant-notice-${variant}`}>
                  <input
                    id={`variant-notice-${variant}`}
                    type="radio"
                    name="variant"
                    value={variant}
                    checked={variant === selectedVariant}
                    onChange={() => {
                      setSelectedVariant(variant);
                    }}
                  />
                  {variant}
                </label>
              </div>
            ))}
          </div>

          <div className={styles.row}>
            <div className={styles.label} />
            <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
              <Button>Pop Toast!</Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ToastPlayground;
