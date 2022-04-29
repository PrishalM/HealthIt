# Lap2Project - HealthIt

Gebru Lap 2 Project Team HealthIt:

- Diren Nayir
- Doreen Kamushinda
- Prishal Makwana

Released 22/04/2022 14:00, Sumbitted 29/04/2022 [15:00]

## Description

- HealthIt is a habit tracking app for newly health conscious 18-45 year old university students or young professionals that want to start tracking their healthy habits

---

# Installation & Usage

## Installation

- Clone or download the repo
- cd into the repo/api folder in your terminal
- Open Docker desktop
- To start server, run bash _scripts/startDev.sh
- To start testing, run bash _scripts/startTest.sh
- To visit client-side, visit http://localhost:8080 or http://healthit.netlify.com
- 

## Usage

-

---

# Technologies

- HTML/CSS
- JavaScript
  - Node.js
  - Express
  - Cors
  - Jest
  - Supertest
  - Nodemon
- Bootstrap 5
- Docker
- PostgreSQL
- Bcrypt
- JSON Web Token
- 

---

# Process

Agreed on our way of working

- Agreed on a single method of communication about this project (slack)
- Agreed on what branches we will work in and will only merge in main after communicating to the rest of the team via slack
- Agreed where our single point of truth for this application will be stored (Figma)
- Agreed a rough plan of how we intend the week to go

Understanding the problem

- Tried to understand the core need for the application and wrote this in a single sentence

Defining and refining

- Defined the core requirements of the application and added each requirement as tickets in a kanban board
- Went through each ticket as a team to ensure we are all aligned with the requirments and how we indend to tackle the ticket

Design planning

- Found a few examples of similar journalling websites and took full screenshots of them
- Using Figma, as a team we went through each of these example screenshots and discussed what we liked and disliked about thier design
- Then as a team we drew a LoFi wireframe of our application

Organising and planning

- Assigned a few tickets to each team memeber
- Planned regular catch up sessions each day (morning, afternoon, evening) to see how everyone is doing and if we need to re-align/re-distribute work

---

# Wins & Challenges

## Wins

-Creating Users and storing their data in our database with hashed passwords 
-Authentication - using JSON Web Token to authenticate users
-Creating habits,storing data persistently in our database
-Retrieving data from API endpoints
-Testing coverage for server-side above 70%
-Using PostgreSQL effectively

## Challenges

-JSON Web Token authentication
  -Storing token data locally
  -
 -Storing user account details
 -Problems with Docker setup
 
 

---

# Bugs (that still exist)

[ ] Unable to display habit data on front-end
[ ] Edit/delete habit queries not connected to the front-end
[ ] Not completely mobile responsive

---

# Future features

-Users will be able to create their own custom habit
-Users will be able to specify additional properties (e.g. exercise intensity, bedtime) to their habits
-Encourage community interaction (e.g. implement messsageboard/forum for users)

---

# Licence

- MIT Licence

Copyright 2022

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
