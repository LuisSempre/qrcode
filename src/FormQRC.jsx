import React, { useState } from 'react';
import QRCode from 'qrcode.react';


export default function FormQRC() {
    const [name, setName] = useState('');
    const [githubLink, setGithubLink] = useState('');
    const [linkedinLink, setLinkedinLink] = useState('');
    const [showQRCode, setShowQRCode] = useState(false);
    
    // function to handle form submission
    const handleSubmit = (e) => {
      e.preventDefault();
      setShowQRCode(true);
    }
    
    return (
      <div>
        <h2>Generate a QR Code for your contact information:</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" value={name} onChange={(e) => setName(e.target.value)} />
          
          <label htmlFor="github">GitHub Profile Link:</label>
          <input type="text" id="github" name="github" value={githubLink} onChange={(e) => setGithubLink(e.target.value)} />
          
          <label htmlFor="linkedin">LinkedIn Profile Link:</label>
          <input type="text" id="linkedin" name="linkedin" value={linkedinLink} onChange={(e) => setLinkedinLink(e.target.value)} />
          
          <button type="submit">Generate QR Code</button>
        </form>
        
        {showQRCode && (
          <div>
            <QRCode value={`Name: ${name}\nGitHub: ${githubLink}\nLinkedIn: ${linkedinLink}`} />
          </div>
        )}
      </div>
    );
  }
  