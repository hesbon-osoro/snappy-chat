// Server url
export const host = process.env.SERVER_HOST;
export const loginRoute = `${host}/api/auth/login`;
export const registerRoute = `${host}/api/auth/register`;
export const logoutRoute = `${host}/api/auth/logout`;
export const allUsersRoute = `${host}/api/auth/allusers`;
export const sendMessageRoute = `${host}/api/messages/addmsg`;
export const receiveMessageRoute = `${host}/api/messages/getmsg`;
export const setAvatarRoute = `${host}/api/auth/setAvatar`;
