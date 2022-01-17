import React from "react"
import setupTools from "../../utils/setupTools"

const ToolsList = ({ projects }) => {
  const newTools = setupTools(projects)
  return (
    <div>
      {newTools.map(tool => {
        const text = tool
        return <div>{text}</div>
      })}
    </div>
  )
}

export default ToolsList
