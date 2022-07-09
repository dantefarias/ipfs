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

How would you improve this assignment for a production ready solution (e.g., security,
deployment)? 

- Improve client authentication, using cookies for storing session token instead of localStorage.

- Dockerize the modules.

- Test (Unit and Integration)

- Improve **UI/UX**.

- Implement metrics, monitoring and alerting system.

Describe IPFS and compare it to other protocols e.g., HTTP?
