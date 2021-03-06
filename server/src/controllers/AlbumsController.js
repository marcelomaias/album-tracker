const { Album } = require('../models')

module.exports = {
  async index (req, res) {
    try {
      const albums = await Album.findAll({
        limit: 10
      })
      res.send(albums)
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured trying to fetch the albums.'
      })
    }
  },
  async show (req, res) {
    try {
      const album = await Album.findById(req.params.albumId)
      res.send(album)
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured trying to fetch the album.'
      })
    }
  },
  async post (req, res) {
    try {
      const album = await Album.create(req.body)
      res.send(album)
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured trying to create the album.'
      })
    }
  },
  async put (req, res) {
    try {
      const album = await Album.update(req.body, {
        where: {
          id: req.params.albumId
        }
      })
      res.send(album)
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured trying to update the album.'
      })
    }
  },
  async delete (req, res) {
    try {
      const album = await Album.delete(req.params.albumId)
      res.send(album)
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured trying to delete the album.'
      })
    }
  }
}
