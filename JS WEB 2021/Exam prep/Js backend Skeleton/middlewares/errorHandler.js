const errorhandler = (err, req, res, next) => {
    let messsage = err.messsage || 'Something went whrong'
    let status = err.status || 500;

    // TODO add page to render
}

module.exports = errorhandler;