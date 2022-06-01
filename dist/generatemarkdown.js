function generatemarkdown(teamMember) {
    let cards = ''
    for (let i = 0; i < teamMember.length; i++) {
        if (teamMember[i].getRole() === 'Manager') {
            cards = cards + managerCard(teamMember[i])

        }
        if (teamMember[i].getRole() === 'Engineer') {
            cards = cards + engineerCard(teamMember[i])
        }
        if (teamMember[i].getRole() === 'Intern') {
            cards = cards + internCard(teamMember[i])
        }
    }
    return `<!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">
        <link rel="stylesheet" href="../dist/style.css">
        <title>Team Builder</title>
    </head>
    
    <body>
        <header class="header">Team Pinapple on Pizza</header>
        ${cards}
        </body>

        </html>
    `
}
function managerCard(manager) {
    return `    <div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">${manager.name}</h5>
      <p class="card-text">Manager</p>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">Employee ID:${manager.id}</li>
      <li class="list-group-item">Email:${manager.email}</li>
      <li class="list-group-item">Office Number:${manager.email}</li>
    </ul>
    <div class="card-body">
     
    </div>
  </div>`
}
function engineerCard(engineer) {
    return `      <div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">${engineer.name}</h5>
      <p class="card-text">Engineer</p>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">Employee ID:${engineer.id}</li>
      <li class="list-group-item">Email:${engineer.email}</li>
      <li class="list-group-item">GitHub name:${engineer.github}</li>
    </ul>
    <div class="card-body">
    
    </div>
  </div>`
}
function internCard(intern) {
    return `      <div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">${intern.name}</h5>
      <p class="card-text">Intern</p>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">Employee ID:${intern.id}</li>
      <li class="list-group-item">Email${intern.email}</li>
      <li class="list-group-item">School:${intern.school}</li>
    </ul>
    <div class="card-body">
     
  </div>`
}
module.exports = generatemarkdown