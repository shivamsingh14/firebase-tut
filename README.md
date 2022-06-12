Install firebase-cli
```npm install -g firebase-tools
```
Login to your account:
```
firebase login
```
```
firebase init functions
```
Deploy your function
```
firebase deploy --only functions
```
initialize emulator
```
firebase init emulators
```
To start emulator
```
firebase emulators:start  
```
To see realtime changes:
in one terminal run:
```
npm run build -- --watch
```
in another terminal, serve:
```
firebase emulators:start --only functions
```