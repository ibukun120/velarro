import React from 'react'
interface CTAprops{
    clName: string,
    text: string,
}
const CtaButton = ({clName, text}: CTAprops) => {
  return (
    <div className={`${clName} `}>{text}</div>
  )
}

export default CtaButton