const Blog = require('../models/Blog')


async function getAllByDate() {
    return Blog.find({}).sort().lean();
}

async function createBlog(blog) {
    return Blog.create(blog);
}

async function getById(id) {
    return Blog.findById(id).lean();

}
async function getResent() {
    return Blog.find({}).sort({ userCount: -1 }).limit(3).lean();
}

async function editBlog(id, data) {
    const existing = await Blog.findById(id);

    existing.title = data.title;
    existing.image = data.image;
    existing.content = data.content;
    existing.blogCategory = data.category;

    return existing.save();
}

async function deleteById(id) {
    return Blog.findByIdAndDelete(id);

}
module.exports = {
    createBlog,
    getById,
    getResent,
    editBlog,
    getAllByDate,
    deleteById
}