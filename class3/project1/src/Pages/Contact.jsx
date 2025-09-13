import React from 'react';

function Contact() {
  return (
    <div style={{ maxWidth: '900px', margin: '40px auto', padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      
      <h1 style={{ textAlign: 'center', marginBottom: '30px', color: '#333' }}>Get in Touch</h1>
      
      <div style={{ display: 'flex', gap: '40px', flexWrap: 'wrap' }}>
        
        {/* Contact Info */}
        <div style={{ flex: '1', minWidth: '250px', padding: '20px', border: '1px solid #ddd', borderRadius: '10px', background: '#f9f9f9' }}>
          <h2 style={{ marginBottom: '15px', color: '#007bff' }}>Contact Info</h2>
          <p><strong>Address:</strong> 123 Street, City, Country</p>
          <p><strong>Email:</strong> info@example.com</p>
          <p><strong>Phone:</strong> +91 123 456 7890</p>
        </div>

        {/* Contact Form */}
        <div style={{ flex: '2', minWidth: '300px', padding: '20px', border: '1px solid #ddd', borderRadius: '10px', background: '#fff' }}>
          <h2 style={{ marginBottom: '15px', color: '#007bff' }}>Send Us a Message</h2>
          <form>
            <input 
              type="text" 
              placeholder="Your Name" 
              style={{ width: '100%', padding: '10px', marginBottom: '10px', borderRadius: '5px', border: '1px solid #ccc' }} 
            />
            <input 
              type="email" 
              placeholder="Your Email" 
              style={{ width: '100%', padding: '10px', marginBottom: '10px', borderRadius: '5px', border: '1px solid #ccc' }} 
            />
            <textarea 
              placeholder="Your Message" 
              style={{ width: '100%', padding: '10px', minHeight: '120px', marginBottom: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
            ></textarea>
            <button 
              type="submit" 
              style={{ padding: '10px 20px', background: '#007bff', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}
            >
              Submit
            </button>
          </form>
        </div>

      </div>
    </div>
  );
}

export default Contact;
