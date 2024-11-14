"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllOrganization = void 0;
const organizationService_1 = require("../services/organizationService");
const getAllOrganization = async (req, res) => {
    try {
        const lisrOfOrganization = await (0, organizationService_1.getAllOrganizationFromDb)();
        res.status(200).json(lisrOfOrganization);
    }
    catch (err) {
        console.log(err);
        res.status(400).json(err.message);
    }
};
exports.getAllOrganization = getAllOrganization;
