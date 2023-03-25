import React, { useState } from "react";
import QRCode from "qrcode";

function FormQRC() {
  const [name, setName] = useState("");
  const [githubURL, setGithubURL] = useState("");
  const [linkedinURL, setLinkedinURL] = useState("");
  const [qrDataURL, setQRDataURL] = useState("");

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleGithubURLChange = (event) => {
    setGithubURL(event.target.value);
  };

  const handleLinkedinURLChange = (event) => {
    setLinkedinURL(event.target.value);
  };

  const generateQRCode = async () => {
    try {
      const qrData = await QRCode.toDataURL(
        `${name}\n${githubURL}\n${linkedinURL}`
      );
      setQRDataURL(qrData);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="max-w-2xl mx-auto justify-center align-center p-4 w-full h-full">
      <h2 className="text-2xl">QR Code Image Generator</h2>
      <form
        onSubmit={(event) => event.preventDefault()}
        className="flex flex-col justify-items-start space-y-4"
      >
        <div className="border rounded-md">
          <label className="">Name</label>
          <input
            type="text"
            value={name}
            onChange={handleNameChange}
          />
        </div>
        <div className="border rounded-md">
          <label>LinkedIn URL</label>
          <input
            type="text"
            value={linkedinURL}
            onChange={handleLinkedinURLChange}
          />
        </div>
        <div className="border rounded-md">
          <label>GitHub URL</label>
          <input
            type="text"
            value={githubURL}
            onChange={handleGithubURLChange}
          />
        </div>
        <button onClick={generateQRCode} className="border-2 rounded-md px-2">
          Generate Image
        </button>
      </form>
      {qrDataURL && <img src={qrDataURL} alt="QR Code" />}
    </div>
  );
}

export default FormQRC;
