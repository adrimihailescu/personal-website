import React, { useState } from "react"
import { Transition } from "react-transition-group"

import {
  SectionPanelTitle,
  SectionPanelSubtitle,
  SectionContent,
} from "../../../sharedStyles"
import {
  Form,
  ParagraphPanelContact,
  Label,
  Input,
  Textarea,
  ButtonPanelContact,
} from "./Contact.style"

const Contact = ({ isTextVertical, animateIn, data }) => {
  const { title, subtitle, description } = data.page
  const {
    portalId,
    name: formName,
    submitText: formSubmitText,
    formFieldGroups,
    inlineMessage: formSubmitSuccess,
  } = data.form

  const [formData, setFormData] = useState({})
  const [formsSubmitStatus, setFormsSubmitStatus] = useState({
    success: false,
    fail: false,
  })

  const handleSubmit = async e => {
    e.preventDefault()
    const hubSpotURL = `${process.env.HUBSPOT_ENDPOINT}/${process.env.HUBSPOT_PORTAL_ID}/${process.env.HUBSPOT_FORM_ID}`

    const formDataFields = Object.keys(formData).map(key => ({
      name: key,
      value: formData[key],
    }))

    const data = {
      fields: formDataFields,
      context: {
        pageUri: process.env.HUBSPOT_FORM_PAGE_URI,
        pageName: process.env.HUBSPOT_PAGE_NAME,
      },
    }

    const response = await fetch(hubSpotURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })

    if (response.status === 200 && response.ok) {
      setFormsSubmitStatus({ fail: false, success: true })
    }

    if (response.status === 403 || response.status === 404 || !response.ok) {
      setFormsSubmitStatus({ fail: true, success: false })
    }

    setFormData({})
  }

  const handleChange = e => {
    e.preventDefault()
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <Transition in={animateIn} timeout={500}>
      {state => (
        <SectionContent state={state}>
          <SectionPanelTitle isTextVertical={false}>{title}</SectionPanelTitle>
          <SectionPanelSubtitle>{subtitle}</SectionPanelSubtitle>
          <h4>{description}</h4>
          <Form onSubmit={handleSubmit}>
            {formFieldGroups.map(field => {
              const fields = field.fields[0]
              const isRequired = fields.required

              if (!fields.enabled) return

              switch (fields.fieldType) {
                case "textarea":
                  return (
                    <Label key={`form-${fields.name}`}>
                      <span>
                        {fields.label}
                        {isRequired ? "*" : null}
                      </span>
                      <Textarea
                        type={fields.fieldType}
                        required
                        name={fields.name}
                        required={isRequired}
                        onChange={handleChange}
                        value={formData[fields.name] || ""}
                        placeholder={fields.placeholder}
                      />
                    </Label>
                  )

                default:
                  return (
                    <Label key={`form-${fields.name}`}>
                      <span>
                        {fields.label}
                        {isRequired ? "*" : null}
                      </span>
                      <Input
                        type={fields.fieldType}
                        required
                        name={fields.name}
                        required={isRequired}
                        onChange={handleChange}
                        value={formData[fields.name] || ""}
                        placeholder={fields.placeholder}
                      />
                    </Label>
                  )
              }
            })}
            <ButtonPanelContact type="submit">
              {formSubmitText}
            </ButtonPanelContact>
          </Form>
          {formsSubmitStatus.success ? (
            <p style={{ color: "lime" }}>{formSubmitSuccess}</p>
          ) : null}
          {formsSubmitStatus.fail ? (
            <p style={{ color: "red" }}>
              Error submiting form, please try again later
            </p>
          ) : null}
        </SectionContent>
      )}
    </Transition>
  )
}

export default Contact
