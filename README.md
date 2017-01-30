# Dumbledore's Army

#### _Angular Extended Independent Project Independent Project for Epicodus, 1.29.17_

#### By _**Michelle Llaguno**_

## Description

_This is a website that manages a group of members._

## User Stories:
* As a user, you can visit a page to see a list of all members.
* As a user, you can click a member's entry in the list to visit their profile page, which include more details about them.
* As a user, you have the option to visit an "About" page that explains what the group is, and what they do.
* As a user, you'd like all data persisted in a database, so it's always there when you need it.
* As a user, you can filter the list of users by their particular role in the group, or some other information/category.
* As an administrator, you can add new users to the club.
* As an administrator, you can edit user profiles, in case you make a mistake, or need to update their details.
* As an administrator, you have the option to delete a user, in case they leave the group.

## Prerequisites

You will need the following properly installed on your computer.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/) (with NPM)
* [Bower](https://bower.io/)
* [Angular](https://angular.io/)

## Setup/Installation Requirements

#### Run these on the command line:
* `git clone https://github.com/gitmichelle/dumbledores-army.git`
* `cd dumbledores-army`
* `npm install`
* `bower install`

#### Setup Firebase
* Make free account at [Firebase's website] (http://firebase.google.com/)
* Once you've created an account, you should be taken to a user dashboard area, with an option to Create a New Project. Select this option, provide a name for your new project, and select your Country/region from the drop-down menu.
* You'll then be taken to an "Overview" area. Where you'll be offered three options. Select Add Firebase to your web app. Firebase should respond with a pop-up modal window. Keep the information in this modal handy.
* Install AngularFire `$ npm install angularfire2 firebase --save`
* Add `"types": [ "firebase" ]` to the end of you src/tsconfig.json file
* Create a new file called api-keys.ts in the src/app directory and place the Firebase credentials (the information Firebase provided in that modal window), like this:
  * export var masterFirebaseConfig = {
    apiKey: "xxxx",
    authDomain: "xxxx.firebaseapp.com",
    databaseURL: "https://xxxx.firebaseio.com",
    storageBucket: "xxxx.appspot.com",
    messagingSenderId: "xxxx"
  };
* Your file should have your specific Firebase credentials and other information here, instead of xxxx.
* Add `#Firebase credentials
/src/app/api-keys.ts` to your .gitignore file.


## Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class/module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Deploying to GitHub Pages

Run `ng github-pages:deploy` to deploy to GitHub Pages.

## Further help

To get more help on the `angular-cli` use `ng help` or go check out the [Angular-CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Technologies Used

* _HTML_
* _CSS_
* _Angular.js_
* _Javascript_
* _JS Apps_

### License

*{Open Source.}*

Copyright (c) 2017 **_{Michelle Llaguno}_**
