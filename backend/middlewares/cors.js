const cors = require('cors');

const corsMiddleware = cors({
  origin: "http://localhost:5173", // <-- React frontend URL
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true, // needed if you send cookies or auth headers
});

module.exports = corsMiddleware;
