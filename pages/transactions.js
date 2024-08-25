// pages/transactions.js
export default function Transactions() {
  const transactions = [
    { id: 1, date: '2024-08-23', amount: -200, description: 'Grocery' },
    { id: 2, date: '2024-08-22', amount: 1000, description: 'Salary' },
  ];

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Transaction History</h1>
      <table style={styles.table}>
        <thead>
          <tr>
            <th>Date</th>
            <th>Amount</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map(txn => (
            <tr key={txn.id}>
              <td>{txn.date}</td>
              <td>${txn.amount}</td>
              <td>{txn.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
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
  table: {
    width: '100%',
    borderCollapse: 'collapse',
  },
  th: {
    borderBottom: '1px solid #ddd',
    padding: '10px',
  },
  td: {
    borderBottom: '1px solid #ddd',
    padding: '10px',
  },
};

  