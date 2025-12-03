# DevTinder

- Created a Vite + React project
- Remove unnecessary code
- Install Tailwind CSS
- Install daisyui and navbar component
- Create the navbar in a seperate component file.
- install react-router
- Creeate BrowserRouter
- Create Routes > Route=/ -> Body > RouteChildren
- Create an Outlet in Body component
- Create a Footer
- Create a login page
- Install axios
- CORS - install cors in backend => add middleware to app.js with configurations: origin, credentials: true
- Whenever making an API call from the frontend, pass axios => {withCredentails: true}.
- Install react-redux toolkit => configureStore => Provider => createSlice => add reducer to the store.
- Add redux dev tools in chrome
- Login to see the incoming data
- Navbar updates as soon as user logs in
- Refactor code to add constants file + add a components folder
- You should not be able to access other routes without login
- If the token is not present, Redirect the user to the login page
- Logout
- Profile

Component design:
Body
Navbar
Route=/ => Feed
Route=/login => Login
Route=/connections => Connections
Route=/profile => Profile
