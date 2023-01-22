# Engineering-Team-Profile-Generator

  ## Licensing: 
  [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
  
# User Story

```md
AS A manager
I WANT to generate a webpage that displays my team's basic info
SO THAT I have quick access to their emails and GitHub profiles
```

## Acceptance Criteria

```md
GIVEN a command-line application that accepts user input
WHEN I am prompted for my team members and their information
THEN an HTML file is generated that displays a nicely formatted team roster based on user input
WHEN I click on an email address in the HTML
THEN my default email program opens and populates the TO field of the email with the address
WHEN I click on the GitHub username
THEN that GitHub profile opens in a new tab
WHEN I start the application
THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
WHEN I enter the team manager’s name, employee ID, email address, and office number
THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
WHEN I select the engineer option
THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
WHEN I select the intern option
THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
WHEN I decide to finish building my team
THEN I exit the application, and the HTML is generated
```

  ## Table of Contents
  - [Description](#description)
  - [Installation](#installation)
  - [Usage Information](#usage-information)
  - [Contribution](#contribution)
  - [Testing](#testing)
  - [Additional Information](#additional-info)

  ## Description
 This application was created to generate an engineering team profile based on user input using inquirer and creating an html page. We are using OOP and tests using Jest.

  ## Installation 
  clone repo install inquirer, run node index.js. If tests are required, use Jest.

  ## Usage Information
  Takes information from your command line using inquirer to answer questions regarding your project.

  ## Contribution
  Go to contribution page and add a contributing file on Github

  ## Testing
  Run "npm test" to run Jest for tests on constructors.


  ## Additional Information:
  Email: tdandino1005@gmail.com
  Github: [tdandino1005](https://github.com/tdandino1005)