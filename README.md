# friendFinderHW

Homework assignment for UCB CS

Friend finder is a basic server app which utilizes express to demonstrate GET and POST routes.
Express is used to Create a basic server with routes linked in the Routes folder. the server links to those routes and 
handles communication. This Porject has two display routes the home page, and the servey page. The home page is just a button which 
takes you too the servey page. The servey page consists of a ten question quiz along with a request for a name and photo. Jquery and Choosen 
is used to pull multiple choice values and the name and put it into an object which is sent in a post Request the API backend.
There are TWO API routes GET friends and Post Friend. The first is used to get all the friends from the freinds.js export. the second is to
post values from the front end into the server. The backend server will take this post data and compare it to the friends.js looking for a match.
when doing this is will first find the difference between the users score and each friend in the data folder. It will than find the match with
the smallest difference. After the loop is complete it will return the best match in a modal..


Overall this activity was super easy the major challenges were in using chosen in jquery since i was unfamiliar with that lib.
Future improvements would be to use an SQL server instead of a exported JS file.
Rate this assaignment 2/10 difficulty 3/10 fun 6/10 usefullness
