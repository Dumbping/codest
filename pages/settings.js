// pages/settings.js
export default function Settings() {
    return (
      <div style={styles.container}>
        <h1 style={styles.heading}>Settings</h1>
        <div style={styles.settings}>
          <p><strong>Change Password</strong></p>
          <input type="password" placeholder="New Password" style={styles.input} />
          <button style={styles.button}>Update</button>
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
    settings: {
      backgroundColor: 'white',
      padding: '20px',
      borderRadius: '10px',
      boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    },
    input: {
      margin: '10px 0',
      padding: '10px',
      width: '300px',
      borderRadius: '5px',
      border: '1px solid #ddd',
    },
    button: {
      padding: '10px',
      width: '100%',
      border: 'none',
      borderRadius: '5px',
      backgroundColor: '#0070f3',
      color: 'white',
      cursor: 'pointer',
    },
  };
  