import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from 'firebase/auth';

async function signUpWithEmail(email, password) {
  const auth = getAuth();

  return await createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log('[auth res]\n', user);
      return {
        status: 'success',
        data: user,
      };
    })
    .catch((error) => {
      console.log('[auth err]\n', error.customData);
      return {
        status: 'fail',
        error: error.code,
      };
    });
}
async function signInWithEmail(email, password) {
  const auth = getAuth();

  return await signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      return {
        status: 'success',
        data: user,
      };
    })
    .catch((error) => {
      return {
        status: 'fail',
        error: error.code,
      };
    });
}

async function getAuthCurrentUser() {
  const auth = getAuth();
  return new Promise((resolve, reject) => {
    const removeListener = onAuthStateChanged(
      auth,
      (user) => {
        removeListener();
        resolve(user);
      },
      reject
    );
  });
}

async function userSignOut() {
  const auth = getAuth();
  return await signOut(auth)
    .then(() => {
      return {
        status: 'success',
      };
    })
    .catch((error) => {
      console.log('[sign out err\n]', error);
      return {
        status: 'fail',
      };
    });
}

export default {
  getAuthCurrentUser,
  userSignOut,
  signUpWithEmail,
  signInWithEmail,
};
