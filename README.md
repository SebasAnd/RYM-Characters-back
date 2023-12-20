#RYM App
This project is a character list of the popular series "Rick and Morty," and the data is fetched from the GraphQL REST API.

#Back-end
The server, built with Node.js and Express, runs locally on the default port "3000." The primary endpoint, "/characters," utilizes the Axios library to retrieve information about the characters from the GraphQL API. The server then returns this list in JSON format for consumption by the front-end.

#Front-end
The front-end, developed using Next.js, presents character information to users. The data is loaded on the initial page load and sent to a component called "Cardgrid," which organizes and displays the data. The page also features a paginator that enables users to navigate through different pages of the GraphQL API on demand.
