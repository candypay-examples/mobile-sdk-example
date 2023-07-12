# CandyPay Mobile SDK demo app

An example Expo project that can be used as a quickstart reference to integrate our mobile payments SDK. We will use EAS Build for this application.

## Steps to run the application:

1. Clone this project.

```
git clone https://github.com/candypay-examples/mobile-sdk-example
```


2. In [`eas.json`](./eas.json) at line 9, change this ->

```
"env": { "ANDROID_HOME": "/Users/ritvij14/Library/Android" }
```

to the path of ANDROID_HOME on your system. This allows you to run EAS Build locally.

3. Run `eas build:configure`. Choose Android for building the APK.
4. Run `eas build -p android --profile preview --local`

For more details, head over to [Quickstart](https://docs.candypay.fun/mobile-sdk/quickstart.html)
