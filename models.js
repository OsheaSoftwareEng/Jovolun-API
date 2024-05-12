const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const colognesSchema = mongoose.Schema({
  Name: { type: String, required: true },
  Description: {
    type: String
  },
  DescriptionTwo: {
    type: String
  },
  Price: {
    type: Number
  },
  PriceTwo: {
    type: Number
  },
  Image: String,
  ImageTwo: String,
  Size: String,
  SizeTwo: String,
  ProductDetails: String,
  ProductDetailsTwo: String,
  ProductInfo: String,
  ProductInfoTwo: String,
  Rating: Number,
  RatingTwo: Number,
  ReviewCount: String,
  ReviewCountTwo: String,
  DetailLogo: String,
  DetailLogoTwo: String
});

// const userSchema = mongoose.Schema({
//   Username: { type: String, required: true },
//   Password: { type: String, required: true },
//   Email: { type: String, required: true },
//   Birthday: Date,
//   FavoriteMovies: [{ type: mongoose.Schema.Types.ObjectID, ref: 'Movie' }]
// });

// userSchema.statics.hashPassword = (password) => {
//   return bcrypt.hashSync(password, 10);
// };

// userSchema.methods.validatePassword = function (password) {
//   return bcrypt.compareSync(password, this.Password);
// };

const Colognes = mongoose.model('colognes', colognesSchema);

// const User = mongoose.model('User', userSchema);

module.exports.Colognes = Colognes;
// module.exports.User = User;
