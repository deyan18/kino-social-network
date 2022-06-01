import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth, updateEmail, updatePassword } from 'firebase/auth'
import { doc, setDoc, getDoc, addDoc, collection, deleteDoc, getDocs, query, where, orderBy } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyDVOORBzibfTf15HOnjBMxyd-G3GBhmmbA",
  authDomain: "watching-b9991.firebaseapp.com",
  projectId: "watching-b9991",
  storageBucket: "watching-b9991.appspot.com",
  messagingSenderId: "705832512871",
  appId: "1:705832512871:web:6e7b4fa589db0d12b813c2"
}

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);


// generate & export auth object
export const auth = getAuth()


export const getUser = async id => {
  if (id == null) {
    id = auth.currentUser.uid;
  }
  const docRef = doc(db, "users", id);
  const docSnap = await getDoc(docRef);
  const docData = docSnap.data()
  docData.userID = docSnap.id;
  return docData;
}


export const userExistsInDB = async userID => {
  if (userID == null) {
    userID = auth.currentUser.uid;
  }

  const docRef = doc(db, "users", userID);
  const docSnap = await getDoc(docRef);
  

  return docSnap.exists();
}


export const getPostsByContent = async contentID => {

  let posts = [];
  const colRef = collection(db, "allPosts/" + contentID + "/posts");
  const q = query(colRef);

  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    posts.push(doc.data());
  });

  return posts;
}

export const doIFollow = async (userID) => {

  let result = false;
  const colRef = collection(db, "users/" + auth.currentUser.uid + "/following");
  const q = query(colRef, where("userID", "==", userID));

  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    result = true;
  });

  return result;
}

export const isInWatchList = async (contentID) => {


  let result = false;
  const colRef = collection(db, "users/" + auth.currentUser.uid + "/watchList");
  const q = query(colRef, where("id", "==", contentID));

  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {

    result = true;
  });

  return result;
}

export const hasBeenShared = async (contentID) => {


  let result = false;
  const colRef = collection(db, "users/" + auth.currentUser.uid + "/posts");
  const q = query(colRef, where("id", "==", contentID));

  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {

    result = true;
  });

  return result;
}




export const getPostsByUser = async userID => {
  if (userID == null) {
    userID = auth.currentUser.uid;
  }

  let posts = [];
  const colRef = collection(db, "users/" + userID + "/posts");
  const q = query(colRef, orderBy('date', "desc"));

  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    posts.push(doc.data());
  });

  return posts;
}


export const getFollowing = async test => {

  let following = [];
  const colRef = collection(db, "users/" + auth.currentUser.uid + "/following");
  const q = query(colRef);

  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    following.push(doc.data());
  });

  return following;

}

export const getFeed = async i => {
  let following = [];
  let posts = [];

  getFollowing().then((data) => {
    console.log("GET FOLLOWING de getfeed", data)
    following = data;


    for (const user of following) {
      console.log("pasing user", user.userName)

      getPostsByUser(user.userID).then((userPosts) => {
        for (const p of userPosts) {
          posts.push(p);
        }
      })
    }
    console.log("posts", posts)

  })
  return posts;
}

export const searchUsers = async name => {

  let users = [];
  const colRef = collection(db, "users/");
  const q = query(colRef);

  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    if (doc.data().name.toLowerCase().includes(name.toLowerCase())) {
      if (doc.id != auth.currentUser.uid) {
        let uData = doc.data();
        uData.userID = doc.id;
        users.push(uData);
      }

    }
  });

  return users;

}

export const postComment = (contentID, postID, text) => {
  if (text === "") {
    return;
  }

  getUser().then((data) => {
    let userData = data;
    console.log("De post", userData)
    try {
      addDoc(collection(db, "allPosts/" + contentID + "/posts/" + postID + "/comments"), {
        userID: auth.currentUser.uid,
        userName: userData.name,
        userImg: userData.img,
        text: text,
        date: new Date(),
      }
      );
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  })
}

export const followUser = (userID) => {

  getUser(userID).then((data) => {
    let userData = data;

    try {
      setDoc(doc(db, "users/" + auth.currentUser.uid + "/following", userData.userID), {
        userID: userData.userID,
        userName: userData.name,
        userImg: userData.img,
      }
      );
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  })
}

export const deletePost = (contentID) => {

  deleteDoc(doc(db, "users/" + auth.currentUser.uid + "/posts/", contentID));
  deleteDoc(doc(db, "allPosts/" + contentID + "/posts/", auth.currentUser.uid));
}

export const unfollowUser = (userID) => {

  deleteDoc(doc(db, "users/" + auth.currentUser.uid + "/following/", userID));

}

export const saveUserData = (name, bio) => {
  if (name === "") {
    return;
  }


  try {
    setDoc(doc(db, "users", auth.currentUser.uid), {
      name: name,
      bio: bio,
      img: "https://avatars.dicebear.com/api/personas/" + auth.currentUser.uid + ".svg"
    });
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}

export const changeEmail = (email) => {
  if (email === "") {
    return;
  }

  updateEmail(auth.currentUser, email).then(() => {

  }).catch((error) => {
    console.log(error);
  });
}

export const changePassword = (pass) => {
  if (pass === "") {
    return;
  }

  updatePassword(auth.currentUser, pass).then(() => {
    // Update successful.
  }).catch((error) => {
    console.log(error);
  });
}


export const sharePost = (contentID, title, img, text, stars) => {
  if (text === "") {
    return;
  }

  getUser().then((data) => {
    let userData = data;
    console.log("De post", userData)


    try {
      setDoc(doc(db, "users/" + auth.currentUser.uid, "posts/" + contentID), {
        userID: auth.currentUser.uid,
        userName: userData.name,
        userImg: userData.img,
        id: contentID,
        title: title,
        img: img,
        text: text,
        stars: stars,
        date: new Date()
      });

    } catch (e) {
      console.error("Error adding document: ", e);
    }

    deleteDoc(doc(db, "allPosts/" + contentID + "/posts/" + auth.currentUser.uid)).then(() => {

      try {
        setDoc(doc(db, "allPosts/" + contentID + "/posts/" + auth.currentUser.uid), {
          userID: auth.currentUser.uid,
          userName: userData.name,
          userImg: userData.img,
          id: contentID,
          title: title,
          img: img,
          text: text,
          stars: stars,
          date: new Date()
        });

      } catch (e) {
        console.error("Error adding document: ", e);
      }

    })
  })
}

export const addToWatchList = (contentID, title, img) => {

  try {
    setDoc(doc(db, "users/" + auth.currentUser.uid, "watchList/" + contentID), {
      id: contentID,
      title: title,
      img: img,
    });

  } catch (e) {
    console.error("Error adding document: ", e);
  }

}

export const removeFromWatchList = (contentID) => {
  console.log("DENTROO", contentID);
  deleteDoc(doc(db, "users/" + auth.currentUser.uid + "/watchList/", contentID));

}

export const getWatchList = async i => {

  let items = [];
  const colRef = collection(db, "users/" + auth.currentUser.uid + "/watchList");
  const q = query(colRef);

  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    items.push(doc.data());
  });

  return items;
}

export const getComingSoon = async i => {

  let items = [];
  const colRef = collection(db, "comingSoon/");
  const q = query(colRef);

  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    items.push(doc.data());
  });

  return items;
}
