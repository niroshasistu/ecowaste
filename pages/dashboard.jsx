import React, { useEffect, useState } from 'react';

const Dashboard = () => {
  const [pickups, setPickups] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPickups = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/pickups');
        const data = await response.json();
        setPickups(data);
      } catch (err) {
        console.error('Error fetching pickups:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchPickups();
  }, []);

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>EcoWaste - Scheduled Pickups</h2>

      {loading ? (
        <p>Loading pickups...</p>
      ) : pickups.length === 0 ? (
        <p>No pickups scheduled yet.</p>
      ) : (
        <div style={styles.tableContainer}>
          <table style={styles.table}>
            <thead>
              <tr>
                <th style={styles.th}>Name</th>
                <th style={styles.th}>Address</th>
                <th style={styles.th}>Date</th>
                <th style={styles.th}>Waste Type</th>
              </tr>
            </thead>
            <tbody>
              {pickups.map((pickup) => (
                <tr key={pickup._id}>
                  <td style={styles.td}>{pickup.name}</td>
                  <td style={styles.td}>{pickup.address}</td>
                  <td style={styles.td}>{pickup.date}</td>
                  <td style={styles.td}>{pickup.wasteType}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

const styles = {
  container: {
    padding: '40px 20px',
    maxWidth: '1000px',
    margin: '0 auto',
  },
  heading: {
    fontSize: '2rem',
    marginBottom: '20px',
    textAlign: 'center',
    color: '#2f855a',
  },
  tableContainer: {
    overflowX: 'auto',
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
    boxShadow: '0 0 10px rgba(0,0,0,0.1)',
  },
  th: {
    backgroundColor: '#e6fffa',
    padding: '12px',
    textAlign: 'left',
    fontWeight: '600',
    color: '#2c7a7b',
    borderBottom: '2px solid #c6f6d5',
  },
  td: {
    padding: '12px',
    borderBottom: '1px solid #e2e8f0',
    backgroundColor: '#fff',
  },
};

export default Dashboard;
