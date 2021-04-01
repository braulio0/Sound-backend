const { Op } = require("sequelize");
const db = require("./../models");
const Songs = db.Songs;

exports.create = async (req, res) => {
  const songs = {
    name: req.body.name,
    artist: req.body.artist,
    genre: req.body.genre,
    energy: req.body.energy,
    bpm: req.body.bpm,
    popularity: req.body.popularity,
  };

  Songs.create(songs)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({ message: err.message || " some erros ocurred " });
    });
};

exports.findOne = async (req, res) => {
  const name = req.body.name;

  Songs.findOne({
    where: {
      [Op.or]: [{ name: name }, { artist: name }],
    },
  })
    .then((song) => {
      res.send(song);
    })
    .catch((err) => {
      res.status(404).send({
        message: "Don't find your search",
      });
    });
};

exports.findAll = async (req, res) => {
  const name = req.query.name;
  var condition = name ? { name: { [Op.ilike]: `%${name}%` } } : null;

  Songs.findAll({ where: condition })
    .then((song) => {
      res.send(song);
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};
