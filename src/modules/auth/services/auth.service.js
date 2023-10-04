import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from 'firebase/auth';

const errors = {
  'auth/email-already-in-use': 'Email already exist',
  'auth/invalid-email': 'Invalid Email',
  'auth/missing-email': 'Missing Email',
  'auth/invalid-password': 'Invalid Password',
  'auth/missing-password': 'Missing Password',
  'auth/weak-password': 'Password should be at least 6 characters',
  'auth/invalid-login-credentials': 'Incorrect email or password',
};

async function signUpWithEmail(email, password) {
  const auth = getAuth();

  return await createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log('[auth res]\n', user);
      return user;
    })
    .catch((err) => {
      console.log('[auth err]\n', err.customData);
      for (let errorCode in errors) {
        if (err.code == errorCode) {
          throw new Error(errors[errorCode]);
        }
      }

      throw new Error(err);
    });
}
async function signInWithEmail(email, password) {
  const auth = getAuth();

  return await signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      return user;
    })
    .catch((err) => {
      for (let errorCode in errors) {
        if (err.code == errorCode) {
          throw new Error(errors[errorCode]);
        }
      }
      throw new Error(err);
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
      throw new Error(error);
    });
}

export default {
  getAuthCurrentUser,
  userSignOut,
  signUpWithEmail,
  signInWithEmail,
};
