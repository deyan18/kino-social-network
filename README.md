# Kino

[Kino Website](https://watching-b9991.web.app)

Individual project where the knowledge acquired in the subject will be put into practice, taking as an example the IMDb API to query data about movies and tv shows to provide content for the Kino Social Media App.

## Data Model

<img src="docs/dataModel.png">

## End Points

In Firebase Firestore there are no specific end points, instead we use a series of functions in which we specify collections and documents to access the data. In this project we make use of the following functions:
* **setDoc** Set the data of a document within a collection, explicitly specifying a document identifier.
* **addDoc** Add a new document to a collection, automatically generating the document identifier.
* **deleteDoc** Delete a document specifying its identifier.
* **getDoc** Retrieve the contents of a single document specifying its identifier.
* **getDocs** Retrieve multiple documents with one request by querying documents in a collection.



For example, let's s
