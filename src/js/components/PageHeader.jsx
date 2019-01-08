import React from 'react'

const PageHeader = ({ children, backgroundClassName, title }) => (
  <div className="page-header">
    <div className={`${backgroundClassName} header`}>
      <h1>{title}</h1>
    </div>
    <div className="content">{children}</div>
  </div>
)

export default PageHeader
