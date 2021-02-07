const mongoose = require('mongoose');

const companyDetailsSchema = mongoose.Schema({
    id: {
        type: String
    },
    companyName: [String],
    companyAddress: {
        plotNo: {
        type: String
    },
        floorNo: {
        type: String
    },
        buildingName: {
        type: String
    },
        roadName: {
        type: String
    },
        area: {
        type: String
    },
        landmark: {
        type: String
    },
        city: {
        type: String
    },
        country: {
        type: String
    },
        pin: {
            type: String
        },
    },
    workDomain: [String],
    companyType: {
        type: String
    },
    companyStatus: {
        type: String
    },
    companyNumber: [],
    officeContact: [],
    personContact: [],
    website: [],
    socialLinks: [],
    companyTurnover: [],
    employSize: {
        type: String
    },
    startingDate: {
        type: String
    },
});


const companyDataModel = mongoose.model('company_data', companyDetailsSchema);

module.exports = companyDataModel;