const functions = require('firebase-functions');
const app = require('express')();

const FBAuth = require('./util/FbAuth.js');

const cors = require('cors');
app.use(cors());

const { getBlogs, getBlog, postBlog, deleteBlog } = require('./handlers/blog');

const {
  contactUs,
  getContactUsMessages,
  deleteContactUsMessage,
} = require('./handlers/contactUs');

const { login } = require('./handlers/users');

app.get('/blog/:contentId', getBlog);
app.get('/blog', getBlogs);
app.post('/blog', FBAuth, postBlog);
app.delete('/blog/:contentId', FBAuth, deleteBlog);

app.post('/contact', contactUs);
app.get('/contact', FBAuth, getContactUsMessages);
app.delete('/contact/:contactId', FBAuth, deleteContactUsMessage);

app.post('/login', login);

exports.api = functions.https.onRequest(app);
