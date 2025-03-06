import React from 'react'
import Link from 'next/link'

function NotFoundServicePage() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh', textAlign: 'center', color: '#333' }}>
      <h1 style={{ fontSize: '4rem', marginBottom: '1rem' }}>404</h1>
      <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Page Not Found</h2>
      <Link href="/" passHref>
        <span style={{ fontSize: '1rem', color: '#007bff', textDecoration: 'none', cursor: 'pointer' }}>Go back to Home</span>
      </Link>
     
    </div>
  )
}

export default NotFoundServicePage