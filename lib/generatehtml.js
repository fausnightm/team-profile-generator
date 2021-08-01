const path = require("path");
const fs = require("fs");
const templatesDir = path.resolve(__dirname, "../src");

// renderHTML function that will filter through the employees by role and map them to their respective HTML divs, then it pushes the div to the HTML array.
const renderHTML = employees => {
    const html = [];
  
    // filtering roles
    html.push(...employees
      .filter(employee => 
        employee.getRole() === "Manager")
      .map(manager => 
        createManager(manager))
    );

    html.push(...employees
      .filter(employee => 
        employee.getRole() === "Engineer")
      .map(engineer => 
        createEngineer(engineer))
    );

    html.push(...employees
      .filter(employee => 
        employee.getRole() === "Intern")
      .map(intern => createIntern(intern))
    );
    
    return renderMain(html.join(""));
  
  };

//   Create HTML via templates

const createManager = manager => {
  let template = fs.readFileSync(path.resolve(templatesDir, "manager.html"), "utf8");
  let input = ["name","role","email","id","phone","github","school"]
  
  template = replacePlaceholders(template, input[0], manager.getName());
  template = replacePlaceholders(template, input[1], manager.getRole());
  template = replacePlaceholders(template, input[2], manager.getEmail());
  template = replacePlaceholders(template, input[3], manager.getId());
  template = replacePlaceholders(template, input[4], manager.getPhone());
  return template;
};

const createEngineer = engineer => {
  let template = fs.readFileSync(path.resolve(templatesDir, "engineer.html"), "utf8");
  let input = ["name","role","email","id","phone","github","school"]

  template = replacePlaceholders(template, input[0], engineer.getName());
  template = replacePlaceholders(template, input[1], engineer.getRole());
  template = replacePlaceholders(template, input[2], engineer.getEmail());
  template = replacePlaceholders(template, input[3], engineer.getId());
  template = replacePlaceholders(template, input[5], engineer.getGithub());
  return template;
};

const createIntern = intern => {
  let template = fs.readFileSync(path.resolve(templatesDir, "intern.html"), "utf8");
  let input = ["name","role","email","id","phone","github","school"]

  template = replacePlaceholders(template, input[0], intern.getName());
  template = replacePlaceholders(template, input[1], intern.getRole());
  template = replacePlaceholders(template, input[2], intern.getEmail());
  template = replacePlaceholders(template, input[4], intern.getId());
  template = replacePlaceholders(template, input[6], intern.getSchool());
  return template;
};

  // the function that takes the html array from the renderHTML function and creates the index.html file 
const renderMain = html => {
  const template = fs.readFileSync(path.resolve(templatesDir, "main.html"), "utf8");
    return replacePlaceholders(template, "team", html);
};

// function that replaces all the placeholders in the HTML template based on the values assigned to each class
const replacePlaceholders = (template, placeholder, value) => {
  const pattern = new RegExp("{{ " + placeholder + " }}", "gm");
    return template.replace(pattern, value);
};

module.exports = renderHTML;