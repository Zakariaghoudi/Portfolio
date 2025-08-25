"use client";
import styles from "./page.module.css";
import React from "react";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
function page() {
  const form = useRef();
  const [statusMessage, setStatusMessage] = useState({
    message: "",
    type: "",
  });
  const sendEmail = (e) => {
    e.preventDefault();
    setStatusMessage({ message: "Sending...", type: "info" });
    const ServiceID = "service_qlhcjk8";
    const TemplateID = "template_te134fu";
    const PublicKey = "cV3CAqsf4QT0tb-pA";

    emailjs.sendForm(ServiceID, TemplateID, form.current, PublicKey).then(
      (result) => {
        console.log(result.text);
        setStatusMessage({
          message: "Message sent successfully!",
          type: "success",
        });
        form.current.reset();
      },
      (error) => {
        console.log(error.text);
        setStatusMessage({
          message: "Failed to send message, please try again.",
          type: "error",
        });
      }
    );
  };
  return (
    <>
      <div className={styles.contactContainer}>
        <h1 className={styles.title}>Contact Us</h1>
        <form ref={form} onSubmit={sendEmail} className={styles.contactForm}>
          <div className={styles.formGroup}>
            <label htmlFor="name" className={styles.label}>
              Name*:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className={styles.inputField}
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="email" className={styles.label}>
              Email*:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className={styles.inputField}
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="message" className={styles.label}>
              Message:
            </label>
            <textarea
              id="message"
              name="message"
              className={styles.textareaField}
              
            />
          </div>

          <button type="submit" className={styles.submitButton}>
            Submit
          </button>
        </form>
      </div>
      <div className={styles.statusMessageContainer}>
        {statusMessage.message && (
          <p
            className={`${styles.statusMessage} ${styles[statusMessage.type]}`}
          >
            {statusMessage.message}
          </p>
        )}
      </div>
    </>
  );
}

export default page;
