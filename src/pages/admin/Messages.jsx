import { useState } from 'react';

const initialMessages = [
  { id: 1, sender: 'Priya Sharma', initial: 'PS', subject: 'Question about Pro plan', date: 'Jul 7, 2026', read: false },
  { id: 2, sender: 'Rahul Kumar', initial: 'RK', subject: "Can't access Japanese lessons", date: 'Jul 6, 2026', read: false },
  { id: 3, sender: 'Maria Garcia', initial: 'MG', subject: 'Partnership inquiry', date: 'Jul 5, 2026', read: true },
  { id: 4, sender: 'Arjun Telugu', initial: 'AT', subject: 'Feedback on Telugu course', date: 'Jul 4, 2026', read: true }
];

export default function Messages() {
  const [messages, setMessages] = useState(initialMessages);

  const toggleRead = (id) => {
    setMessages(messages.map(m => {
      if (m.id === id) {
        return { ...m, read: !m.read };
      }
      return m;
    }));
  };

  const handleDelete = (id) => {
    if (window.confirm('Move message to trash?')) {
      setMessages(messages.filter(m => m.id !== id));
    }
  };

  const handleReply = (sender) => {
    alert(`Opening reply composer to ${sender}`);
  };

  return (
    <>
      <div className="admin-page-header admin-fade-in">
        <div>
          <h2 style={{ fontSize: '1.8rem', marginBottom: '5px' }}>Messages</h2>
          <p style={{ color: 'var(--text-muted)' }}>Respond to learner inquiries and contact form submissions.</p>
        </div>
      </div>

      <div className="admin-panel admin-fade-in">
        <div className="admin-panel-header">
          <h3>Inbox</h3>
          <span className="badge"><i className="fa-solid fa-envelope"></i> {messages.filter(m => !m.read).length} Unread</span>
        </div>

        <div className="admin-table-wrap">
          <table className="admin-table">
            <thead>
              <tr>
                <th>Sender</th>
                <th>Subject</th>
                <th>Date</th>
                <th>Status</th>
                <th style={{ textAlign: 'right' }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {messages.length > 0 ? (
                messages.map(msg => (
                  <tr key={msg.id} style={{ fontWeight: msg.read ? 'normal' : 'bold' }}>
                    <td>
                      <div className="admin-table-user">
                        <span className="admin-table-avatar">{msg.initial}</span> {msg.sender}
                      </div>
                    </td>
                    <td>{msg.subject}</td>
                    <td>{msg.date}</td>
                    <td>
                      <span 
                        className={`admin-status-pill ${msg.read ? 'read' : 'new'}`} 
                        onClick={() => toggleRead(msg.id)}
                        style={{ cursor: 'pointer' }}
                        title="Toggle read status"
                      >
                        {msg.read ? 'Read' : 'New'}
                      </span>
                    </td>
                    <td style={{ textAlign: 'right' }}>
                      <button className="btn-icon" onClick={() => handleReply(msg.sender)} style={{ border: 'none', background: 'none', color: 'var(--text-color)', cursor: 'pointer', margin: '0 5px' }} title="Reply" aria-label="Reply to message">
                        <i className="fa-solid fa-reply"></i>
                      </button>
                      <button className="btn-icon" onClick={() => handleDelete(msg.id)} style={{ border: 'none', background: 'none', color: 'var(--text-danger)', cursor: 'pointer', margin: '0 5px' }} title="Delete" aria-label="Delete message">
                        <i className="fa-solid fa-trash"></i>
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5" style={{ textAlign: 'center', padding: '30px' }}>
                    Inbox is empty.
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
