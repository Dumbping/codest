// pages/profile.js
export default function Profile() {
    return (
      <div style={styles.container}>
        <h1 style={styles.heading}>User Profile</h1>
        <div style={styles.info}>
          <p><strong>Name:</strong> John Doe</p>
          <p><strong>Email:</strong> john.doe@example.com</p>
          <p><strong>Account Number:</strong> 123456789</p>
        </div>
      </div>
    );
  }
  
  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      height: '100vh',
      backgroundColor: '#f4f4f4',
      padding: '20px',
    },
    heading: {
      marginBottom: '20px',
    },
    info: {
      backgroundColor: 'white',
      padding: '20px',
      borderRadius: '10px',
      boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    },
  };
  