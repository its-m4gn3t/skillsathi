const cors = require('cors');

const corsMiddleware = cors({
  origin: "https://skillsathi-q8qn.onrender.com", // <-- React frontend URL
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true, // needed if you send cookies or auth headers
});

module.exports = corsMiddleware;
