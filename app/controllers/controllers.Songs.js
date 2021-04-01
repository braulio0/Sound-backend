const db = require("./../models");
const Songs = db.Songs;
const { Op } = require("sequelize");
const { findOne } = require("./controllers.User");

exports.findOne = async (req, res) => {
    const name = req.body.name;
    const artist=req.body.artist;
  
   Songs.findOne({
      where: { 
        [Op.or]: [
            {name},
            {artist}
        ]
      },
    }).then(const song => {res.send(song);}).catch(
        error => {res.status(404).send({
            message:"Don't find your search"});
        });
        
    };
  };
