const Publication = require('../models/Publication')

const getAll = () => Publication.find({}).lean();


const create = (title, paintingTechnique, artPicture, certificate, userId) => {
    let publication = new Publication({ title, paintingTechnique, artPicture, certificate, author: userId })
    return publication.save();
};

const getOne = (id, userId) => Publication.findById(id).lean()
    .then(publications => {
        publications.usersShared = publications.usersShared.some(x => x._id == userId);
     
        publications.isOwn = publications.author == userId;

        return publications;
    });

    const deletePublication = (publicationId) => {
        return Publication.deleteOne({_id: publicationId});
    }
    

    const userShare = (publicationId, userId) => {
        return publication = Publication.findById(publicationId)
            .then(publication => {
                publication.usersShared.push(userId);
    
                return publication.save();
    
            })
    }

    const updateOne = (publicationId, title, paintingTechnique, artPicture, certificate) => {
        return Publication.updateOne({_id: publicationId}, {title, paintingTechnique, artPicture, certificate})
    }

module.exports = {
    getAll,
    create,
    getOne,
    deletePublication,
    userShare,
    updateOne
}