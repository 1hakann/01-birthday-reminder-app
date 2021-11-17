# React project 1: Birthday Reminder

This project deploy here [Create React App](https://1hakann.github.io/01-birthday-reminder-app).

## To clone the project

git clone https://github.com/1hakann/01-birthday-reminder-app.git
In the project directory, you can run: npm run start
Node must be installed to run the project.

### Description

This app aims not to miss the special days of the people you love by reminding them of their birthdays.

Birthday Reminder, the first of the React app series of practice apps, includes learning React step by step.

The css design has been cloned as an example. But the first section with root variables was prepared to be handled separately for the second and third components, which are the main skeleton of the application.

### The project progressed as follows

First of all, useState, data file, css and List component were imported in App js.

Then people variable sets are defined and these two are synchronized by taking the data with useState.

Then the return method skeleton to be rendered was created.

In the next step, the data file was created in json format.

So far, the first two style steps have been written in the css file.

After that, the List component was created as an arrow function with React import. The return content is generated as a single list view.

As the next step, a List component and a button were added to App js. Data count was taken and added in the header.

Added people attribute to List component. and people sent.

Now the List component is back. People are received via parameter. Then, it was navigated with the people map method and each of the data sections was taken as a variable. The list has been added to this field by adding the Return.

We can now add each of these variables to their respective fields. After that, we added the key to the parend tag and gave it an id. For img src, we called name in h4 for image sub and age in p. Hurrayyy! Our data has been successfully listed.

Now we can write css for List and people.

Finally, let's add functionality to our button. Let's clear our list. That's why we added onClick. Here we added setPeople with the arrow function and gave it as an empty array. We can test it. It must be working.

Before we finish, let's add our css codes for our button. Here is the Birthday Reminder App with its first version.
### Deployment

Now it's time to deploy.

For this, let's add a homepage to package.json. Let's add git remote set-url as origin. Then let's add the predeploy and deploy commands to the scripts. Now let's do npm install gh-pages --save-dev. Now let's perform the build and then deploy operations. That is all.

Improvements will be made for the next versions.

Good coding.