const Course = require("../models/Course");

async function getAllByDate() {
  return Course.find({}).sort({ createdAt: 1 }).lean();
}

async function createCourse(course) {
  return Course.create(course);
}

module.exports = {
  getAllByDate,
  createCourse,
};
