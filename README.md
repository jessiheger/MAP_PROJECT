## Travel Journal

**[Click here to visit site](#)**

### Description:

A dynamic travel journal. Users can log in and input information about a completed or scheduled trip. For each trip, the accompanying and adjacent map will "fly" to the destinations recorded by the user as they scroll through their itinerary notes.


### ERD
![screen shot 2018-05-14 at 8 35 54 am](https://user-images.githubusercontent.com/13025907/40007547-f03fd7d8-5751-11e8-9de3-28c56d05a235.png)

### User Stories

This app is designed as an alternative to a paper travel journal/planner. Traditional travel blogs can be appear text-heavy and visually unappealing; this application allows for more interactivity in the experience of reading a travel blog and compliments the written content with a map that dynamically updates as the reader goes through the itinerary.

### Technologies Used

-   This is a full stack app built using React on the front-end, and Node and Mongoose on the back-end.
-   This app is deployed on Heroku and utilizes a Mongo database to store the data.
-   Each web page was designed using EJX, CSS, and bootstrap.
-   The database is structured with three models (referenced data): a User schema, and Trip schema, and a destination schema.
-   The app also includes the Mapbox GL JS API.

| Route        | Type           | Description  |
| ------------- |:-------------:| -----:|
| app.get('/') | GET | Renders Home page|
| router.get('/signup'   | GET      |   Renders sign up page |
| router.post('/signup'   | POST      |   Creates a new user |
| router.get('/login'   | GET      |   Renders log in page |
| router.post('/login'   | POST      |   Logs a user into their account |
| router.get('/trip'   | GET      |   Renders New Trip form |
| router.post('/trip'   | POST      |   Adds a trip to the user's records |
| router.get('/destination'   | GET      |   Renders new destination form |
| router.post('/destination'   | POST      |   Adds a destination to that user's trip |
| router.get('/logout'   | GET      |   Logs a user out |


### APIs used + descriptions

This app uses the Mapbox GL JS API to render the maps on the app and style them. These two APIs together create the results that you'll find at  [https://remindher.herokuapp.com/find](https://remindher.herokuapp.com/find).

### Modules used:

-   axios
-   bcrypt
-   body-parser
-   dotenv
-   cors
-   ejs
-   express
-   express-jwt
-   json-webtoken
-   passport
-   path
-   react-bootstrap
-   react-dom
-   react-mapbox-gl
-   react-router-dom
-   react-scripts

### Future fixes/features

-  Add geocoding API so that a user's lat/long coordinates can be added as a marker to the Worldview Map (on Home page) and each of the View Trip Maps (upon click of a trip in the user's Profile).
-  Allow user to add multiple destinations to one trip.
- Fix the ability for the trip list on the profile to update automatically once the user adds a New Trip.
- Fix the mapping of destination info on View Trip (upon click of a trip in the user's Profile); the app currently does not see the objects as objects and renders only the first landmark.
- Add markers of all user's desintations (from all trips) on the Home Page World Map.
- Add "fly over" Mapbox functionality to the View Trip Map so that as user is scrolling through the destination content, the map changes dynamically.
- Add ability for a user to share trip info with another non-user (allow it to function as a public travel blog).
- Allow the user to upload at least one picture with each desination (using Cloudinary API) so that pictures can be included in the destination section (on View Trip page), and potentially if you clicked on a marker on the WorldView Map (on Home Page) the landmark or city would pop up along with a picture you added.
- Add ability for user to update and/or delete a destination or trip from the database.
- Deploy on Heroku.

