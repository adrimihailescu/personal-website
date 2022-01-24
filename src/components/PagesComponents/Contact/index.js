import React, { useState } from "react"

import { graphql, useStaticQuery } from "gatsby"

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
            placeholder
            enabled
          }
        }
        inlineMessage
      }
    }
  }
`

const Contact = () => {
  const [formData, setFormData] = useState({})
  const [formsSubmitStatus, setFormsSubmitStatus] = useState({
    success: false,
    fail: false,
  })
  const data = useStaticQuery(pageQuery)
  const { title, subtitle, description } =
    data.allContentfulContactPage.nodes[0]

  const {
    portalId,
    name: formName,
    submitText: formSubmitText,
    formFieldGroups,
    inlineMessage: formSubmitSuccess,
  } = data.allHubspotForm.nodes[0]

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
    <div>
      <h1>{title}</h1>
      <h3>{subtitle}</h3>
      <p>{description}</p>
      <form onSubmit={handleSubmit}>
        {formFieldGroups.map(field => {
          const fields = field.fields[0]
          const isRequired = fields.required

          if (!fields.enabled) return

          switch (fields.fieldType) {
            case "textarea":
              return (
                <label key={`form-${fields.name}`}>
                  <span>
                    {fields.label}
                    {isRequired ? "*" : null}
                  </span>
                  <textarea
                    type={fields.fieldType}
                    required
                    name={fields.name}
                    required={isRequired}
                    onChange={handleChange}
                    value={formData[fields.name] || ""}
                    placeholder={fields.placeholder}
                  />
                </label>
              )

            default:
              return (
                <label key={`form-${fields.name}`}>
                  <span>
                    {fields.label}
                    {isRequired ? "*" : null}
                  </span>
                  <input
                    type={fields.fieldType}
                    required
                    name={fields.name}
                    required={isRequired}
                    onChange={handleChange}
                    value={formData[fields.name] || ""}
                    placeholder={fields.placeholder}
                  />
                </label>
              )
          }
        })}
        <button type="submit">{formSubmitText}</button>
      </form>
      {formsSubmitStatus.success ? (
        <p style={{ color: "lime" }}>{formSubmitSuccess}</p>
      ) : null}
      {formsSubmitStatus.fail ? (
        <p style={{ color: "red" }}>
          Error submiting form, please try again later
        </p>
      ) : null}
    </div>
  )
}

export default Contact