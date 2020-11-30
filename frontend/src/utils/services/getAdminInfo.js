import jwt_decode from "jwt-decode";
export default function getAdminInfo() {
    const gettoken = sessionStorage.getItem('token')
    const codedToken=jwt_decode(gettoken)
    return codedToken
    
}