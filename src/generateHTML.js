function generateHTML(managerArray, engineerArray, internArray) {
    return `
      <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta http-equiv="X-UA-Compatible" content="ie=edge" />
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous">
      <link rel="stylesheet" type="text/css" href="../dist/style.css" />
      <title>The Team</title>
    </head>
      <body>
          <header>
              <h1 class="navbar">The Team</h1>
          </header>
          ${generateTeam(managerArray, engineerArray, internArray)}
      </body>
  </html>
      `;
  }
  
  function generateTeam(managerArray, engineerArray, internArray) {
    let html = '';
    html += generateManager(managerArray[0]);
    for (i = 0; i < engineerArray.length; i++) {
      html += generateEngineer(engineerArray[i]);
    }
    for (i = 0; i < internArray.length; i++) {
      html += generateIntern(internArray[i]);
    }
  
    function generateManager(manager) {
      return `<div class="card" id="manager-card">
    <div class="card-header">Manager</div>
    <div class="card-body">
    <h5 class="card-title">${manager.getName()}</h5>
    <ul class="list-group list-group-flush">
        <li class="list-group-item">Employee ID: ${manager.getId()}</li>
        <li class="list-group-item"><a href="mailto:${manager.getEmail()}">Email: ${manager.getEmail()}</a></li>
        <li class="list-group-item">Office Number: ${manager.getOfficeNumber()}</li>
      </ul>
    </div>
  </div>`;
    }
  
    function generateEngineer(engineer) {
      return `<div class="card" id="engineer-card">
    <div class="card-header">Engineer</div>
    <div class="card-body">
    <h5 class="card-title">${engineer.getName()}</h5>
    <ul class="list-group list-group-flush">
        <li class="list-group-item">Employee ID: ${engineer.getName()}</li>
        <li class="list-group-item"><a href="mailto:${engineer.getEmail()}">Email: ${engineer.getEmail()}</a></li>
        <li class="list-group-item"><a href="https://github.com/${engineer.getGithub()}" target="blank">Github: ${engineer.getGithub()}</a></li>
      </ul>
    </div>
  </div>`;
    }
  
    function generateIntern(intern) {
      return `<div class="card" id="intern-card">
    <div class="card-header">Intern</div>
    <div class="card-body">
    <h5 class="card-title">${intern.getName()}</h5>
    <ul class="list-group list-group-flush">
        <li class="list-group-item">Employee ID: ${intern.getId()}</li>
        <li class="list-group-item"><a href="mailto:${intern.getEmail()}">Email: ${intern.getEmail()}</a></li>
        <li class="list-group-item">School: ${intern.getSchool()}</li>
      </ul>
    </div>
  </div>`;
    }
  
    return html;
  }
  
  module.exports = generateHTML;