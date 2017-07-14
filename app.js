'use strict';
//constructor function to instantiate every project in my portfolio
function Project (name, tools, url, gitHub, about){
  this.name = name;
  this.tools = tools;//tools used for this project
  this.url = url;
  this.gitHub = gitHub;
  this.about = about;

//event listener
$(function() {
  $('.tab-content').hide();
});

$('.nav-items > a').on('click', function() {
  $('.tab-content').hide();
  $('#' + $(this).data('tab'));
});
=======
>>>>>>> 834250fe863414de713382e2fda853305d555263
