# Real-Time Dashboard
This application simulates a real-time article stream. The data is being written to RethinkDB database and the client listens to database changes via a web socket.

Key technologies include React, D3.js, express, socket.io and RethinkDB.
## Client
Client-side code is written in React. The main enclosing component `index.js` 
wraps all the other components, fetches existing data from the server and listens to database changes via a web socket.

### Data Structure
On the front-end, articles are stored in an object with country names as keys:

    datasetInit  = {
    'United States': [article1, article2, ...],
    'United Kingdom': [article5, article 6, ...],
    ...
    }

This data structure is justified if we assume a user will be, most of the time, browsing the list of articles per country. In that case, articles per country are always in a sorted order, and new sorting only happens when combining articles from all countries to display a full list.

### Web Socket
A socket.io client is initialised to listen for any database changes of *add* type. After a new database update is received, the new article is added to the data structure for a particular country.

### Routing
The app uses React Router with two routes: `/all` and `/:country`. The country param is used in the `componentDidUpdate` lifecycle method of the LiveChart to identify whether a new chart needs to be drawn on a country change.

### Visualization
The visualisation uses a line chart to depict the number of articles per country for a given day. The historical data is generated randomly while the current data represent the actual number of articles for all countries or a given country as received via web socket updates.
## Server
The server uses *express* library with two api routes. `/api/articles` responds with article data. The fallback route `/*` returns the index.html file.

Once the database connection is established, a changefeed is set up on the **articles_new** table to listen for changes and emit socket events. The simulation then writes new articles into the database in 2-second intervals.

After the number of items in **articles_new** reaches 50, the table is wiped clean and the cycle is re-initiated.
## Database
The application uses 2 tables. **articles** table stores today's articles that are fetched on the initial load, **articles_new** stores articles that are being written in real-time. This separation has been done to simplify the simulation.

To make the line chart look "normal", the simulation needs to be reset to its initial state after a certain number of articles has been added. With one table for all articles, this would require closing the connection (to stop the changefeed), re-initialising the table and re-opening the connection. This would overcomplicate server code.

Note: Because of the need to separate the tables for the purposes of the simulation, the real-time data shown on the client represent only new articles that have been received since the client has been loaded. Therefore, if two clients load at different times, the new articles displayed might differ. I'm aware of this issue and it would be avoided in a real-world implementation, since there would be no need to separate the articles into two tables.
