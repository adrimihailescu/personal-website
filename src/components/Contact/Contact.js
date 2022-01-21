import React from "react"
import {
  ContactWrapper,
  FormWrapper,
  Button,
  Input,
  Textarea,
  Label,
  Title,
} from "./Contact.style"
import { graphql, useStaticQuery } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { nanoid } from "nanoid"

const pageQuery = graphql`
  {
    allContentfulContactPage {
      nodes {
        contactForm {
          raw
        }
        subtitle
        title
        description
      }
    }

    allHubspotForm {
      nodes {
        portalId
        name
        submitText
        redirect
        formFieldGroups {
          fields {
            label
            name
            required
            fieldType
          }
        }
      }
    }
  }
`

const Contact = () => {
  const data = useStaticQuery(pageQuery)
  const { title, subtitle, description } =
    data.allContentfulContactPage.nodes[0]

  const {
    portalId,
    name: formName,
    submitText: formSubmitText,
    formFieldGroups,
  } = data.allHubspotForm.nodes[0]

  return (
    <ContactWrapper>
      <Title>{title}</Title>
      <h3>{subtitle}</h3>
      <p>{description}</p>
      <FormWrapper>
        <form>
          {formFieldGroups.map(field => {
            const fields = field.fields[0]
            const isRequired = fields.required
            switch (fields.fieldType) {
              case "textarea":
                return (
                  <Label key={nanoid()}>
                    <span>
                      {fields.label}
                      {isRequired ? "*" : null}
                    </span>
                    <Textarea
                      type={fields.fieldType}
                      required
                      name={fields.name}
                      required={isRequired}
                    />
                  </Label>
                )

              default:
                return (
                  <Label key={nanoid()}>
                    <span>
                      {fields.label}
                      {isRequired ? "*" : null}
                    </span>
                    <Input
                      type={fields.fieldType}
                      required
                      name={fields.name}
                      required={isRequired}
                    />
                  </Label>
                )
            }
          })}
          <Button type="submit">{formSubmitText}</Button>
        </form>
      </FormWrapper>
    </ContactWrapper>
  )
}

export default Contact
