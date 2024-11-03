const userBaseUrl='http://localhost:1234/api/v1/user';
const studiBaseUrl='http://localhost:4321/api/v1/studio';


export const apiEndPoints={

    signUp:userBaseUrl+'/signUp',
    login:userBaseUrl+'/login',
    refreshToken:userBaseUrl+'/refresh-token',
    profile:userBaseUrl+'/profile',
    logout:userBaseUrl+'/logout'
}