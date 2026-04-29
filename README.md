# Lab: Bookstore Manager

## Introduction

You are working for a social media website, they need to build functionality to display random posts to the user for a random tab they have. In order to do this they need you to access an external api to gather all the post then loop through and display those posts.

## Challenge
1. Access external api and 
2. Display post 
3. Use Async/await

## Instructions

1. **Fork and Clone the Repository:**
   - Go to the provided GitHub repository link.
   - Fork the repository to your GitHub account.
   - Clone the forked repository to your local machine.
   - Open the project in VSCode.
   - Run `npm install` to install all necessary dependencies.

2. **Fetch Data from an API**
   - Using the fetch method fetch to https://jsonplaceholder.typicode.com/posts

3. **Display Posts**
   - Create Function to Display Posts called `displayPosts()` 
      - Pass in the array of posts
      - Loop through the posts list, in the loop:
         - Create an `li` element
         - Create an `h1` element 
            - Set textContent to the title of the post
         - Create an `p` element
            - Set textContent to the body of the post         
         - Append h1 and p to li
         - Append li to the ul
            - ul has an id of `post-list`   
   - Call `displayPosts()` after fetch

4. **Refactor with Async/Await**
   - Create function to house fetch and apply async to function
   - Apply await to fetch


weignstone@weignstone-ThinkPad-T470:~/Documents/lab-async-await$ npm test

> lab-async-await@1.0.0 test
> mocha --timeout 5000 --reporter spec



  Asynchronous Fetching 
    1) should fetch to external api and add information to page
    2) should create an h1 and p element to add


  0 passing (425ms)
  2 failing

  1) Asynchronous Fetching 
       should fetch to external api and add information to page:
     AssertionError: expected '\n    ' to include 'sunt aut'
      at Context.<anonymous> (test/indexTest.js:47:38)

  2) Asynchronous Fetching 
       should create an h1 and p element to add:
     TypeError: Cannot read properties of null (reading 'textContent')
      at Context.<anonymous> (test/indexTest.js:54:15)

