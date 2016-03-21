'use strict';

require('setimmediate');
var OCL = require('openchemlib')

var getGroupedDiastereotopicAtomIDs=require('./extend/getGroupedDiastereotopicAtomIDs');
var toVisualizerMolfile=require('./extend/toVisualizerMolfile');
var getGroupedHOSECodes=require('./extend/getGroupedHOSECodes');

module.exports = exports = OCL;
exports.DB = require('./db/DB');
exports.RXN = require('./rxn/RXN');


OCL.Molecule.prototype.getGroupedDiastereotopicAtomIDs = getGroupedDiastereotopicAtomIDs;
OCL.Molecule.prototype.toVisualizerMolfile = toVisualizerMolfile;
OCL.Molecule.prototype.getGroupedHOSECodes = getGroupedHOSECodes;

