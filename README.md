# xendata-cloud

## Installation

1. **Clone the repository:**
   ```sh
   git clone <repo-url>
   cd xendata-cloud
   ```

2. **Install dependencies:**
   ```sh
   npm install
   ```

## Running in Development

To start the app in development mode with hot reloading:
```sh
npm start
```

## Building the App

To package the app for distribution:
```sh
npm run make
```

This will generate build artifacts in the `out/` directory. For macOS ARM64, you will find:
- A `.zip` installer at `out/make/zip/darwin/arm64/nsa_electron_app-darwin-arm64-1.0.0.zip`
- An unpacked `.app` bundle at `out/nsa_electron_app-darwin-arm64/nsa_electron_app.app`

## Running the Packaged App (macOS)

You can run the packaged app directly:

### Option 1: Using Finder
- Open `out/nsa_electron_app-darwin-arm64/` in Finder.
- Double-click `nsa_electron_app.app` to launch the application.

### Option 2: Using Terminal
- Run the following command:
  ```sh
  open out/nsa_electron_app-darwin-arm64/nsa_electron_app.app
  ```

### Option 3: Run the Executable Directly
- Run the following command:
  ```sh
  ./out/nsa_electron_app-darwin-arm64/nsa_electron_app.app/Contents/MacOS/nsa_electron_app
  ```

## Notes
- The output paths and file names may differ if you build for other platforms or architectures.
- For Windows or Linux builds, check the corresponding folders in `out/make/`.