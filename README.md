# __Friend Finder App__

## __Table of Contents__
* Overview
* Technologies
* Local Installation
* Future changes

## __Overview__
  Going on a quest, and need some company? Fictional Friend Finder is what you're looking for! Fictional Friend Finder is an application where you answer some questions about yourself, and we provide a companion that you would get along with while you're on your quest!

## __Technologies__
* HTML
* JavaScript
* Node.js
* #### __NPM Requirements__
  - express
  - path
  - body-parser
   ```
   var express = require("express");
   var path = require("path");
   var bodyParser = require("body-parser");
   ```

## __Local Installation__
* #### __Step 1: Git Clone__
    Clone the Friend Finder App to your local computer by opening your terminal, navigating to the folder you want to store it in and input:
    ```
    git clone https://github.com/BlakeMarter/Friend-Finder.git
    ```
    The Friend Finder App and its files should now be in your project folder.


 * #### __Step 2: Install Reaquired NPM's__
  
      - Navigate to the correct JS file in your terminal and input `npm install` or `npm i`.

## __Demo__

You can check out the demo on heroku!

https://hidden-plains-50144.herokuapp.com/


## __Future Changes__

In the future, the form validation will be corrected. At the moment, the form displays onload as invalidated. The form will not submit until every field is filled in, but this will be changed to only display as not validated only after clicking the submit button, and fields are empty.