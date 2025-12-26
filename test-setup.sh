#!/bin/bash

echo "🚀 Testing Krihaa React Native App Setup..."

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo "❌ Error: package.json not found. Run this from the KrihaaApp directory."
    exit 1
fi

echo "✅ Found package.json"

# Check if node_modules exists
if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies..."
    npm install
else
    echo "✅ Dependencies already installed"
fi

# Check TypeScript compilation
echo "🔍 Checking TypeScript compilation..."
npx tsc --noEmit

if [ $? -eq 0 ]; then
    echo "✅ TypeScript compilation successful"
else
    echo "❌ TypeScript compilation failed"
    exit 1
fi

# Check if Firebase config exists
if [ -f "src/config/firebase.ts" ]; then
    echo "✅ Firebase configuration found"
else
    echo "❌ Firebase configuration missing"
    exit 1
fi

# Check if all screens exist
screens=("HomeScreen.tsx" "CategoryScreen.tsx" "ArticleScreen.tsx" "SearchScreen.tsx")
for screen in "${screens[@]}"; do
    if [ -f "src/screens/$screen" ]; then
        echo "✅ $screen found"
    else
        echo "❌ $screen missing"
        exit 1
    fi
done

echo ""
echo "🎉 All checks passed! Your Krihaa React Native app is ready."
echo ""
echo "To run the app:"
echo "  Android: npm run android"
echo "  iOS: npm run ios"
echo ""
echo "Make sure you have:"
echo "  - Android emulator running (for Android)"
echo "  - iOS simulator running (for iOS)"
echo "  - Metro bundler started: npm start"
