require('dotenv').config();
const mongoose = require('mongoose');
const prompt = require('prompt-sync')({ sigint: true });
const User = require('./models/User');

async function run() {
  try {
    console.log("🔗 Connecting to MongoDB...");
    await mongoose.connect(process.env.MONGO_URI);
    console.log("✅ Connected!\n");

    // Ask details from user
    const name = prompt("Enter admin name: ");
    const email = prompt("Enter admin email: ");
    const password = prompt("Enter admin password: ", { echo: "*" });

    if (!name || !email || !password) {
      console.log("❌ All fields are required!");
      process.exit(1);
    }

    // Check if already exists
    const exists = await User.findOne({ email });
    if (exists) {
      console.log("⚠️ Admin already exists!");
      process.exit(0);
    }

    // Create admin user
    const admin = new User({
      name,
      email,
      password,
      role: "Admin",
    });

    await admin.save();
    console.log("\n🎉 Admin user created successfully!");
    console.log(`📧 Email: ${email}`);
    console.log(`🔐 Password: [HIDDEN — hashed]`);
    console.log(`👑 Role: Admin`);

    process.exit(0);

  } catch (err) {
    console.error("❌ Error:", err.message);
    process.exit(1);
  }
}

run();
