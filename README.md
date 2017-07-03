# tempus

> authors: Pulkit Kashyap and Brian Lin

# Getting started

## Installing

1. Clone or download the repo (using Terminal, saving as a .zip, etc.)

2. Find the downloaded folder 

3. run `npm install`. This installs all the dependencies specified in our `package.json` list of dependencies. You can't run the project without them.

## Running the project

run `npm start` to run the server. By default, you should be able to find the site at `localhost:3000`. 

## Testing and linting before submission

Before committing any code to master, make sure you run both `npm test` and `npm lint`. `npm test` runs Karma unit tests to make sure that your changes haven't broken anything. `npm lint` checks that all changes follow our `.eslintrc` style guide. 

## Submitting code

After making changes, pull down any new changes and put yours on top (`git pull --rebase`), add your files (`git add <name of file>`), commit (`git commit -m "message goes here"`), and then push your branch to the remote repository on Github.com (`git push origin <name of branch>`). 

Now you can go to our repo on Github.com and make a pull request into master. It'll tell you if there's any conflicts. Obviously, if there are any, fix them and then make a new request. If it looks good, then assign a reviewer and submit your pull request. 

It things look good, then you can go ahead and merge your branch into master. If not, make any changes mentioned by the reviewer until your commit looks good. 

## Acknowledgements

I'd like to thank both the makers of the [react-redux-starter-kit](https://github.com/davezuko/react-redux-starter-kit) and the rest of the HackDuke tech team that I learned so much from last Fall. 
