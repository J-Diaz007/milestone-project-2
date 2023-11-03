# MERN Stack Milestone Project

TBD. Milestone Project
Instagram Clone
This project is an Instagram clone that combines a React frontend with an Express.js backend and MongoDB for data storage. It allows users to post images and captions, view posts from other users, and interact with them.

Features
User registration and login.
Post images with captions.
View and interact with posts from other users.
Update and delete your own posts.
User-friendly interface.
Data storage using MongoDB.
RESTful API for data interaction.

nvm -v = 1.1.11

API Endpoints
GET /api/posts: Get all posts.
POST /api/posts: Create a new post.
PUT /api/posts/:id: Update a post.
DELETE /api/posts/:id: Delete a post.

Built With
React-Frontend framework
Express.js-Backend frameowk
MongoDB-Database
Node.js-JavaScript runtime
Axios-HTTP client for making API requests.

License
This project is licensed under the MIT License - see the LICENSE.md file for details.

### Server Package.json

```json
{
  "name": "milestone-project-2-server",
  "version": "1.0.0",
  "description": "TBD. Milestone Project",
  "main": "index.js",
  "scripts": {
    "start": "node index.js",
    "dev": "npx nodemon index.js"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/J-Diaz007/milestone-project-2.git"
  },
  "author": "Jonathan D.",
  "license": "ISC",
  "bugs": {
    "url": "https://github.com/J-Diaz007/milestone-project-2/issues"
  },
  "homepage": "https://github.com/J-Diaz007/milestone-project-2#readme",
  "dependencies": {
    "cors": "^2.8.5",
    "dotenv": "^16.3.1",
    "express": "^4.18.2",
    "mongoose": "^7.6.4",
    "nodemon": "^3.0.1"
  }
}


Acknowledgments
Special thanks to Joshua and Ogi for their guidance and inspiration.

```
