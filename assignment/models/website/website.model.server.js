var mongoose = require('mongoose');
var websiteSchema = require('./website.schema.server');
var websiteModel = mongoose.model('WebsiteModel', websiteSchema);

websiteModel.findAllWebsites = findAllWebsites;
module.exports = websiteModel;
