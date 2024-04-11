import React from 'react'

const Footer = () => {
    const currentfullyear = new Date().getFullYear();
  return (
    <footer>
      <p>
        &copy; {currentfullyear}
      </p>
    </footer>
  )
}

export default Footer
