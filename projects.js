'use strict';

var projects = [];

<<<<<<< HEAD
function Projects (rawDataObj) {
  this.name = rawDataObj.name;
  this.name = rawData.name;
  this.tools = rawData.tools;//tools used
  this.url = rawData.url;
  this.gitHub = rawData.gitHub;
  this.about = rawData.about;
}
Projects.prototype.toHtml = function() {
  var $newProject = $('project.template').clone;
};


rawData.forEach(function(projectObject) {
  // REVIEW: Take a look at this forEach method; This may be the first time we've seen it.
  project.push(new Project(projectObject));
});

projects.forEach(function(project) {
  $('.project').append(project.toHtml());
});
=======
function Projects = {

>>>>>>> 834250fe863414de713382e2fda853305d555263
}
