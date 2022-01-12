import React from "react"
import {
  ContactWrapper,
  FormWrapper,
  Button,
  Input,
  Textarea,
  Label,
  Title,
} from "./style"

const Contact = () => {
  return (
    <ContactWrapper>
      <Title>Contact</Title>
      <h3>Want To Get In Touch?</h3>
      <FormWrapper>
        <form>
          <div>
            <Label>
              <span>Your name</span>
              <Input type="name" required name="name" placeholder="Your name" />
            </Label>
            <Label>
              <span>Your email</span>
              <Input
                type="email"
                required
                name="email"
                placeholder="Your email"
              />
            </Label>
          </div>
          <div>
            <Label>
              <span>Message</span>
              <Textarea
                placeholder="Type in your message"
                required
                name="message"
              />
            </Label>
          </div>
          <Button type="submit">Send</Button>
        </form>
      </FormWrapper>
    </ContactWrapper>
  )
}

export default Contact
