
export interface UserDTO {
    username: string;
    password: string;
    organizatio?: string
    detailsOnOrganization?:  {name: string ,resources:[{name: string; amount: number }], budget: number};
}
