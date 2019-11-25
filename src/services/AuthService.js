const onLogging = auth => {
  const profile = auth.getBasicProfile();
  const authResponse = auth.getAuthResponse();
  // console.log(authResponse);
  const profileInfo = {
    email: profile.getEmail(),
    familyName: profile.getFamilyName(),
    givenName: profile.getGivenName(),
    id: profile.getId(),
    imageURL: profile.getImageUrl(),
    name: profile.getName(),
  };
  const authResponseInfo = {
    accessToken: authResponse.login_hint,
    idToken: authResponse.id_token,
    scope: authResponse.scope,
    expiresIn: authResponse.expires_in,
    firstIssuedAt: authResponse.first_issued_at,
    expiresAt: authResponse.expires_at,
  };
  return { profileInfo, authResponseInfo };
};

export const initAuth = (window, callbackOnInitWithUser) => {
  const onInit = auth2 => {
    const isSignedIn = auth2.isSignedIn.get();
    if (isSignedIn) {
      const currentUser = auth2.currentUser.get();
      const { profileInfo, authResponseInfo } = onLogging(currentUser);

      callbackOnInitWithUser(profileInfo, authResponseInfo);
    }
  };
  const onError = err => {
    console.log('error', err);
  };

  window.gapi.load('auth2', function inner() {
    window.gapi.auth2
      .init({
        // не забудьте указать ваш ключ в .env
        client_id: process.env.REACT_APP_GOOGLE_CLIENT_ID,
      })
      .then(onInit, onError);
  });
};

export const signIn = window => {
  const auth2 = window.gapi.auth2.getAuthInstance();

  return auth2.signIn().then(googleUser => {
    return onLogging(googleUser);
  });
};

export const signOut = () => {
  const auth2 = window.gapi.auth2.getAuthInstance();
  auth2.signOut().then(() => {
    console.log('User signed out.');
  });
};

export default {
  initAuth,
  signIn,
  signOut,
};
