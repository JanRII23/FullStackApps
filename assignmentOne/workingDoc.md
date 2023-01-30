Notes: Bulleted form, unless Singh entails that it has to be in paragraph form. Also this is just a draft and will remove unnecessary parts for final draft + organize it properly

Assignment 1 → Initial design ideas and high-level architecture

Questions to answer: 
1. Discuss your initial thoughts in detail on how you will design this application? (2 Points)
    * Validations in place for all fields that are required + never done coverage reports 
    * Full stack application
    * Requirements Cross-referenced with future assignments 
    
    * User Registration
        * Username input field
        * Password input field
        * Sign-up button
        * Save new user in the database (must be unique)
        * Successful message pop-up?
    * User Login
        * Username input field → ID in the database
        * Password field → hashed in the database
        * Submit button
        * Successful message pop-up?
    * Dashboard (Role-based login → 2 users User & Admin)
        * Admin Dashboard
            * Show cases client information/history
        * Client Dashboard → all going to be in the database
            * https://www.calculator.net/loan-calculator.html (general layout)
            * Full name (50 char, required)
            * Address 1 (100 char, required)
            * Address 2 (100 char, optional)
            * City (100 char, required)
            * State (drop-down, required) → DB will convert it as a 2-character state
            * ZipCode (9 char, at least 5 char length)
    * Fuel Quote → in the DB
            * Gallons requested (numeric, required)
            * Delivery Address (non-editable, comes from client profile)
            * Delivery date (calendar, date picker)
            * Suggested price / gallon (numeric non-editable)
            * Total amount due (numeric non-editable)
    * Navbar
        * Logout
        * Client settings
        * Fuel UI (price estimator)
    * Security Measures
        * URL guards
        * Input Form validations
        * Session tokens?
    * APIs
        * Sign-up & Login API
        * Encryptions
        * Gas Prices API → not necessary
    * Tech Stack → ASP.NET
        * Front-End
            * Angular + Typescript + SCSS + Angular components (bootstrap??)
        * Back-end
            * .NET & SQL

2. Discuss what development methodology you will use and why? (2 Points)
    * The SDLC model that is going to be used will be Agile. The Agile model is an adaptive model that combines an iterative and incremental process for software development. Furthermore, Agile focuses on user/client feedback with the intention of rapid release of a working product until project deadlines. 
        * With Agile, as the leading SDLC model adopted in the modern tech industry, it will expose use as a group to user-focused development model 
        * Also talk about despite being deadlines for front-end, back-end, etc…. We will constantly make changes as needed and finalize until the Demo phase

3. Provide High Level Design / Architecture of your solution that you are proposing (6 Points)

    * Refer to the png's attached in the current directory
