import React, { memo } from 'react'

const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="37" height="37" viewBox="0 0 37 37">
    <g fill="none" opacity=".44">
      <path
        fill="#000"
        fillOpacity="0"
        stroke="#FFF"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.075"
        d="M35 17.5C35 27.165 27.165 35 17.5 35S0 27.165 0 17.5 7.835 0 17.5 0 35 7.835 35 17.5z"
        transform="translate(1 1)"
      />
      <g fill="#FFF">
        <path
          d="M14.586 0H5.414C2.429 0 0 2.429 0 5.414v9.172C0 17.571 2.429 20 5.414 20h9.172C17.571 20 20 17.571 20 14.586V5.414C20 2.429 17.571 0 14.586 0zM10 15.469c-3.015 0-5.469-2.454-5.469-5.469S6.985 4.531 10 4.531 15.469 6.985 15.469 10 13.015 15.469 10 15.469zm5.6-9.648c-.892 0-1.617-.725-1.617-1.616 0-.89.725-1.616 1.616-1.616.891 0 1.616.725 1.616 1.616 0 .891-.725 1.616-1.616 1.616z"
          transform="translate(1 1) translate(8 7)"
        />
        <path
          d="M10 5.704C7.631 5.704 5.704 7.63 5.704 10S7.63 14.296 10 14.296 14.296 12.37 14.296 10 12.37 5.704 10 5.704zM15.6 3.762c-.245 0-.444.199-.444.443 0 .245.199.444.443.444.245 0 .444-.2.444-.444s-.199-.443-.444-.443z"
          transform="translate(1 1) translate(8 7)"
        />
      </g>
    </g>
  </svg>
)

export default memo(InstagramIcon)
