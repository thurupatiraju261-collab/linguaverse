import { useState } from 'react';

const initialUsers = [
  { id: 1, name: 'Priya Sharma', email: 'priya.s@example.com', role: 'Learner', joined: 'Jul 2, 2026', status: 'Active' },
  { id: 2, name: 'Rahul Kumar', email: 'rahul.k@example.com', role: 'Learner', joined: 'Jun 28, 2026', status: 'Active' },
  { id: 3, name: 'Maria Garcia', email: 'm.garcia@example.com', role: 'Premium', joined: 'May 15, 2026', status: 'Active' },
  { id: 4, name: 'John Smith', email: 'john.s@example.com', role: 'Learner', joined: 'Apr 10, 2026', status: 'Inactive' },
  { id: 5, name: 'LinguaAdmin', email: 'admin@linguaverse.com', role: 'Admin', joined: 'Jan 1, 2026', status: 'Active' }
];

export default function Users() {
  const [users, setUsers] = useState(initialUsers);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredUsers = users.filter(user => 
    user.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const toggleStatus = (id) => {
    setUsers(users.map(u => {
      if (u.id === id) {
        return { ...u, status: u.status === 'Active' ? 'Inactive' : 'Active' };
      }
      return u;
    }));
  };

  const handleDelete = (id) => {
    if (window.confirm('Delete this user account permanently?')) {
      setUsers(users.filter(u => u.id !== id));
    }
  };

  const handleView = (id) => {
    alert(`Viewing profile for user ID: ${id}`);
  };

  return (
    <>
      <div className="admin-page-header admin-fade-in">
        <div>
          <h2 style={{ fontSize: '1.8rem', marginBottom: '5px' }}>Users</h2>
          <p style={{ color: 'var(--text-muted)' }}>Manage learners, admins, and subscriptions.</p>
        </div>
        <button className="btn btn-primary" onClick={() => alert('Invite User modal opened')}>
          <i className="fa-solid fa-user-plus"></i> Invite User
        </button>
      </div>

      <div className="admin-panel admin-fade-in">
        <div className="admin-panel-header">
          <div className="admin-search" style={{ maxWidth: '300px' }}>
            <i className="fa-solid fa-search"></i>
            <input 
              type="text" 
              placeholder="Search by name or email..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        <div className="admin-table-wrap">
          <table className="admin-table">
            <thead>
              <tr>
                <th>User</th>
                <th>Role</th>
                <th>Joined Date</th>
                <th>Status</th>
                <th style={{ textAlign: 'right' }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredUsers.length > 0 ? (
                filteredUsers.map(user => (
                  <tr key={user.id}>
                    <td>
                      <div className="admin-table-user" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <div className="admin-table-avatar" style={{ 
                          width: '32px', height: '32px', borderRadius: '50%', 
                          background: 'var(--gradient-primary)', color: '#fff', 
                          display: 'flex', alignItems: 'center', justifyContent: 'center',
                          fontSize: '0.8rem', fontWeight: 'bold'
                        }}>
                          {user.name.split(' ').map(n => n[0]).join('')}
                        </div>
                        <div>
                          <div style={{ fontWeight: 600 }}>{user.name}</div>
                          <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{user.email}</div>
                        </div>
                      </div>
                    </td>
                    <td><span className="badge">{user.role}</span></td>
                    <td>{user.joined}</td>
                    <td>
                      <span className={`admin-status-pill ${user.status === 'Active' ? 'read' : 'new'}`} style={{ cursor: 'pointer' }} onClick={() => toggleStatus(user.id)}>
                        {user.status}
                      </span>
                    </td>
                    <td style={{ textAlign: 'right' }}>
                      <button className="btn-icon" onClick={() => handleView(user.id)} style={{ border: 'none', background: 'none', color: 'var(--text-color)', cursor: 'pointer', margin: '0 5px' }} aria-label="View user">
                        <i className="fa-solid fa-eye"></i>
                      </button>
                      <button className="btn-icon" onClick={() => handleDelete(user.id)} style={{ border: 'none', background: 'none', color: 'var(--text-danger)', cursor: 'pointer', margin: '0 5px' }} aria-label="Delete user">
                        <i className="fa-solid fa-trash"></i>
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5" style={{ textAlign: 'center', padding: '30px' }}>
                    No users found matching "{searchTerm}".
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
