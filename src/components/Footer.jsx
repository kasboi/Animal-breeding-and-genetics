import React from 'react'

export default function Footer() {
    const year = new Date()
    const currentYear=year.getFullYear()
  return (
    <>
    <footer style={{textAlign:"center",margin:"20px auto 0",width:"90%",fontSize:"13px"}}>
        Department of Animal Breeding And Genetics {currentYear}
    </footer>
    </>

  )
}
