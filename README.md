# Buy Me a Coffee dApp

The Buy Me a Coffee decentralized application (dApp) is a solution for receiving cryptocurrency donations in a decentralized and transparent manner.

![Preview](https://github.com/manraj2712/buy-coffee-with-eth/assets/65106261/6fbfd20e-0f0c-41fd-96c8-d294768899fd)


## Technologies Used

- **Front-end:** React.js
- **State Management:** Context API
- **Styling:** Tailwind CSS
- **Smart Contracts:** Solidity
- **Blockchain Development Tools:** Hardhat
- **Ethereum Testnet:** Sepolia Testnet
- **Blockchain API:** Alchemy

## Getting Started

To get a local copy of the Buy Me a Coffee dApp up and running, please follow these simple steps.

**Prerequisites**

Here is what you need to be able to run the Buy Me a Coffee dApp:

- Node.js (Version: >=14.x)
- A web browser with MetaMask extension (for interacting with Ethereum)
- An Alchemy API key for accessing the Ethereum network

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/manraj2712/buy-me-a-coffee-with-eth.git
   ```

2. **Install Dependencies:**
   ```bash
   cd buy-me-a-coffee-with-eth
   yarn install
    ```
3. **Set Up Environment Variables:**
   To run this project, you will need to add the following environment variables to your .env file. 

    **ROOT DIRECTORY**

    - `PRIVATE_KEY`
    - `SEPOLIA_URL`
    - `SEPOLIA_API_KEY`


    **CLIENT DIRECTORY**

    Then create a .env file inside the `/client` directory.

    `cd client`

    - `VITE_CONTRACT_ADDRESS`

4. **Deploy contract on sepolia testnet:**
   
    ```bash
    npx hardhat run .\scripts\deploy.js
    ```

5. **Copy generated contract client**
   ```bash
   cp /artifacts/contracts/coffee.sol/coffee.json /client/src/contract/
   ```

6. **Start Frontend**
   ```bash
   cd /client
   yarn dev
    ```





