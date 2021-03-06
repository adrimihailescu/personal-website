import React, { useState } from "react"

import { SectionPanelTitle, SectionPanelSubtitle } from "../../../sharedStyles"
import {
  Form,
  Label,
  Input,
  Textarea,
  ButtonPanelContact,
} from "./Contact.style"

const Contact = ({ isTextVertical, animateIn, data }) => {
  const { title, subtitle, description } = data.page
  const {
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
    const hubSpotURL = `${process.env.GATSBY_HUBSPOT_ENDPOINT}/${process.env.GATSBY_HUBSPOT_PORTAL_ID}/${process.env.GATSBY_HUBSPOT_FORM_ID}`

    const formDataFields = Object.keys(formData).map(key => ({
      name: key,
      value: formData[key],
    }))

    const data = {
      fields: formDataFields,
      context: {
        pageUri: process.env.GATSBY_HUBSPOT_FORM_PAGE_URI,
        pageName: process.env.GATSBY_HUBSPOT_PAGE_NAME,
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
      setFormData({})

      setTimeout(() => {
        setFormsSubmitStatus({ fail: false, success: false })
      }, 5000)
    }

    if (response.status === 403 || response.status === 404 || !response.ok) {
      setFormsSubmitStatus({ fail: true, success: false })
    }
  }

  const handleChange = e => {
    e.preventDefault()
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <>
      <SectionPanelTitle isTextVertical={false}>{title}</SectionPanelTitle>
      <SectionPanelSubtitle>{subtitle}</SectionPanelSubtitle>
      <h4>{description}</h4>
      <Form onSubmit={handleSubmit}>
        {formFieldGroups.map(field => {
          const fields = field.fields[0]
          const isRequired = fields.required

          if (!fields.enabled) return null

          switch (fields.fieldType) {
            case "textarea":
              return (
                <Label key={`form-${fields.name}`}>
                  <span className="form-span">
                    {fields.label}
                    {isRequired ? "*" : null}
                  </span>
                  <Textarea
                    type={fields.fieldType}
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
                  <span className="form-span">
                    {fields.label}
                    {isRequired ? "*" : null}
                  </span>
                  <Input
                    type={fields.fieldType}
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
        <ButtonPanelContact type="submit">{formSubmitText}</ButtonPanelContact>
      </Form>
      {formsSubmitStatus.success ? (
        <p style={{ color: "lime" }}>{formSubmitSuccess}</p>
      ) : null}
      {formsSubmitStatus.fail ? (
        <p style={{ color: "red" }}>
          Error submiting form, please try again later
        </p>
      ) : null}
    </>
  )
}

export default Contact
