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
        const fileUrl = await getFile(fileHash); // Get the file URL immediately
        newHashes.push({ hash: fileHash, url: fileUrl });
      } catch (error) {
        newHashes.push({ hash: 'Invalid file' });
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
        <a href="https://krypcore.com/" target="_blank" rel="noopener noreferrer">
          <img src="https://krypcore.com/static/media/krypcore-white%201.b0fd1e70da9e42cc64307ebf5db47a8e.svg" className="App-logo" alt="KrypCore logo" />
        </a>
        <h1>IPFS File Manager Demo Dapp</h1>
        <hr />

        <div className="file-upload-section">
          <h2>Upload Files to IPFS</h2>
          {files.length > 0 && (
            <>
              <ul className="file-list">
                {files.map((file, index) => (
                  <li key={index}>
                    {file.name} {hashes[index] && hashes[index].hash !== 'Invalid file' && (
                      <a
                        href={hashes[index].url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="file-link"
                      >
                        {hashes[index].hash}
                      </a>
                    )}
                    {hashes[index] && hashes[index].hash === 'Invalid file' && (
                      <span>{hashes[index].hash}</span>
                    )}
                  </li>
                ))}
              </ul>
            </>
          )}

          {files.length < 10 && <input type="file" onChange={handleAddFile} />}
          <button onClick={handleUploadFiles} disabled={files.length === 0}>Upload to IPFS</button>
        </div>

        <hr />

        <div className="file-retrieve-section">
          <h2>Get File from IPFS</h2>
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
        </div>

        <div className="footer">
          <p>
            Read our <a href="https://docs.krypcore.com/dev-docs" target="_blank" rel="noopener noreferrer" className="footer-link">KrypCore API and SDK documentation here</a>.
          </p>
          <p>
            Ask us a question on our <a href="https://discord.com/invite/m74sFXNv5W" target="_blank" rel="noopener noreferrer" className="footer-link">Discord server</a>.
          </p>
        </div>
      </header>
    </div>
  );
}

export default App;
