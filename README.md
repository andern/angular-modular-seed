# angular-modular-seed
This is an application skeleton for modular AngularJS applications. Similar to
[angular-seed](//github.com/angular/angular-seed), but a more modular approach.

## Modules
Applications are split into several modules, where each module represents some
logically separated part of the application. A module should stand alone from
the rest of the applications, so that they can easily be shared. A module might
depend on several other modules though, in which case they must always be
shared together.

## How to deploy
Consider / the path of your application.
* Make the static folder accessible through /static
* Redirect all calls to /* to /static/index.html except /static/*

## Directory structure

    `-- static
        |-- app
        |   |-- app.js                          --> Initialization for main app
        |   `-- components                      --> Directory to place all components
        |       `-- component                   --> One component out of many possible
        |           |-- component-controller.js --> Controllers for component
        |           |-- component.html          --> Main layout for component
        |           |-- component-init.js       --> Initialization and route config
        |           |-- component-resource.js   --> Resources for component
        |           |-- component-service.js    --> Services for component
        |           `-- component-view.html     --> Secondary layout for component
        |-- css                                 --> Put local css files here
        |-- fonts                               --> Put local fonts here
        |-- images                              --> Put local images here
        |-- index.html                          --> Main layout for app
        `-- js                                  --> Put local javascript files here
