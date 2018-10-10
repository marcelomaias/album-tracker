module.exports = (sequelize, DataTypes) => {
  const Album = sequelize.define('Album', {
    title: DataTypes.STRING,
    year: DataTypes.STRING,
    artist: DataTypes.STRING,
    description: DataTypes.TEXT,
    cover: DataTypes.STRING
  })
  return Album
}
