import React from "react";

const Contact = () => {
  return (
    <section className="contact d-flex align-items-start h-100">
      <h3 className=" vertical-text">CONTACT ME</h3>
      <div className="w-100 h-100">
        <h2 className="title">GET IN TOUCH</h2>
        <form className="w-10 d-flex flex-column">
          <div className="mail-name d-flex justify-content-between">
            <input type="text" className="w-50" placeholder="Name*" />
            <input
              type="email"
              name="email"
              className="w-50"
              id="email"
              placeholder="Email*"
            />
          </div>
          <input type="text" placeholder="Subject(Optional)" />
          <textarea
            name="message"
            cols="30"
            rows="10"
            placeholder="Message*"
          ></textarea>
          <button className="black-btn" type="submit">
            Post Comment
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
