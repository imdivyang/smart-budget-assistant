# Interview task template

This is the starter project for your live coding session.

## 🚀 Getting Started

1.  Install dependencies:

    ```bash
    npm install
    # or
    yarn install
    ```

2.  Start the development server:

    ```bash
    npx expo start
    ```

3.  Run the app:
    - On a **physical device** using the [Expo Go](https://expo.dev/client) app (scan QR code)
    - Or press `i` to open in **iOS simulator**, or `a` for **Android emulator**

> 💡 If the QR scan doesn’t work on LAN, try starting with tunnel mode:
>
> ```bash
> npx expo start --tunnel
> ```

> This project uses **TypeScript + Expo**, no native modules or additional setup required.

## 🛠️ Common Fixes

### EMFILE: too many open files (macOS)

If the project crashes with a `too many open files` error during `npx expo start`, run the following:

```bash
watchman watch-del-all
npx expo start --clear
```
