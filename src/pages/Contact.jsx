import React, { useRef, useEffect } from "react";
import Container from "../components/Container";
import { useForm, ValidationError } from "@formspree/react";
import styles from "./Contact.module.css";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

function Contact() {
  const [state, handleSubmit] = useForm("xwkgqkpa");
  const formRef = useRef(null);

  useEffect(() => {
    if (state.submitting) {
      toast.info("Submitting ....");
    }
  }, [state.submitting]);

  useEffect(() => {
    if (state.succeeded) {
      toast.success("Thanks for messaging");
      formRef.current.reset();
    }
  }, [state.succeeded]);

  return (
    <Container>
      <form ref={formRef} onSubmit={handleSubmit} className={styles.form}>
        <h1>Let's Talk!! 🤝</h1>
        <div className={styles.outerDiv}>
          <div className={styles.innerDiv}>
            <label htmlFor="name">NAME</label>
            <input
              type="text"
              placeholder="Your Name"
              name="name"
              id="name"
              required
            />
          </div>
          <div className={styles.innerDiv}>
            <label htmlFor="email">EMAIL</label>
            <input
              type="email"
              placeholder="Your Email"
              name="email"
              id="email"
              required
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>
        </div>
        <div className={styles.textarea}>
          <label htmlFor="message">MESSAGE</label>
          <textarea
            name="message"
            id="message"
            cols="30"
            placeholder="Your message"
          ></textarea>
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
        </div>
        <button type="submit" disabled={state.submitting}>
          just send
        </button>
        <div className={styles.otherLinks}>
          <Link
            to="https://www.linkedin.com/in/anjali-0352b1248/"
            target="_blank"
            className={styles.linkedin}
          >
            Connect on LinkedIn{" "}
          </Link>
          <br />
          <Link
            to="https://twitter.com/codecwriter"
            target="_blank"
            className={styles.twitter}
          >
            Connect on Twitter{" "}
          </Link>
          <br />
        </div>
      </form>
    </Container>
  );
}

export default Contact;
