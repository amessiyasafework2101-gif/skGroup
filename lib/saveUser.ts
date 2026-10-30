
import {
  doc,
  getDoc,
  setDoc,
  serverTimestamp,
} from "firebase/firestore";

import { db } from "./firebase";
import type { User } from "firebase/auth";

export async function saveUserToFirestore(user: User) {
  const userRef = doc(db, "users", user.uid);
  const userSnapshot = await getDoc(userRef);

  const profile = {
    uid: user.uid,
    name: user.displayName || "",
    email: user.email || "",
    photoURL: user.photoURL || "",
    updatedAt: serverTimestamp(),
  };

  if (!userSnapshot.exists()) {
    await setDoc(userRef, {
      ...profile,
      age: null,
      createdAt: serverTimestamp(),
    });
  } else {
    await setDoc(userRef, profile, { merge: true });
  }

  return userRef;
}
