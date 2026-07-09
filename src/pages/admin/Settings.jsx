import { useState } from 'react';

export default function Settings() {
  const [activeTab, setActiveTab] = useState('profile');
  const [formData, setFormData] = useState({
    siteName: 'LinguaVerse',
    supportEmail: 'support@linguaverse.com',
    adminName: 'Admin',
    adminEmail: 'admin@linguaverse.com'
  });

  const handleSave = (e) => {
    e.preventDefault();
    alert('Settings saved successfully!');
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div className="admin-page-header admin-fade-in">
        <div>
          <h2 style={{ fontSize: '1.8rem', marginBottom: '5px' }}>Settings</h2>
          <p style={{ color: 'var(--text-muted)' }}>Configure platform settings and your admin profile.</p>
        </div>
      </div>

      <div className="admin-panel admin-fade-in" style={{ padding: 0, overflow: 'hidden' }}>
        <div style={{ display: 'flex', borderBottom: '1px solid var(--border-color)', background: 'var(--bg-alt)' }}>
          <button 
            onClick={() => setActiveTab('profile')} 
            style={{ padding: '15px 25px', background: activeTab === 'profile' ? 'var(--bg-card)' : 'transparent', border: 'none', borderBottom: activeTab === 'profile' ? '2px solid var(--primary-color)' : '2px solid transparent', color: activeTab === 'profile' ? 'var(--primary-color)' : 'var(--text-color)', fontWeight: activeTab === 'profile' ? 600 : 400, cursor: 'pointer' }}
          >
            <i className="fa-solid fa-user" style={{ marginRight: '8px' }}></i> Profile
          </button>
          <button 
            onClick={() => setActiveTab('site')} 
            style={{ padding: '15px 25px', background: activeTab === 'site' ? 'var(--bg-card)' : 'transparent', border: 'none', borderBottom: activeTab === 'site' ? '2px solid var(--primary-color)' : '2px solid transparent', color: activeTab === 'site' ? 'var(--primary-color)' : 'var(--text-color)', fontWeight: activeTab === 'site' ? 600 : 400, cursor: 'pointer' }}
          >
            <i className="fa-solid fa-globe" style={{ marginRight: '8px' }}></i> Site Settings
          </button>
          <button 
            onClick={() => setActiveTab('security')} 
            style={{ padding: '15px 25px', background: activeTab === 'security' ? 'var(--bg-card)' : 'transparent', border: 'none', borderBottom: activeTab === 'security' ? '2px solid var(--primary-color)' : '2px solid transparent', color: activeTab === 'security' ? 'var(--primary-color)' : 'var(--text-color)', fontWeight: activeTab === 'security' ? 600 : 400, cursor: 'pointer' }}
          >
            <i className="fa-solid fa-shield-halved" style={{ marginRight: '8px' }}></i> Security
          </button>
        </div>

        <div style={{ padding: '30px' }}>
          <form onSubmit={handleSave} style={{ maxWidth: '600px' }}>
            
            {activeTab === 'profile' && (
              <div className="admin-fade-in">
                <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '30px' }}>
                  <img src="https://ui-avatars.com/api/?name=Admin&background=0D8ABC&color=fff" alt="Admin" style={{ width: '80px', height: '80px', borderRadius: '50%' }} />
                  <div>
                    <button type="button" className="btn btn-secondary btn-sm" style={{ marginBottom: '10px' }}>Upload New Avatar</button>
                    <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>JPG, GIF or PNG. Max size 800K</p>
                  </div>
                </div>
                
                <div className="form-group" style={{ marginBottom: '20px' }}>
                  <label style={{ display: 'block', marginBottom: '8px', fontWeight: 600 }}>Display Name</label>
                  <input type="text" name="adminName" value={formData.adminName} onChange={handleChange} style={{ width: '100%', padding: '10px 15px', borderRadius: '8px', border: '1px solid var(--border-color)', background: 'var(--bg-body)', color: 'var(--text-color)' }} />
                </div>
                
                <div className="form-group" style={{ marginBottom: '20px' }}>
                  <label style={{ display: 'block', marginBottom: '8px', fontWeight: 600 }}>Email Address</label>
                  <input type="email" name="adminEmail" value={formData.adminEmail} onChange={handleChange} style={{ width: '100%', padding: '10px 15px', borderRadius: '8px', border: '1px solid var(--border-color)', background: 'var(--bg-body)', color: 'var(--text-color)' }} />
                </div>
              </div>
            )}

            {activeTab === 'site' && (
              <div className="admin-fade-in">
                <div className="form-group" style={{ marginBottom: '20px' }}>
                  <label style={{ display: 'block', marginBottom: '8px', fontWeight: 600 }}>Site Name</label>
                  <input type="text" name="siteName" value={formData.siteName} onChange={handleChange} style={{ width: '100%', padding: '10px 15px', borderRadius: '8px', border: '1px solid var(--border-color)', background: 'var(--bg-body)', color: 'var(--text-color)' }} />
                </div>
                
                <div className="form-group" style={{ marginBottom: '20px' }}>
                  <label style={{ display: 'block', marginBottom: '8px', fontWeight: 600 }}>Support Email</label>
                  <input type="email" name="supportEmail" value={formData.supportEmail} onChange={handleChange} style={{ width: '100%', padding: '10px 15px', borderRadius: '8px', border: '1px solid var(--border-color)', background: 'var(--bg-body)', color: 'var(--text-color)' }} />
                </div>

                <div className="form-group" style={{ marginBottom: '20px' }}>
                  <label style={{ display: 'block', marginBottom: '8px', fontWeight: 600 }}>Default Theme</label>
                  <select style={{ width: '100%', padding: '10px 15px', borderRadius: '8px', border: '1px solid var(--border-color)', background: 'var(--bg-body)', color: 'var(--text-color)' }}>
                    <option>System Preference</option>
                    <option>Light</option>
                    <option>Dark</option>
                  </select>
                </div>
              </div>
            )}

            {activeTab === 'security' && (
              <div className="admin-fade-in">
                <div className="form-group" style={{ marginBottom: '20px' }}>
                  <label style={{ display: 'block', marginBottom: '8px', fontWeight: 600 }}>Current Password</label>
                  <input type="password" placeholder="••••••••" style={{ width: '100%', padding: '10px 15px', borderRadius: '8px', border: '1px solid var(--border-color)', background: 'var(--bg-body)', color: 'var(--text-color)' }} />
                </div>
                
                <div className="form-group" style={{ marginBottom: '20px' }}>
                  <label style={{ display: 'block', marginBottom: '8px', fontWeight: 600 }}>New Password</label>
                  <input type="password" placeholder="Leave blank to keep current" style={{ width: '100%', padding: '10px 15px', borderRadius: '8px', border: '1px solid var(--border-color)', background: 'var(--bg-body)', color: 'var(--text-color)' }} />
                </div>

                <div className="form-group" style={{ marginBottom: '20px' }}>
                  <label style={{ display: 'block', marginBottom: '8px', fontWeight: 600 }}>Confirm New Password</label>
                  <input type="password" style={{ width: '100%', padding: '10px 15px', borderRadius: '8px', border: '1px solid var(--border-color)', background: 'var(--bg-body)', color: 'var(--text-color)' }} />
                </div>
              </div>
            )}

            <div style={{ marginTop: '30px', paddingTop: '20px', borderTop: '1px solid var(--border-color)' }}>
              <button type="submit" className="btn btn-primary">Save Changes</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
