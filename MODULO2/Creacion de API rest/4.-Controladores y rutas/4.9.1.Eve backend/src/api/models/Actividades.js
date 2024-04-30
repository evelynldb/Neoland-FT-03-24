const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//!---------------------ACTIVIDADES-------------------------------

const ActivitiesSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    type: {
      type: String,
      required: true,
      enum: ["padel", "colectivas"],
    },
    spots: {
      type: Number,
      required: true,
    },
    status: {
      type: String,
      required: true,
      enum: ["enabled", "disabled"],
    },
  },
  {
    timestamps: true,
  }
);

//!---------------------RESERVAS-------------------------------

const BookingSchema = new Schema(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    calendarId: { type: mongoose.Schema.Types.ObjectId, ref: "Calendar" },
  },
  {
    timestamps: true,
  }
);

//!---------------------CALENDAR-------------------------------

const CalendarSchema = new mongoose.Schema(
  {
    activityId: { type: mongoose.Schema.Types.ObjectId, ref: "Activity" },
    startDate: {
      type: mongoose.Schema.Types.Date,
      required: true,
    },
    endDate: {
      type: mongoose.Schema.Types.Date,
      required: true,
    },
    avaibleSpots: { type: Number },
    monitorId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    room: { type: String, enum: ["sala verde", "sala roja"], required: false },
  },
  {
    timestamps: true,
  }
);

//!-----------------------MURO-------------------------------

const MuroSchema = new mongoose.Schema({
  owner: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
});
