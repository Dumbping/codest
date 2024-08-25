// pages/transfer.js
import { useState } from 'react';

export default function Transfer() {
  const [amount, setAmount] = useState('');
  const [recipient, setRecipient] = useState('');

  const handleTransfer = () => {
    // Simulate transfer
    alert(`Transferred $${amount} to ${recipient}`);
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Transfer Money</h1>
      <input
        type="text"
        placeholder="Recipient"
        value={recipient}
        onChange={(e) => setRecipient(e.target.value)}
        style={styles.input}
      />
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        style={styles.input}
      />
      <button onClick={handleTransfer} style={styles.button}>Transfer</button>
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
