const config = {
  /* TODO: ADD YOUR FIREBASE CONFIGURATION OBJECT HERE */
  apiKey: "AIzaSyBx8eXo_P72Ua-AyygmwruqCwqJ3Xv7cTw",
  authDomain: "hello-world-crud.firebaseapp.com",
  databaseURL: "https://hello-world-crud.firebaseio.com",
  projectId: "hello-world-crud",
  storageBucket: "hello-world-crud.appspot.com",
  messagingSenderId: "813642340612",
  appId: "1:813642340612:web:ddcba827b0c06ac26fd851",
};

export function getFirebaseConfig() {
  if (!config || !config.apiKey) {
    throw new Error(
      "No Firebase configuration object provided." +
        "\n" +
        "Add your web app's configuration object to firebase-config.js"
    );
  } else {
    return config;
  }
}
