# Krihaa News - React Native App

[![Build Android APK](https://github.com/jayakrishnaa18/krihaa-app/actions/workflows/build-android.yml/badge.svg)](https://github.com/jayakrishnaa18/krihaa-app/actions/workflows/build-android.yml)

A mobile news application for Krihaa News platform built with React Native.

## 🚀 Automated Builds

This repository uses GitHub Actions to automatically build Android APK files:

- **Triggers**: Push to main/master branch, Pull requests, Manual dispatch
- **Output**: Ready-to-install APK file
- **Download**: Check [Releases](../../releases) for latest APK

## 📱 Features

- Latest news feed from Krihaa News
- Category browsing (Politics, Sports, Movies, Tech)
- Article search functionality
- Firebase backend integration
- Responsive mobile design

## 🔧 Development

```bash
# Install dependencies
npm install

# Run on Android (requires Android Studio)
npx react-native run-android

# Run on iOS (requires Xcode)
npx react-native run-ios
```

## 📦 Building APK

### Automatic (Recommended)
Push code to GitHub - APK will be built automatically and available in Releases.

### Manual
```bash
cd android
./gradlew assembleRelease
```

## 🏪 Play Store Deployment

1. Download APK from [Releases](../../releases)
2. Test on Android device
3. Upload to Google Play Console
4. Complete store listing
5. Submit for review

## 📄 License

© 2024 Krihaa News. All rights reserved.
