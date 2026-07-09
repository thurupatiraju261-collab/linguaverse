import { useState } from 'react';

const initialLanguages = [
  { id: 1, name: 'English', nativeName: 'English', learners: '9,200', status: 'Active' },
  { id: 2, name: 'Spanish', nativeName: 'Español', learners: '7,800', status: 'Active' },
  { id: 3, name: 'French', nativeName: 'Français', learners: '5,900', status: 'Active' },
  { id: 4, name: 'Japanese', nativeName: '日本語', learners: '4,300', status: 'Draft' },
  { id: 5, name: 'Hindi', nativeName: 'हिन्दी', learners: '6,400', status: 'Active' }
];

export default function Languages() {
  const [languages, setLanguages] = useState(initialLanguages);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredLanguages = languages.filter(lang => 
    lang.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    lang.nativeName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this language?')) {
      setLanguages(languages.filter(l => l.id !== id));
    }
  };

  const handleEdit = (id) => {
    alert(`Edit language ID: ${id}`);
  };

  const handleAdd = () => {
    const newLang = {
      id: Date.now(),
      name: 'New Language',
      nativeName: 'Native Name',
      learners: '0',
      status: 'Draft'
    };
    setLanguages([...languages, newLang]);
  };

  return (
    <>
      <div className="admin-page-header admin-fade-in">
        <div>
          <h2 style={{ fontSize: '1.8rem', marginBottom: '5px' }}>Languages</h2>
          <p style={{ color: 'var(--text-muted)' }}>Manage course languages and their content.</p>
        </div>
        <button className="btn btn-primary" onClick={handleAdd}>
          <i className="fa-solid fa-plus"></i> Add Language
        </button>
      </div>

      <div className="admin-panel admin-fade-in">
        <div className="admin-panel-header" style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '15px' }}>
          <div className="admin-search" style={{ maxWidth: '300px' }}>
            <i className="fa-solid fa-search"></i>
            <input 
              type="text" 
              placeholder="Search languages..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div style={{ display: 'flex', gap: '10px' }}>
            <select style={{ padding: '8px 12px', border: '1px solid var(--border-color)', borderRadius: '8px', background: 'var(--bg-alt)' }}>
              <option>All Status</option>
              <option>Active</option>
              <option>Draft</option>
            </select>
          </div>
        </div>

        <div className="admin-table-wrap">
          <table className="admin-table">
            <thead>
              <tr>
                <th>Language</th>
                <th>Native Name</th>
                <th>Total Learners</th>
                <th>Status</th>
                <th style={{ textAlign: 'right' }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredLanguages.length > 0 ? (
                filteredLanguages.map(lang => (
                  <tr key={lang.id}>
                    <td style={{ fontWeight: 600 }}>{lang.name}</td>
                    <td style={{ color: 'var(--text-muted)' }}>{lang.nativeName}</td>
                    <td>{lang.learners}</td>
                    <td>
                      <span className={`admin-status-pill ${lang.status === 'Active' ? 'read' : 'new'}`}>
                        {lang.status}
                      </span>
                    </td>
                    <td style={{ textAlign: 'right' }}>
                      <button className="btn-icon" onClick={() => handleEdit(lang.id)} style={{ border: 'none', background: 'none', color: 'var(--text-color)', cursor: 'pointer', margin: '0 5px' }} aria-label="Edit language">
                        <i className="fa-solid fa-pen"></i>
                      </button>
                      <button className="btn-icon" onClick={() => handleDelete(lang.id)} style={{ border: 'none', background: 'none', color: 'var(--text-danger)', cursor: 'pointer', margin: '0 5px' }} aria-label="Delete language">
                        <i className="fa-solid fa-trash"></i>
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5" style={{ textAlign: 'center', padding: '30px' }}>
                    No languages found matching "{searchTerm}".
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
