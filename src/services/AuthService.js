export const initAuth = (window, callbackOnSuccess) => {
  const onInit = auth2 => {
    console.log('init OK', auth2);
  };
  const onError = err => {
    console.log('error', err);
  };

  const onLogging = auth => {
    const profile = auth.getBasicProfile();
    const authResponse = auth.getAuthResponse();
    console.log(authResponse);
    const profileInfo = {
      email: profile.getEmail(),
      familyName: profile.getFamilyName(),
      givenName: profile.getGivenName(),
      id: profile.getId(),
      imageURL: profile.getImageUrl(),
      name: profile.getName(),
    };
    const authResponseInfo = {
      accessToken: authResponse.accessToken,
      idToken: authResponse.id_token,
      scope: authResponse.scope,
      expiresIn: authResponse.expires_in,
      firstIssuedAt: authResponse.first_issued_at,
      expiresAt: authResponse.expires_at,
    };
    callbackOnSuccess(profileInfo, authResponseInfo);
  };
  window.gapi.load('auth2', function inner() {
    window.gapi.auth2
      .init({
        // не забудьте указать ваш ключ в .env
        client_id: process.env.REACT_APP_GOOGLE_CLIENT_ID,
      })
      .then(onInit, onError);
  });
  window.gapi.signin2.render('AuthCointainer', {
    scope: 'openid profile email',
    width: 'auto',
    height: 'auto',
    longtitle: false,
    theme: 'light',
    onsuccess: onLogging,
    onfailure: onError,
  });
};

export const signIn = () => {
  const auth2 = window.gapi.auth2.getAuthInstance();
  auth2.signIn().then(googleUser => {
    // метод возвращает объект пользователя
    // где есть все необходимые нам поля
    const profile = googleUser.getBasicProfile();
    console.log('ID: ' + profile.getId()); // не посылайте подобную информацию напрямую, на ваш сервер!
    console.log('Full Name: ' + profile.getName());
    console.log('Given Name: ' + profile.getGivenName());
    console.log('Family Name: ' + profile.getFamilyName());
    console.log('Image URL: ' + profile.getImageUrl());
    console.log('Email: ' + profile.getEmail());
    console.dir(profile);
    // токен
    const id_token = googleUser.getAuthResponse().id_token;
    console.log('ID Token: ' + id_token);
  });
};

export const signOut = () => {
  const auth2 = window.gapi.auth2.getAuthInstance();
  auth2.signOut().then(function() {
    console.log('User signed out.');
  });
};

export default {
  initAuth,
  signIn,
  signOut,
};
