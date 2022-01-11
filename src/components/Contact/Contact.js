import React from "react"
import { ContactWrapper, FormWrapper } from "./style"

const Contact = () => {
  return (
    <ContactWrapper>
      <h1>Contact</h1>
      <h3>Want To Get In Touch?</h3>
      <FormWrapper>
        <form>
          <div>
            <label>
              <span>Your email</span>
              <input type="email" required name="email" />
            </label>
          </div>
          <div>
            <label>
              <span>Your message</span>
              <textarea required name="message" />
            </label>
          </div>
          <button type="submit">Send</button>
        </form>
      </FormWrapper>
    </ContactWrapper>
  )
}

export default Contact
