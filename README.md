# OC Videos
#### Simple HTML website my friend [Óscar Chaves](https://www.linkedin.com/in/oscarchavesoc/en) video production company.

###### This site is a basic html project with some functionality build on top of [node.js](https://nodejs.org/en/) to handle the local server and dependencies and also using [grunt.js](http://gruntjs.com/) for automation and task management.

--------------
## V1 - Static HTML
The first version of the site is just basic html and css compiled from sass files. It doesn't load any kind of dynamic data and all the information is hard-coded in the html files.

## V2 - Json data and Handlebars templates
This is the most current version where the data is being loaded from a json file to make it easier to update the content of the site. In this case it's using precompiled **handlebars** templates with the necessary grunt tasks for automating the workflow.

The V2 is still not ready because I'm still working on getting the layout with dynamic data to work as it was working on the V1. Will replace the V1 currently on master when it's done.

To run the project:
* Clone the repo in your hard-drive by typing:
`git clone https://github.com/pedronym/ocvideos.git`
* You need to have node.js installed and simply type `npm install` on your Terminal and it will install the project dependencies.
* Inside the project folder type `grunt dev` and it will start up the watch task that will precompile handlebars templates on the fly and start a local server so you can load json files in a local environment.

It should be working and running on `localhost:8080`.
