# Example Application for basic usage of CandyPay SDK.

This is an Expo Application, and since CandyPay Elements Mobile SDK uses MWA under the hood, we need to use EAS Build.

## Steps to run this application:

1. Clone this project.
2. In [`eas.json`](./eas.json) at line 9, change this ->

```
"env": { "ANDROID_HOME": "/Users/ritvij14/Library/Android" }
```

to the path of ANDROID_HOME on your system. This allows you to run EAS Build locally.

3. In [`app.json`](./app.json), delete these parts:

- Line 25

```
"package": "com.ritvij14.example"
```

- The `extra` property

```
"extra": {
    "eas": {
      "projectId": "94018f85-662d-4e01-982a-268b86899562"
    }
  }
```

4. Run `eas build:configure`. Choose Android for the building of APK.
5. Run `eas build -p android --profile preview --local`
