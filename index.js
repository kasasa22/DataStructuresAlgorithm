const express = require('express');
const app = express();
app.use(express.json());

// Import routes
const get = require('./routes/get');
const post = require('./routes/post');
const del = require('./routes/delete');
const put = require('./routes/put');
const getSingle = require('./routes/getSingle');

// Use routes with base paths
app.use( get);          // All routes for 'get.js' are prefixed with /posts
app.use( post);          // All routes for 'post.js' are prefixed with /post
app.use(del);           // All routes for 'delete.js' are prefixed with /post
app.use(put);           // All routes for 'put.js' are prefixed with /post
app.use(getSingle);     // All routes for 'getSingle.js' are prefixed with /post

// Catch-all route for undefined endpoints
app.all('*', (req, res) => {
   res.status(404).send({ msg: "We don't serve this page" });
});

// Start the server
app.listen(4000, () => {
    console.log('App is running on port 4000');
});
