import React, { useState } from 'react';
import { addFile, getFile } from './Backend.js';
import './App.css';

function App() {
  const [files, setFiles] = useState([]);
  const [hashes, setHashes] = useState([]);
  const [hash, setHash] = useState('');
  const [downloadUrl, setDownloadUrl] = useState('');

  const handleAddFile = (event) => {
    if (event.target.files.length > 0) {
      setFiles([...files, event.target.files[0]]);
    }
  };

  const handleUploadFiles = async () => {
    const newHashes = [];
    for (const file of files) {
      try {
        const fileHash = await addFile(file);
        newHashes.push(fileHash);
      } catch (error) {
        newHashes.push('Invalid file');
      }
    }
    setHashes(newHashes);
  };

  const handleGetFile = async () => {
    try {
      const url = await getFile(hash);
      setDownloadUrl(url);
    } catch (error) {
      alert('Failed to retrieve file');
      setDownloadUrl('');
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>IPFS File Manager Demo Dapp</h1>

        {files.map((file, index) => (
          <div key={index}>
            <p>{file.name}</p>
          </div>
        ))}
        {files.length < 10 && <input type="file" onChange={handleAddFile} />}
        <button onClick={handleUploadFiles} disabled={files.length === 0}>Upload to IPFS</button>

        <ul>
          {hashes.map((fileHash, index) => (
            <li key={index}>{fileHash}</li>
          ))}
        </ul>

        <input
          type="text"
          value={hash}
          onChange={(e) => setHash(e.target.value)}
          placeholder="Enter Hash"
        />
        <button onClick={handleGetFile}>Get File</button>

        {downloadUrl && (
          <button onClick={() => window.open(downloadUrl, '_blank')}>
            Open File
          </button>
        )}
      </header>
    </div>
  );
}

export default App;
