# Batter's Up: Who's Hot (and Not) in Major League Baseball
A group project by Xavier Fegan, Robert Shoemaker and Don St. John
## Our Objective
To fulfill a class assignment, we built the front end and back end of a web application that views the offensive players in Major League Baseball for four key statistical categories -- hits, home runs, runs batted in (RBI) and batting average. We allow user search for any player by name and display a chosen player's statistics as they are, plus viewed against the league average for the category.
## Technologies
For the front end, we used standard HTML tagging and CSS styling, plus Bootstrap as a CSS framework to ensure mobile responsiveness and layout simplicity. A jQuery autocomplete method does a sort of players as the user types to narrow down a dataset of nearly 1,000 records and returns the chosen value. On the HTML end, we use Handlebars to insert partialsl with a search return that carries the basic information; other Handlebars partials return charts to show the player's stats against the league averages. We used Chart.js, a new package not taught in our class, for the chart scripting. Data was obtained via a publicly accessible store of player statistics.
On the back end, routes are written to use Express.js to establish the communication between the front and back ends, with the Sequelize package and MySQL2 to enable the database. Authentication is handled with Express's and Sequelize's session capabilities.
## Routes
Routes feature a GET request for the basic search and return. In addition, authenticated users have access to a POST route that enables new players to be added to the database (for example, a player who is called up from the minor leagues can be added in this fashion).
