// client facing user structure
export interface User {
    id: string,
    name: string,
    email: string,
    emailVerified: boolean,
    imageURL: string,
    flair: string,
}; 