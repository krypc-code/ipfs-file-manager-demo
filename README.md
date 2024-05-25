# IPFS File Manager Demo DApp

## Introduction

Welcome to the IPFS File Manager Demo DApp, powered by KrypCore. This decentralized application (DApp) enables users to upload and retrieve files by implementing and demonstrating the capabilities of the InterPlanetary File System (IPFS), providing a seamless experience for decentralized file storage.

## About

This project is part of a series dedicated to building decentralized applications (DApps) with KrypCore Web3. By leveraging Krypcore's IPFS Infrastructure APIs, developers can create applications that store files in a decentralized manner, ensuring data integrity and availability.

## Features

- Upload multiple files to IPFS
- Display the hashes of uploaded files
- Retrieve files from IPFS using their hash
- Provide feedback on invalid files during the upload process

## Getting Started

### Prerequisites

- Create an account on [Krypcore Web3](https://www.krypcore.com/) to obtain the necessary Authorization Token and IPFS Endpoint URLs for your project.
- Ensure Node.js v12 is installed on your system.
- Familiarize yourself with React.js.

### Installation

1. Clone this repository:

```bash
git clone https://github.com/our-dapp-repo/ipfs-file-manager-demo.git
```


2. Navigate to the project directory:

```bash
cd ipfs-file-manager-demo
```


3. Install dependencies:

```bash
npm install
```


4. Create a `.env` file based on the `.env.example` file and replace all variables with the APIKEY and Auth Token from your Krypcore Web3 dashboard (Your APIKEY is at the end of both client and gateway IPFS endpoint URLs).

### Usage

1. Start the development server:

```bash
npm start
```


2. Access the application at `localhost:3000`.

### IPFS HTTP API Used

- `add`: Adds a file to IPFS and returns its hash.
- `get`: Retrieves a file from IPFS using its hash.

## Conclusion

We hope this guide helps you get started with creating your IPFS File Manager with Krypcore Web3. Feel free to customize it further or add any other APIs from our [documentation](https://docs.krypcore.com/dev-docs/api-reference/infrastructure-apis/ipfs-http-client-apis/http-api-methods) for additional functionality. Join our developer community on Discord to discuss any DApp ideas you're building!
