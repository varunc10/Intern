API Integration with MongoDB, React, Node.js, and CSV Export


Introduction
This project demonstrates the integration of an external API with MongoDB to store and display data using a React frontend and a Node.js backend. Additionally, it includes a microservice for exporting the data to a CSV file.


Features
1) Fetch data from an external API and store it in MongoDB.
2) Display the fetched data using a React frontend.
3) Implement an editing feature to update the data and synchronize changes with MongoDB.
4) Develop a microservice to export the data to a CSV file.


Technology Stack
The project is built using the following technologies:

Frontend:

React.js
HTML/CSS
JavaScript


Backend:

Node.js
Express.js
MongoDB
Mongoose (ODM for MongoDB)


Microservice:

Node.js
Express.js


Installation

To run the project locally, follow these steps:

Clone the repository: git clone https://github.com/varunc10/Intern.git
Install dependencies: npm install


Configure the project:

Update the API endpoint and database connection settings in the backend configuration file.
Set up the MongoDB database and provide the connection URI.


Run the Project:

First start the backend server then the frontend so that the frontend has the api to fetch the data.

Backend: node Backend

Frontend: npm start

Export to csv: node export


Access the application:

Open your web browser and navigate to http://localhost:3000 to view the React frontend.
Open your web browser and navigate to http://localhost:5000 to view the Json data at backend and send data to the frontedn.
Use the provided routes or endpoints to interact with the API and make changes to the data.
