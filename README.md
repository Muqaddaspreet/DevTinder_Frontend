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
- Logout feature
- Profile
- Get the feed and add the feed in the store
- Build the user card on feed
- Edit Profile feature
- Show toast message on save of profile
- See all the connections
- see all the connection requests
- Feature - Accept/ Reject Connection Request
- Send/ Ignore the user card from the feed
- Signup new user
- E2E testing

Component design:
Body
Navbar
Route=/ => Feed
Route=/login => Login
Route=/connections => Connections
Route=/profile => Profile

# Deployment

- Signup on aWS
- Launch Instance
- chmod 400 <secret>.pem
- ssh -i "Mywebserver-secret.pem" ubuntu@ec2-54-145-11-5.compute-1.amazonaws.com
- Install node version 22.18.0
- git clone -> dependencies
- Frontend
  - npm i
  - npm run build
  - sudo apt update
  - sudo apt install nginx
  - sudo sytemctl start nginx
  - sudo sytemctl enable nginx
  - Copy code from dist(build files) to var/www/html
  - sudo scp -r dist/\* /ar/www/html
  - Enable port :80 of our instance
- Backend
  - npm install
  - allowed ec2 instance public ip on mongodb server.
  - installed npm i pm2 -g
  - pm2 start <name> -- start
  - pm2 start <name> --name "<newName>" -- start
  - pm2 logs, pm2 flush <name>, pm2 list
  - pm2 stop <name>, pm2 delete <name>
  - config nginx - /etc/nginx/sites-available/default
  - restart nginx - sudo systemctl restart nginx
  - modify the BASE_URL to /api in frontend.

- Adding a custom domain name
  - Purchased domain name from GoDaddy
  - Signup on Cloudflare
  - Change the nameservers on GoDaddy and point it to Cloudflare
  - Add a new domain name
  - Wait till nameservers update
  - DS record: Create an A record that is ponting to our public IP address.
  - Enable SSL for website

- Sending emails via SES
  - Create an IAM user
  - Give access to AMAzonSESFull Access
  - Amazon SES: Create an identity
  - Verify your domain name
  - Verify an email address identity
  - Install AWS SDK - v3 and refer to code example on github repo
  - Setup sesClient
  - Access Credentials should be created at IAM under Security Credentials tab
  - Add the credentials to the .env file
  - Write code for sesClient
  - Write code for sending email address
  - Make the email dynamic by passing more parameters
