# ArmiMobile

## Tech

- React
- React Native
- Redux

## About

Check worklog.md for details

Could not connect to development server: (ip, clean, build, debug etc)
https://facebook.github.io/react-native/docs/debugging.html#chrome-developer-tools

Another potential issue (this happened to me): even if you make all of the necessary code changes (cf. http://moduscreate.com/automated-ip-configuration-for-react-native-development/ for a good walkthrough), start the server, etc., it may still fail because of App Transport Security. You'll need to add your IP address to the list of NSExceptionDomains in the app's Info.plist file or, alternatively, disable ATS completely (discouraged--read above article to understand why).

Had ipv6 firewall enabled on my Asus router, so phone was unable to connect to React Native Packager :) 

## API

link to ArmiAPI

## Installation

Insert instructions :)

## Start iOS app

    ```
    react-native run-ios
    ```
or, open Xcode project and simulate

## Testing

todo
