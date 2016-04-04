# OC Videos
Barebones HTML website for a friend's video production company.

This site is a basic html project with some functionality build on top of node.js (especially for dealing with dependencies).

V1
The first version of the site is just basic html and css compiled from sass files. It doesn't load any kind of dynamic data and all the information is hard-coded in the html files.

V2
This is the most current version where the data is being loaded from a json file to make it easier to update the content of the site. In this case it's using precompiled handlebars templates with the necessary grunt tasks for automating the workflow.

The V2 is still not ready because I'm still working on getting the layout with dynamic data to work as it was working on the V1. Will replace the V1 currently on master when it's done.

To run the project:
You need to have node.js installed and simply type "npm install" on your Terminal and it will install the project dependencies.
Then just use "grunt dev" and it will start up the watch task that will precompile handlebars templates on the fly and start a local server so you can load json files in a local environment.

I guess that's it :)
