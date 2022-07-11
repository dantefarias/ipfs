# Fleek Challenge 

## Getting started  

### Pre-requisites  

- **[Docker](https://www.docker.com/)**
- **[IPFS Desktop](https://docs.ipfs.io/install/command-line/)** 


## Starting the app

1. Clone this repository: ` git clone https://github.com/dantefarias/ipfs.git `

2. Go to directory: ` cd ipfs `

3. Install all the modules with the following command: ` npm run install-all `

4. Build and run containers: `docker-compose up -d`

5. Run IPFS Daemon `ipfs daemon`

6. Run the three modules with `npm start` on **./server**, **./proxy** and  **./client**


# Written questions

**How would you improve this assignment for a production ready solution (e.g., security, deployment)?**

- Improve client authentication, using cookies for storing session token instead of localStorage.

- Dockerize the modules.

- Improve **UI/UX**.

- Implement metrics, monitoring and alerting system.

- Test (Unit and Integration)

- Add CI/CD automation

**Describe IPFS and compare it to other protocols e.g., HTTP?**

IPFS is a peer-to-peer (P2P) distributed system for storing and accessing files, websites, applications, and data.

When you go on a regular website, a centralized server will transmit its text, pictures, and videos to your device using HTTP or HTTPS.

In contrast, IPFS is open source and uses multiple nodes to give you the same information faster. It also saves your bandwidth, allowing you to distribute massive volumes of data without duplication.

Advantages of IPFS againts other protocols like HTTP/HTTPS:

- **Increases your browser speed** – With IPFS, you’ll enjoy faster speeds as it runs through neighboring nodes instead of accessing data from a centralized location in a far-away place.

- **Saves you money** – Since IPFS runs on a decentralized network, you’ll save money, too, as you’ll no longer have to pay for expensive server hosting.

- **Preserves the integrity of older web pages** - With a distributed IPFS system, your website will no longer be at the mercy of a central server as it will operate across a decentralized network instead.

- **Protects your privacy** – IPFS crucially makes it more difficult for governments to block websites, such as Wikipedia, as it’s not dependent on central servers like HTTP.
