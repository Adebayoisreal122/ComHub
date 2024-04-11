import React from 'react'

const Loader = () => {
  return (
    <div style={styles.loader}>
        <div style={styles.spinner}></div>
    Loading...
  </div>
  )
}


const styles = {
    loader: {
      position: 'fixed',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      zIndex: 0,
      background: '#fff',
      padding: '100vh',
      borderRadius: '5px',
      boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)'
    },
    spinner: {
        width: '50px',
        height: '50px',
        borderTop: '3px solid #ccc',
        borderRight: '3px solid transparent',
        borderRadius: '50%',
        animation: 'spin 1s linear infinite' // Add the spin animation here
      },
      '@keyframes spin': {
        from: {
          transform: 'rotate(0deg)'
        },
        to: {
          transform: 'rotate(360deg)'
        }
      }
  };

export default Loader
