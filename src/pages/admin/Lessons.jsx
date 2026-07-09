import { useState } from 'react';

const initialLessons = [
  { id: 101, title: 'Introduction to Greetings', language: 'Spanish', module: 'Basics 1', status: 'Published' },
  { id: 102, title: 'Hiragana Characters', language: 'Japanese', module: 'Alphabet', status: 'Published' },
  { id: 103, title: 'Ordering at a Restaurant', language: 'French', module: 'Travel', status: 'Draft' },
  { id: 104, title: 'Past Tense Conjugation', language: 'Spanish', module: 'Grammar 2', status: 'Published' },
  { id: 105, title: 'Everyday Verbs', language: 'Hindi', module: 'Vocabulary', status: 'In Review' }
];

export default function Lessons() {
  const [lessons, setLessons] = useState(initialLessons);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterLang, setFilterLang] = useState('All');

  const filteredLessons = lessons.filter(lesson => {
    const matchesSearch = lesson.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          lesson.module.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesLang = filterLang === 'All' || lesson.language === filterLang;
    return matchesSearch && matchesLang;
  });

  const handleDelete = (id) => {
    if (window.confirm('Delete this lesson permanently?')) {
      setLessons(lessons.filter(l => l.id !== id));
    }
  };

  const handleEdit = (id) => {
    alert(`Opening lesson editor for ID: ${id}`);
  };

  const handleAdd = () => {
    const newLesson = {
      id: Date.now(),
      title: 'New Untitled Lesson',
      language: 'English',
      module: 'Uncategorized',
      status: 'Draft'
    };
    setLessons([newLesson, ...lessons]);
  };

  return (
    <>
      <div className="admin-page-header admin-fade-in">
        <div>
          <h2 style={{ fontSize: '1.8rem', marginBottom: '5px' }}>Lessons</h2>
          <p style={{ color: 'var(--text-muted)' }}>Manage course modules and individual lessons.</p>
        </div>
        <button className="btn btn-primary" onClick={handleAdd}>
          <i className="fa-solid fa-plus"></i> Add Lesson
        </button>
      </div>

      <div className="admin-panel admin-fade-in">
        <div className="admin-panel-header" style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '15px' }}>
          <div className="admin-search" style={{ maxWidth: '300px' }}>
            <i className="fa-solid fa-search"></i>
            <input 
              type="text" 
              placeholder="Search lessons..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div style={{ display: 'flex', gap: '10px' }}>
            <select 
              style={{ padding: '8px 12px', border: '1px solid var(--border-color)', borderRadius: '8px', background: 'var(--bg-alt)' }}
              value={filterLang}
              onChange={(e) => setFilterLang(e.target.value)}
            >
              <option value="All">All Languages</option>
              <option value="Spanish">Spanish</option>
              <option value="Japanese">Japanese</option>
              <option value="French">French</option>
              <option value="Hindi">Hindi</option>
            </select>
          </div>
        </div>

        <div className="admin-table-wrap">
          <table className="admin-table">
            <thead>
              <tr>
                <th>Lesson Title</th>
                <th>Language</th>
                <th>Module</th>
                <th>Status</th>
                <th style={{ textAlign: 'right' }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredLessons.length > 0 ? (
                filteredLessons.map(lesson => (
                  <tr key={lesson.id}>
                    <td style={{ fontWeight: 600 }}>{lesson.title}</td>
                    <td>{lesson.language}</td>
                    <td><span className="badge">{lesson.module}</span></td>
                    <td>
                      <span className={`admin-status-pill ${lesson.status === 'Published' ? 'read' : 'new'}`}>
                        {lesson.status}
                      </span>
                    </td>
                    <td style={{ textAlign: 'right' }}>
                      <button className="btn-icon" onClick={() => handleEdit(lesson.id)} style={{ border: 'none', background: 'none', color: 'var(--text-color)', cursor: 'pointer', margin: '0 5px' }} aria-label="Edit lesson">
                        <i className="fa-solid fa-pen"></i>
                      </button>
                      <button className="btn-icon" onClick={() => handleDelete(lesson.id)} style={{ border: 'none', background: 'none', color: 'var(--text-danger)', cursor: 'pointer', margin: '0 5px' }} aria-label="Delete lesson">
                        <i className="fa-solid fa-trash"></i>
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5" style={{ textAlign: 'center', padding: '30px' }}>
                    No lessons found.
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
