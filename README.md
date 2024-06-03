Project 1 (Sorting Algorithms)

Implement and compare the following sorting algorithm :

Mergesort
Heapsort
Quicksort (Regular quick sort* and quick sort using 3 medians)
Insertion sort
Selection sort
Bubble sort
* For regular quick sort you can decide between choosing first, last or a random element as pivot.
 But you need to include both regular and 3 medians as separate algorithms.

React Application Setup Guide:
----------------------------

How to use:
----------

-> Download the zip file and extract the folder.
-> Open the folder in Visual Studio Code.
-> Run the following command for installing the packages:
        npm i or npm install
-> Use "npm start" for running the code.

--------------------------

Prerequisites
-> Node.js installed on your system. 

Step 1: Install Node.js

-> Visit the Node.js download page. (https://nodejs.org/en/download)
->Choose the appropriate installer for your operating system.
-> Follow the installation instructions.

Step 2: Install npx
-> Open your terminal or command prompt on the Visual Studio Code.
-> Run the following command to install npx globally:
         npm i -g npx

Step 3: Create a React Application with TypeScript
-> Run the following command to create a new React application with TypeScript template:
-> npx create-react-app daa --template typescript

Step 4: Install Webpack and Related Dependencies
-> Install Webpack and related dependencies by running:
        npm install --save-dev webpack webpack-dev-server html-webpack-plugin webpack-cli @babel/core babel-loader
            @babel/preset-env @babel/preset-react @babel/preset-typescript css-loader style-loader

Step 5: Add Bootstrap for styling
-> Open the index.html file and include the following TypeScript
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz"
        crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js"
        integrity="sha384-I7E8VVD/ismYTF4hNIPjVp/Zjvgyol6VFvRkX/vR+Vc4jQkC+hVqc2pM8ODewa9r"
        crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.min.js"
        integrity="sha384-0pUGZvbkm6XF6gxjEnlmuGrJXVbNuzT9qBBavbLwCsOGabYfZo0T0to5eqruptLy"
        crossorigin="anonymous"></script>

Step 6: Start the Application
-> In your project directory, run:
        npm start
-> This command starts the development server and opens your application in the default web browser.

Step 7: Setup Prettier for Code Formatting
        npm install --save-dev prettier

Step 8: Install UI Material and Related Dependencies
-> Install UI Material and related dependencies:
        npm install @mui/material @mui/styled-engine-sc styled-components
        npm install @emotion/react @emotion/styled

Step 9: Install Charts Using UI Material
-> Install the charts package:
        npm install @mui/x-charts


















