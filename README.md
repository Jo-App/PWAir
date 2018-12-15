-- firebase init --

선택
database :
Hosting : 


Firebase Realtime Database Rules allow you to define how your data should be
structured and when your data can be read from and written to.

? What file should be used for Database Rules? database.rules.json
✔  Database Rules for  have been downloaded to database.rules.json.
Future modifications to database.rules.json will update Database Rules when you run
firebase deploy.

=== Hosting Setup

Your public directory is the folder (relative to your project directory) that
will contain Hosting assets to be uploaded with firebase deploy. If you
have a build process for your assets, use your build's output directory.

? What do you want to use as your public directory? public
? Configure as a single-page app (rewrite all urls to /index.html)? No
✔  Wrote public/404.html
✔  Wrote public/index.html

i  Writing configuration info to firebase.json...
i  Writing project information to .firebaserc...

✔  Firebase initialization complete!

Project creation is only available from the Firebase Console
Please visit https://console.firebase.google.com to create a new project, then run firebase use --add


   ╭───────────────────────────────────────────╮
   │                                           │
   │      Update available 6.1.1 → 6.1.2       │
   │   Run npm i -g firebase-tools to update   │
   │                                           │


----------------------------

firebase deploy

sudo npm install vue-router