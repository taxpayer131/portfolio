'use strict';
//constructor function to instantiate every project in my portfolio
function Project (name, tools, url, gitHub, about){
  this.name = name;
  this.tools = tools;//tools used for this project
  this.url = url;
  this.gitHub = gitHub;
  this.about = about;
}
