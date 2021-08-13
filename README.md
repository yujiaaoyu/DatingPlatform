# Dating Platform Web App (v 1.0)

Author: Jiaao Yu, Li Liu<br>
Sponsor/Instructor : Jose Alvarado

## About this Project
<p style="font-size:16px">This project involves the design and development of an application and website for use by Jose Alvarado. The application will be called ‘Milk Meets Tea’ and can serve as a one-stop platform for all of the user's dating-related services. Users can view profiles of vetted service providers and hire them. The platform will also provides a ‘Groups’ feature where users can chat with each other in private groups. </p>


## Flow Diagram
![](https://i.imgur.com/GblHCKe.jpg)


## Features

<li>Sign Up/ Login</li>
<Li>Edit Profiles, uploads profile images, and add dating prompts</Li>
<Li>Display personal profile and photo galleries</Li>
<Li>Edit Profiles, uploads profile images, and add dating prompts</Li>
<Li>Reset password and email</Li>


## How to use?

### Instructions

1. Clone the repo
2. Open terminal, cd into the repo of this project
3. Cd server
    i. install all dependencies
    ii. run command " nodemon start"
4. Cd client
    i. install all dependencies
    ii. run command "npm start"
5. create tables on your local machine (pgAdmin)
   Don't forget to change db.js file, which contains database inforamtion 


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
    <li>Back End
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
    <li>Test
        <ul>
            <li>Mocha</li>
            <li>Chai</li>
            <li>Chai-http</li>
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

<strong>Test :</strong>

<pre><code>
<table>
<tr>
<th>package</th>
<th> version</th>
</tr>
<tr>
<th>mocha</th>
<th> 9.0.3</th>
</tr>
<tr>
<th>chai</th>
<th> 4.3.4</th>
</tr>
<tr>
<tr>
<th>chai-http</th>
<th> 4.3.0</th>
</tr>
<tr>

</table>
</pre></code>

## Included files
### Source files
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


<code>dashboard.js</code><span style="font-size:14px"> -get dashboard page.</span><br>
<code>settings.js</code><span style="font-size:14px"> -get settings page.</span><br>
<code>jwtAuth.js</code><span style="font-size:14px"> -handle request of register, login, edit profile, upload photos, add prompts, delete images, and review personal home pages.</span><br>
<code>index.js</code><br>
<h5 style="color: blue">Client:</h5>
<code>src/components</code>

<span style="font-size:14px">
All client-side components and .css files.
</span>

<code>index.js</code>

<h5 style="color: blue">Database</h5>
<code>database.sql</code> <span style="font-size:14px"> -sytanx to create the database</span>

## Database
<h4>We use pgAdmin to create our database and tables.</h4>
<p style="font-size:14px">This project uses 5 tables, the syntax to create the tables can be found in file 'database.sql'. 

<table>
<tr>
<th> Group</th>
<th> Tables</th>
</tr>
<tr>
<th rowspan=4>Users</th>
<th> users</th>
</tr>
<tr>
<tr>
<th>user_images</th>
</tr>
<tr>
<th>prompts</th>
</tr>
<tr>
<tr>
<th rowspan=4>Coaches</th>
<th> coaches</th>
</tr>
<tr>
<th>coach_images</th>
<tr>

</table>


## Tests

<h4>
1. We use Postman to test our API.
</h4>
<p style="font-size:14px">

Eaxmple:

This is an exemple of getting data from our coaches table, when we go into the dashboard page, all coaches information will be listed.

![](https://i.imgur.com/hyOvkTF.png)


</p>

<h4>
2. We use Mocha to do a simple REST test, all files can be found under the test folder.
</h4>






## Wireframes

<p style="font-size:14px">This project follows the wiframe:
<a href="https://www.figma.com/file/sJ8rpAsBNrpgwUclTPd1un/Wireframes?node-id=147%3A99" target="_blank">See wirefames!</a>



## Video Walkthrough

<h4>Landing page</h4>

![](https://i.imgur.com/TrJe30w.gif)

<h4>Login</h4>

![](https://i.imgur.com/pitAogv.gif)

<h4>Log Out</h4>

![](https://i.imgur.com/KYMUoVH.gif)

For the wholr video walkthrough, please <a href="https://drive.google.com/drive/folders/1ALTrFTJ5VS7T_3Fe_Cywa_LrxH9iA3ct?usp=sharing">click me</a>.


