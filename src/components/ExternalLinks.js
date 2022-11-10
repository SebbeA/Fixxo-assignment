import React from 'react'

//* A component for facebook, Instagram, Twitter, Google and LinkedIn so we can go to other websites. Copy from Hans
// * Added prop
const ExternalLinks = ({link, icon}) => {
  return (
    <a href={link} target="_blank">
        <i className={icon}></i>
    </a>
  )
}

export default ExternalLinks