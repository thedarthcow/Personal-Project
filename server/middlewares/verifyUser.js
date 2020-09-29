module.exports = (req, res, next) => {
    if (req.session.user) {
      next()
    } else {
      res.status(403).send('Please log in')
    }
  }