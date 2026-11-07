import React, { useState } from 'react';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section>
      <h2 style={{ fontSize: '1.8rem', color: '#f8fafc', marginBottom: '16px' }}>Contact</h2>
      {submitted ? (
        <p style={{ color: '#34d399' }}>Message submitted successfully!</p>
      ) : (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setSubmitted(true);
          }}
          style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}
        >
          <input
            type="text"
            placeholder="Your Name"
            required
            style={inputField}
          />
          <input
            type="email"
            placeholder="Your Email"
            required
            style={inputField}
          />
          <textarea
            rows="4"
            placeholder="Your Message"
            required
            style={inputField}
          ></textarea>
          <button
            type="submit"
            style={{
              backgroundColor: '#38bdf8',
              color: '#e2e4eb',
              border: 'none',
              padding: '12px',
              borderRadius: '6px',
              fontWeight: 'bold',
              cursor: 'pointer',
            }}
          >
            Send
          </button>
        </form>
      )}
    </section>
  );
}

const inputField = {
  backgroundColor: '#1e293b',
  border: '1px solid #334155',
  color: '#fff',
  padding: '10px 14px',
  borderRadius: '6px',
  outline: 'none',
};