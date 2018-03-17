This project has been configured with angular base and angular route working.
A sample angular route has been define in web.php.
A sample angular master and angular child have been created in views folder

Also on the angular side we have set up an angular folder in public. This should hold the views for the angular router service.

We have set up a sample entry point for our angular app in resources/assets/js/angular/angular-app.js file. This file requires the angular modules,
then initializes a module, then loads the files for the routes and the controllers. In this file too global jquery codes can be written here. Route specific jquery
codes can be written in their respective controllers

In the setup side we have set up mix to export the angular-app.js file to the public folder.

Customize and keep hacking
