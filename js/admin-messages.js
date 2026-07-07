/* ==========================================================================
   LinguaVerse — admin-messages.js
   Powers the Contact Messages inbox page. Assumes admin.js has run.
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {

  const AVATAR_COLORS = ['#0d9488','#6366f1','#f59e0b','#ec4899','#14b8a6','#8b5cf6','#ef4444','#0ea5e9'];
  function avatarColor(name) {
    let h = 0;
    for (let i = 0; i < name.length; i++) h = name.charCodeAt(i) + ((h << 5) - h);
    return AVATAR_COLORS[Math.abs(h) % AVATAR_COLORS.length];
  }
  function initials(name) { return name.split(' ').map(p => p[0]).slice(0,2).join('').toUpperCase(); }

  /* ── Sample data ── */
  let messages = [
    { id:1,  name:'Priya Sharma',    email:'priya.s@example.com',  subject:'Question about Pro plan',       body:'Hello,\n\nI am very interested in the Pro plan but I would like to know more about the features included — especially regarding offline access and the number of languages available simultaneously.\n\nLooking forward to hearing from you.\n\nBest regards,\nPriya',              date:'2026-07-07T04:30:00Z', status:'new' },
    { id:2,  name:'Rahul Kumar',     email:'rahulk@example.com',   subject:"Can't access Japanese lessons", body:"Hi support team,\n\nI purchased the Pro plan last week, but when I try to open the Japanese course it just loads indefinitely and nothing happens. I've tried clearing my browser cache and using a different browser, but the issue persists.\n\nCould you please help?\n\nThanks,\nRahul",                                                         date:'2026-07-06T09:15:00Z', status:'new' },
    { id:3,  name:'Maria Garcia',    email:'maria.g@example.com',  subject:'Partnership inquiry',           body:'Dear LinguaVerse team,\n\nI represent an edtech company based in Madrid and we are looking for potential partnerships to integrate language learning into our corporate training programme.\n\nWould you be open to a call to discuss this further?\n\nKind regards,\nMaria Garcia',                                                          date:'2026-07-05T14:00:00Z', status:'read' },
    { id:4,  name:'Arjun Telugu',    email:'arjunt@example.com',   subject:'Feedback on Telugu course',    body:'Hello,\n\nI have been using the Telugu course for two months and I wanted to share some feedback. The audio quality on lessons 5–8 is a bit low compared to the rest. Also, it would be great to have more conversation practice exercises.\n\nOverall, I love the platform!\n\nArjun',                                                             date:'2026-07-04T11:45:00Z', status:'read' },
    { id:5,  name:'Sophie Laurent',  email:'sophie.l@example.com', subject:'Certificate after completion?', body:'Bonjour,\n\nI am currently halfway through the French Advanced course and I was wondering — does LinguaVerse offer any certificate or badge upon course completion? That would be very useful for my CV.\n\nMerci beaucoup,\nSophie',                                                                                                              date:'2026-07-03T08:20:00Z', status:'replied' },
    { id:6,  name:'Chen Wei',        email:'chenw@example.com',    subject:'Bug report: audio not playing', body:'Hi,\n\nOn mobile (Android 14, Chrome) the audio buttons in Lesson 3 of the English Intermediate course do not respond. The page itself loads fine, but tapping the play button produces no audio and no error message.\n\nI can reproduce this consistently. Let me know if you need any more info.\n\nChen Wei',                               date:'2026-07-02T16:50:00Z', status:'new' },
    { id:7,  name:'Jake Morrison',   email:'jake.m@example.com',   subject:'Request for refund',            body:'Hello,\n\nI subscribed to the Pro monthly plan on June 28th but unfortunately I have not been able to use the service due to personal reasons. I would like to request a refund as it has been less than 7 days since purchase.\n\nPlease let me know the process.\n\nThank you,\nJake Morrison',                                               date:'2026-07-01T13:00:00Z', status:'replied' },
    { id:8,  name:'Fatima Al-Sayed', email:'fatimaa@example.com',  subject:'Question about group plans',   body:'Dear team,\n\nI am a teacher looking to subscribe for a class of 25 students. Do you offer any group or institutional pricing? And would it be possible to track individual student progress from a teacher dashboard?\n\nI look forward to your response.\n\nFatima Al-Sayed',                                                                date:'2026-06-30T10:30:00Z', status:'read' },
  ];

  /* ── State ── */
  let searchTerm    = '';
  let statusFilter  = 'all';
  let activeId      = null;

  /* ── DOM refs ── */
  const msgList      = document.getElementById('msgList');
  const searchInput  = document.getElementById('msgSearchInput');
  const statusSel    = document.getElementById('msgStatusFilter');

  const emptyPanel   = document.getElementById('msgPreviewEmpty');
  const previewPanel = document.getElementById('msgPreviewContent');
  const previewAv    = document.getElementById('previewAvatar');
  const previewName  = document.getElementById('previewName');
  const previewEmail = document.getElementById('previewEmail');
  const previewBadge = document.getElementById('previewBadge');
  const previewDate  = document.getElementById('previewDate');
  const previewSubj  = document.getElementById('previewSubject');
  const previewBody  = document.getElementById('previewBody');
  const markReadBtn  = document.getElementById('msgMarkReadBtn');
  const deleteBtn    = document.getElementById('msgDeleteBtn');
  const replyTA      = document.getElementById('replyTextarea');
  const sendBtn      = document.getElementById('sendReplyBtn');
  const clearBtn     = document.getElementById('clearReplyBtn');

  const totalEl   = document.getElementById('msgTotalCount');
  const newEl     = document.getElementById('msgNewCount');
  const repliedEl = document.getElementById('msgRepliedCount');
  const readEl    = document.getElementById('msgReadCount');

  if (!msgList) return;

  /* ── Filtered ── */
  function getFiltered() {
    return messages.filter(m => {
      const term = searchTerm.toLowerCase();
      const matchSearch = m.name.toLowerCase().includes(term) || m.subject.toLowerCase().includes(term) || m.body.toLowerCase().includes(term);
      const matchStatus = statusFilter === 'all' || m.status === statusFilter;
      return matchSearch && matchStatus;
    });
  }

  /* ── Render list ── */
  function renderList() {
    const filtered = getFiltered();
    updateStats();

    if (filtered.length === 0) {
      msgList.innerHTML = `<div style="padding:var(--space-lg);text-align:center;color:var(--text-muted);"><i class="fa-solid fa-inbox" style="font-size:2rem;margin-bottom:10px;display:block;opacity:0.4;"></i>No messages found.</div>`;
      return;
    }

    msgList.innerHTML = filtered.map(m => {
      const color  = avatarColor(m.name);
      const init   = initials(m.name);
      const timeStr = formatDate(m.date);
      const isActive = m.id === activeId ? 'active' : '';
      const isUnread = m.status === 'new' ? 'unread' : '';
      return `
        <div class="msg-item ${isActive} ${isUnread}" data-msg-id="${m.id}">
          <span class="msg-avatar" style="background:${color};">${init}</span>
          <div class="msg-item-content">
            <div class="msg-item-row1">
              <span class="msg-item-name">${m.name}</span>
              <span class="msg-item-time">${timeStr}</span>
            </div>
            <div class="msg-item-subject">${m.subject}</div>
            <div class="msg-item-preview">${m.body.substring(0, 60).replace(/\n/g,' ')}…</div>
          </div>
          ${m.status === 'new' ? '<span class="msg-unread-dot"></span>' : ''}
        </div>`;
    }).join('');
  }

  function updateStats() {
    totalEl.textContent   = messages.length;
    newEl.textContent     = messages.filter(m => m.status === 'new').length;
    repliedEl.textContent = messages.filter(m => m.status === 'replied').length;
    readEl.textContent    = messages.filter(m => m.status === 'read').length;
  }

  function formatDate(iso) {
    const d = new Date(iso);
    const now = new Date();
    const diffH = (now - d) / 3600000;
    if (diffH < 1)   return 'Just now';
    if (diffH < 24)  return `${Math.floor(diffH)}h ago`;
    if (diffH < 48)  return 'Yesterday';
    return d.toLocaleDateString('en-US',{month:'short',day:'numeric'});
  }

  /* ── Open preview ── */
  function openMessage(id) {
    activeId = id;
    const msg = messages.find(m => m.id === id);
    if (!msg) return;

    // Mark as read on open (if new)
    if (msg.status === 'new') msg.status = 'read';

    const color = avatarColor(msg.name);
    previewAv.style.background = color;
    previewAv.textContent  = initials(msg.name);
    previewName.textContent  = msg.name;
    previewEmail.textContent = msg.email;
    previewSubj.textContent  = msg.subject;
    previewBody.textContent  = msg.body;
    previewDate.textContent  = new Date(msg.date).toLocaleString('en-US',{year:'numeric',month:'long',day:'numeric',hour:'2-digit',minute:'2-digit'});

    const badges = { new:'new', read:'read', replied:'replied' };
    previewBadge.className = `msg-badge ${badges[msg.status] || ''}`;
    previewBadge.textContent = msg.status.charAt(0).toUpperCase() + msg.status.slice(1);

    emptyPanel.style.display   = 'none';
    previewPanel.classList.add('show');
    replyTA.value = '';

    renderList();
  }

  /* ── List click ── */
  msgList.addEventListener('click', e => {
    const item = e.target.closest('[data-msg-id]');
    if (!item) return;
    openMessage(parseInt(item.dataset.msgId, 10));
  });

  /* ── Mark as read ── */
  markReadBtn.addEventListener('click', () => {
    const msg = messages.find(m => m.id === activeId);
    if (!msg) return;
    msg.status = 'read';
    openMessage(activeId);
    showToast('Message marked as read.', 'success');
  });

  /* ── Delete ── */
  deleteBtn.addEventListener('click', () => {
    messages = messages.filter(m => m.id !== activeId);
    activeId = null;
    emptyPanel.style.display = '';
    previewPanel.classList.remove('show');
    renderList();
    showToast('Message deleted.', 'success');
  });

  /* ── Send reply ── */
  sendBtn.addEventListener('click', () => {
    if (!replyTA.value.trim()) { showToast('Please type a reply first.', 'error'); return; }
    const msg = messages.find(m => m.id === activeId);
    if (!msg) return;
    msg.status = 'replied';
    replyTA.value = '';
    openMessage(activeId);
    showToast(`Reply sent to ${msg.name}.`, 'success');
  });

  clearBtn.addEventListener('click', () => { replyTA.value = ''; });

  /* ── Search / filter ── */
  searchInput.addEventListener('input', () => { searchTerm = searchInput.value.trim(); renderList(); });
  statusSel.addEventListener('change', () => { statusFilter = statusSel.value; renderList(); });

  /* ── Toast ── */
  function showToast(message, type = 'success') {
    let toast = document.querySelector('.msg-toast');
    if (!toast) {
      toast = document.createElement('div');
      toast.className = 'msg-toast';
      toast.innerHTML = '<i class="fa-solid"></i><span></span>';
      document.body.appendChild(toast);
    }
    toast.className = `msg-toast ${type}`;
    toast.querySelector('i').className = `fa-solid ${type==='success' ? 'fa-circle-check' : 'fa-circle-exclamation'}`;
    toast.querySelector('span').textContent = message;
    requestAnimationFrame(() => toast.classList.add('show'));
    clearTimeout(toast._t);
    toast._t = setTimeout(() => toast.classList.remove('show'), 2800);
  }

  /* ── Init ── */
  renderList();
});
