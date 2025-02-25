require("dotenv").config();
const mongoose = require("mongoose");
const Product = require("./models/Product");  // Adjust the path if needed
const User = require("./models/User");  // Adjust the path if needed

async function connectDB() {
    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("MongoDB connected for seeding!");
    } catch (err) {
        console.error("MongoDB connection error:", err);
        process.exit(1);
    }
}

// Sample users
const users = [
    {
        name: "Admin User",
        email: "admin@example.com",
        password: "admin123", // Ideally, hash this in the actual app
        isAdmin: true,
    },
    {
        name: "John Doe",
        email: "john@example.com",
        password: "john123",
        isAdmin: false,
    },
];

// Sample products (Prices in INR)
const products = [
    {
        name: "iPhone 15 Pro Max",
        description: "Latest Apple flagship phone with A17 Bionic chip.",
        price: 159999,  // Price in INR
        category: "Electronics",
        brand: "Apple",
        stock: 10,
    },
    {
        name: "Nike Air Max 270",
        description: "Stylish and comfortable sports shoes.",
        price: 11999,  // Price in INR
        category: "Footwear",
        brand: "Nike",
        stock: 20,
    },
    {
        name: "Samsung 55-inch 4K Smart TV",
        description: "Ultra HD Smart TV with HDR10+ support.",
        price: 65999,  // Price in INR
        category: "Electronics",
        brand: "Samsung",
        stock: 5,
    },
];

async function seedData() {
    try {
        await connectDB();

        // Clear existing data
        await User.deleteMany();
        await Product.deleteMany();

        // Insert new data
        await User.insertMany(users);
        await Product.insertMany(products);

        console.log("Seeding completed successfully!");
        process.exit();
    } catch (error) {
        console.error("Seeding error:", error);
        process.exit(1);
    }
}

seedData();
