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
import { graphql, useStaticQuery } from "gatsby"

const ContactQuery = graphql`
  {
    allContentfulContactPage {
      nodes {
        subtitle
        title
        description
      }
    }
  }
`

const Contact = () => {
  const data = useStaticQuery(ContactQuery)
  console.log(data)
  const { title, subtitle, description } =
    data.allContentfulContactPage.nodes[0]
  return (
    <ContactWrapper>
      <Title>{title}</Title>
      <h3>{subtitle}</h3>
      <p>{description}</p>
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
