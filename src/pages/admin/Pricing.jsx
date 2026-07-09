import { useState } from 'react';

const initialPlans = [
  { id: 1, name: 'Starter', price: '0', period: 'forever', features: ['Access to 1 language', '20 core lessons', 'Basic vocabulary trainer', 'Community support'] },
  { id: 2, name: 'Pro', price: '12', period: 'month', isPopular: true, features: ['All 6 languages, unlimited', 'Full lesson & phrase library', 'Progress tracking & roadmaps', 'Offline mode', 'Priority support'] },
  { id: 3, name: 'Lifetime', price: '199', period: 'one-time', features: ['Everything in Pro', 'Lifetime updates & new languages', 'Downloadable certificates', '1:1 onboarding session'] }
];

export default function Pricing() {
  const [plans, setPlans] = useState(initialPlans);

  const handleEdit = (id) => {
    alert(`Opening edit modal for plan ID: ${id}`);
  };

  const handleTogglePopular = (id) => {
    setPlans(plans.map(p => {
      if (p.id === id) {
        return { ...p, isPopular: !p.isPopular };
      }
      return p;
    }));
  };

  return (
    <>
      <div className="admin-page-header admin-fade-in">
        <div>
          <h2 style={{ fontSize: '1.8rem', marginBottom: '5px' }}>Pricing Configuration</h2>
          <p style={{ color: 'var(--text-muted)' }}>Manage subscription tiers and pricing plans.</p>
        </div>
        <button className="btn btn-primary" onClick={() => alert('Add New Plan')}>
          <i className="fa-solid fa-plus"></i> Add Plan
        </button>
      </div>

      <div className="grid admin-stats-grid admin-fade-in" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
        {plans.map(plan => (
          <div key={plan.id} className="admin-panel" style={{ position: 'relative', border: plan.isPopular ? '2px solid var(--primary-color)' : '' }}>
            {plan.isPopular && (
              <span className="badge" style={{ position: 'absolute', top: '-12px', right: '20px', background: 'var(--primary-color)' }}>Most Popular</span>
            )}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
              <h3 style={{ fontSize: '1.5rem', margin: 0 }}>{plan.name}</h3>
              <div style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>${plan.price} <span style={{ fontSize: '0.9rem', color: 'var(--text-muted)', fontWeight: 'normal' }}>/{plan.period}</span></div>
            </div>
            
            <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 20px 0', minHeight: '180px' }}>
              {plan.features.map((feature, idx) => (
                <li key={idx} style={{ marginBottom: '10px', display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                  <i className="fa-solid fa-check" style={{ color: 'var(--accent-green)', marginTop: '4px' }}></i>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <div className="admin-pricing-actions" style={{ display: 'flex', gap: '10px', borderTop: '1px solid var(--border-color)', paddingTop: '20px' }}>
              <button className="btn btn-secondary" onClick={() => handleEdit(plan.id)} style={{ flex: 1 }} aria-label={`Edit ${plan.name} plan`}>
                Edit
              </button>
              <button 
                className="btn btn-danger" 
                onClick={() => handleDelete(plan.id)} 
                style={{ background: 'none', border: '1px solid #ef4444', color: '#ef4444' }}
                aria-label={`Delete ${plan.name} plan`}
              >
                <i className="fa-solid fa-trash"></i>
              </button>
              <button 
                className="btn btn-icon" 
                onClick={() => handleTogglePopular(plan.id)}
                title={plan.isPopular ? "Remove Popular Badge" : "Make Popular"}
                aria-label={plan.isPopular ? `Remove Popular Badge from ${plan.name}` : `Make ${plan.name} Popular`}
                style={{ background: 'var(--bg-alt)', border: '1px solid var(--border-color)' }}
              >
                <i className={`fa-solid fa-star ${plan.isPopular ? 'text-warning' : ''}`} style={{ color: plan.isPopular ? '#f59e0b' : 'inherit' }}></i>
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
