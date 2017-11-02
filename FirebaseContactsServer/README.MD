# FirebaseContactsServer

This is a demo API REST built with firebase, in order to test API requests from the related FirebaseContactsApp ionic app

## Develop

This app is built with Typescript.

Your code changes must be compiled from Typescript to plain Javascript.
In order to do so, you can launch a process that keeps track of your TS files and compiles them when a change is detected. To do so, run:

```bash
cd functions
npm run ts-watch
```

## Upload to firebase

In order to upload new functions (or modifications) to firebase, run:

```bash
firebase use --add fir-contactsserver

firebase deploy --only-functions
```