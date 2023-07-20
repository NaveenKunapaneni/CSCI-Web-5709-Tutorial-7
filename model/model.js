const mongoose = require('mongoose');

const tutorialSchema = new mongoose.Schema({ 
                        name: {
                            type: String,
                            required: [true, "Must provide name"],
                            maxLength: [20, "name cannot bemore than 20 characters"],
                            trim: true
                        }, 
                        email: {
                            type: String,
                            required: [true, "Must provide email"],
                            unique: true,
                            maxLength: [25, "email cannot bemore than 25 characters"],
                            trim: true
                        },
                        active: {
                            type: Boolean,
                            default: false
                        }
 });

module.exports = mongoose.model('tutorialSchema', tutorialSchema)