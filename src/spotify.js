// https://developer.spotify.com/documentation/web-playback-sdk/quick-start/#

export const authEndpoint = "https://accounts.spotify.com/authorize";

const redirectUri = "http://localhost:3000/";

const clientId = "ef057f7327d5491ca620024fa3457faa";
// this allows the user to click the login button
// redirect the user to the spotify login page
// redirect the user to the home page once logged / authorized in

const scopes = [
  "user-read-currently-playing",
  "user-read-resently-played",
  "user-read-playback-state",
  "user-top-read",
  "user-modify-playback-state", // an array of permissions the user will be able to use once logged in
];

export const getTokenFromUrl = () => {
  return window.location.hash
    .substring(1)
    .split("&")
    .reduce((initial, item) => {
      var parts = item.split("=");
      initial[parts[0]] = decodeURIComponent(parts[1]);
      return initial;
    }, {});
};

export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scopes=${scopes.join(
  "%20"
)}&response_type=token&show_dialog=true`;
