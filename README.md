# Datin Platform Web App (v 1.0)

Author: Jiaao Yu, Li Liu
Sponsor: Jose Alvarado

## About this Project
<p style="font-size:16px">This project involves the design and development of an application and website for use by Jose Alvarado. The application will be called ‘Milk Meets Tea’ and can serve as a one-stop platform for all of the user's dating-related services. Users can view profiles of vetted service providers and hire them. The platform will also provides a ‘Groups’ feature where users can chat with each other in private groups. </p>


### Flow Diagram
![](https://i.imgur.com/GblHCKe.jpg)


### Features

<li>Sign Up/ Login</li>
<Li>Edit Profiles, uploads profile images, and add dating prompts</Li>
<Li>Display personal profile and photo galleries</Li>
<Li>Edit Profiles, uploads profile images, and add dating prompts</Li>
<Li>Reset password and email</Li>


### How to use?


<pre><code>
# Install dependencies
$ npm install

# Run the server
$ nodemon start

# Run the client
$ npm start

# Access:
http://localhost:3000
</code></pre>

### Tools & Libraries
<h4>Tools</h4>
<ul>
    <li>Front End
        <ul>
            <li>React</li>
            <li>JavaScript</li>
            <li>BootStrap</li>
            <li>React-images</li>
        </ul>
    </li>
    <li>Front End
        <ul>
            <li>Node.js(JavaScript)</li>
            <li>Express</li>
            <li>Postman</li>
            <li>Nodemailer</li>
        </ul>
    </li>
    <li>Data Base
        <ul>
            <li>PostgreSQL</li>
        </ul>
    </li>
</ul>
<h4>Libraries</h4>
<ul>
    <li>Cloudinary</li>
    <li>CometChat</li>
</ul>



### Dependencies

<strong>client side:</strong>
<pre><code>
<table style="width:100%">
<tr>
<th>package</th>
<th> version</th>
</tr>
<tr>
<th>@material-ui/core</th>
<th> 4.12.3</th>
</tr>

<tr>
<th>@material-ui/icons</th>
<th> 4.11.3</th>
</tr>
<tr>
<th>element-react</th>
<th> 1.4.34</th>
</tr>
<tr>
<th>element-theme-default</th>
<th> 1.4.13</th>
</tr>
<tr>
<th>materialize-css</th>
<th> 6.0.1</th>
</tr>
<tr>
<th>react</th>
<th> 17.0.2</th>
</tr>
<tr>
<th>react-bootstrap</th>
<th> 1.6.1</th>
</tr>
<tr>
<th>react-dom</th>
<th> 17.0.2</th>
</tr>
<tr>
<th>react-router-dom</th>
<th> 5.2.0</th>
</tr>
<tr>
<th>react-scripts</th>
<th> 4.0.3</th>
</tr>
<tr>
<th>react-select</th>
<th> 4.3.1</th>
</tr>
<tr>
<th>react-scripts</th>
<th> 4.0.3</th>
</tr>
<tr>
<th>react-tag-input</th>
<th> 6.7.3</th>
</tr>
<tr>
<th>react-toastify</th>
<th> 7.0.4</th>
</tr>
<tr>
<th>web-vitals</th>
<th> 1.1.2</th>
</tr>

</table>
</code></pre>

<strong>Server side:</strong>

<pre><code>
<table>
<tr>
<th>package</th>
<th> version</th>
</tr>
<tr>
<th>axios</th>
<th> 4.12.3</th>
</tr>
<tr>
<th>bcrypt</th>
<th> 5.0.1</th>
</tr>
<tr>
<th>cloudinary</th>
<th> 1.26.2</th>
</tr>
<tr>
<th>cors</th>
<th> 2.8.5</th>
</tr>
<tr>
<th>dotenv</th>
<th> 10.0.0</th>
</tr>
<tr>
<th>express</th>
<th> 4.17.1</th>
</tr>
<tr>
<th>jsonwebtoken</th>
<th> 8.5.1</th>
</tr>
<tr>
<th>pg</th>
<th> 8.6.0</th>
</tr>

</table>
</pre></code>


<pre><code>
[lliu78@hellosold cloudstor]$ <span style="color:green">go run client/main.go 192.168.122.210:9998 get hello.txt</span>
</code></pre>

### Included files
There are several files include. There are:

<h5 style="color: blue">Server:</h5>
<h6>middleware</h6>
<p>
<code>authorization.js</code> 

<p style="font-size:14px">JWT web token is used to identify authorized users. 
A jwt token contains a Header, a Payload, and a Signature.
<a href="https://jwt.io/">Viw more</a></p>

<code>validInfo.js</code><span style="font-size:14px"> -check the inputs</span>

<h6>routes</h6>

<code>coach.js</code> 
<p style="font-size:14px">Handle request related to coaches. Including "become a coach", "edit coaches profiles", and "upload images".</p>

<code>reset-password.js</code><p style='font-size:14px'>Handle request of resetting password.</p>

<code>confrim-reset-password.js</code><p style='font-size:14px'>Handle request of resetting password.</p>


<code>dashboard.js</code><span style="font-size:14px"> -get dashboard page.</span>
<code>settings.js</code><span style="font-size:14px"> -get settings page.</span>
<code>jwtAuth.js</code><span style="font-size:14px"> -handle request of register, login, edit profile, upload photos, add prompts, delete images, and review personal home pages.</span>
<code>index.js</code>
<h5 style="color: blue">Client:</h5>
<code>src/components</code>

<span style="font-size:14px">
All client-side components and .css files.
</span>

<code>index.js</code>

<h5 style="color: blue">Database</h5>
<code>database.sql</code> <span style="font-size:14px"> -sytanx to create the database</span>

### Wireframes

<p style="font-size:14px">This project follows the wiframe:
<a href="https://www.figma.com/file/sJ8rpAsBNrpgwUclTPd1un/Wireframes?node-id=147%3A99" target="_blank">See wirefames!</a>



### Video Walkthrough

<h4>Landing page</h4>

<video width="320" height="240" controls>
  <source src="demo/landing.mov" type="video/mp4">
</video>

<h4>Register</h4>
<video width="320" height="240" controls>
  <source src="demo/register.mov" type="video/mp4">
</video>

<h4>Log Out</h4>
<video width="320" height="240" controls>
  <source src="demo/log_out.mov" type="video/mp4">
</video>

<h4>Login, go to settings, edit account, see personal profile, photo gallery, delete images</h4>
<video width="320" height="240" controls>
  <source src="demo/login.mov" type="video/mp4">
</video>

<h4>Edit User Profile</h4>
<video width="320" height="240" controls>
  <source src="demo/edit_profile.mov" type="video/mp4">
</video>

<h4>Edit Coach Profile</h4>
<video width="320" height="240" controls>
  <source src="demo/edit_coach.mov" type="video/mp4">
</video>