import OrganizationsModel  from "../models/organizations"

export const getAllOrganizationFromDb = async ()=>{
    const listOrg = await OrganizationsModel.find({})
    return listOrg
}