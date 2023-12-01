# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


React State and Props
Overview
By the end of this module, you will create an application that displays images and information of horned animals. This application will allow you to filter the beasts by number of horns and chose your favorite beast.

In this class, your goal is to use the JSON file provided to display the title, image and description of each horned beast in your application.

Resources
data.json
Time Estimate
For each of the features listed below, make an estimate of the time it will take you to complete the feature, and record your start and finish times for that feature:

Number and name of feature: ________________________________

Estimate of time needed to complete: _____

Start time: _____

Finish time: _____

Actual time needed to complete: _____
Add this information to your README.

Feature #1: Display Images
Why are we implementing this feature?
As a user, I want to view the images on the page so that I can browse the photo collection.
What are we going to implement?
Given that a user opens the application in the browser
When the user navigates to the home page
Then the photo gallery should display all of the beasts' images in the gallery.
How are we implementing it?
The Gallery component should pass props for the title, image and description to each HornedBeast component. You will find this information in the provided JSON file.
Feature #2: Allow Users to Favorite Individual Beasts
Why are we implementing this feature?
As a user, I want to be able to interact with the site and favorite beasts.
What are we going to implement?
Given that a user opens the application in the browser
When a user clicks on an image of a beast
Then the number of "Favorites" displayed on that beast will increase by one.
How are we implementing it?
Create state inside of the HornedBeast component that keeps track of the number of times each beast has been favorited.

Put a heart in each HornedBeast component with the number of “Favorites” next to it.

Feature 3: Bootstrap
Why are we implementing this feature?
As a user, I want to see a visually pleasing application that is also reponsive when I view this application on different screen sizes.
What are we going to implement?
Given that a user opens the application in the browser
When the images are displayed on the screen
Then each image should be rendered in a visually pleasing way: in columns, as screen width allows.
How are we implementing it?
Bring in the react-bootstrap library and use it to style your application making sure that it is responsive.
Stretch Goal: Add Interaction
Why are we implementing this feature?
As a user, I want to be able to interact with each item on the page.
What are we going to implement?
    Given that a user opens the application in the browser
    When a user clicks on an item other than the horned beasts, such as the title of the page or the footer,
    Then the information and styles should change.
How are we implementing it?
When the user clicks on elements such as the header, footer or title of page, make something change using state.
You can update the words, change the styles or add something new. Be creative.

Submission Instructions
Complete your Feature Tasks for the day
Run your Lighthouse Accessibility report looking for a score of 65 or higher. Make adjustments as needed.

![Alt text](image.png)


Create a Pull Request (PR) back to the main branch of your repository

On Canvas, submit a link to your PR and a link to your deployed application on Netlify. Add a comment in your Canvas assignment which includes the following:
A question within the context of the lab assignment
An observation about the lab assignment, or related ‘Ah-hah!’ moment


## How long you spent working on this assignment?


Feature #1: Display Images
Estimate of time needed to complete: 1.5 hours
Start time: 6:00 pm
Finish time: 8:30 pm
Actual time needed to complete: 2.5 hours
Record this information in your README.

Feature #2: Allow Users to Favorite Individual Beasts
Estimate of time needed to complete: 1.5 hours
Start time: 8:30 pm
Finish time: 10:00 pm
Actual time needed to complete: 2.5 hours
Record this information in your README.

Feature #3: Bootstrap
Estimate of time needed to complete: 2.5 hours
Start time: 10:00 pm
Finish time: 1:20 am
Actual time needed to complete: 4.5 hours
Record this information in your README.

## Lab: Class 03

Time Estimate
For each of the features listed below, make an estimate of the time it will take you to complete the feature, and record your start and finish times for that feature:

Number and name of feature: ________________________________

Estimate of time needed to complete: _____

Start time: _____

Finish time: _____

Actual time needed to complete: _____
Add this information to your README.

Feature #1: Display a Modal
# Why are we implementing this feature?

As a user, I want the image to be displayed in a larger size and with the description shown so that I can view the details of a single image.

# What are we going to implement?

Given that a user wants to view the details of the image
When the user clicks on an individual image
Then the image should render larger on the screen with the description displayed

# How are we implementing it?

Import the data.json file into your App component and send that data into the Gallery component
Map over the JSON data in your Gallery component to render each beast
Send a function into your Gallery component that allows the user to update state in the App
Create a SelectedBeast component and include it in your App
Use the state in the App to render an individual beast in a Modal in the SelectedBeast component using React Bootstrap.


# Lab: Class 04
Forms and Filter

## Overview

This is the last class of our Gallery Of Horns. You have horned creatures displaying on the page. When you click on a beast, you increase its favorites and display it as a modal. We will be adding one more piece of functionality: filtering by numbers of horns.

##  Feature 1. Filter by Numbers of Horns
Git f
### Why are we implementing this feature?

As a user, I want to be able to view the beasts by the number of horns
What are we going to implement?
Given that a user is presented with filtering options
When the user clicks on one option
Then the images should be filtered accordingly
How are we implementing it?
Using the Form component of react-bootstrap, build a drop down menu so that the user can choose to filter by number of horns.
When the user chooses one of the options, the correct images should be displayed

![Alt text](image-1.png)