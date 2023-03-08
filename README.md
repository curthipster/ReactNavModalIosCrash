
This repo demos an iOS crash in React Native Navigation.

## Building

1. Install dependencies
  ```bash
  yarn
  cd ios
  pod install
  ```
2. Start metro
  ```bash
  cd ..
  yarn start
  ```
3. Build and run iOS app: type "i" in metro terminal

## Bug reproduction

1. Launch iOS app
2. Press "Open modal"
3. Press "Navigate to another tab"
4. See crash