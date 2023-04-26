## BANK OF FLATIRON
This is a simple React application that allows users to manage transactions, including adding new transactions and filtering transactions by description.
## Core Deliverables
As a user, I can:
See a table of all transactions.
Fill out and submit the form to add a new transaction. This should add the new transaction to the table; the new transaction does not have to be persisted to the backend.
Filter transactions by typing into the search bar. Only transactions with a description matching the search term should be shown in the transactions table.
## Prerequisites
Node.js (version 12 or higher)
npm (version 6 or higher)
## Installation
1. Clone this repository to your local machine.
2. In your terminal, navigate to the project directory.
3. Run the command npm install to install the required dependencies.
4. Run the command npm start to start the development server.
5. Open your web browser and navigate to http://localhost:3000 to view the application.
## Usage
The application consists of three main components:
1. Table: displays a table of all transactions.
2. TForm: allows users to add new transactions.
3. SearchBar: allows users to filter transactions by description.
To add a new transaction, fill out the form in the TransactionForm component and click the "Add Transaction" button. The new transaction will be added to the TransactionTable component.
To filter transactions by description, type into the search bar in the SearchBar component. Only transactions with a description that matches the search term will be displayed in the TransactionTable component.
## Built With
React: a JavaScript library for building user interfaces.
CSS: a stylesheet language used to describe the presentation of HTML documents.
## License
This project is licensed under the MIT License. See the LICENSE file for details.


