const functions = require('firebase-functions');

exports.tutorial = functions.database.ref('/animals/{phylum}/{classes}')
  .onWrite(event => {
    const original = event.data.val();
    const phylum = event.params.phylum;
    const classes = event.params.classes;
    const reference = event.data.ref.root.child('/message');
    let originalKeys = Object.keys(original);
    let contentKey = originalKeys[originalKeys.length - 1];
    let content = original[contentKey];
    let key = reference.push().key;
    let logContent = {
      message: "You've created a new entry \""+contentKey+"/"+content+"\" in "+phylum+"/"+classes+" reference!"
    };
    let updates = {};
    updates[key] = logContent;
    return reference.update(updates);
});

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });