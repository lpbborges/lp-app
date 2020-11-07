module.exports = {
  preset: "react-native",
  setupFiles: [
    "./node_modules/react-native-gesture-handler/jestSetup.js"
  ],
  setupFilesAfterEnv: [
    "@testing-library/jest-native/extend-expect"
  ],
  moduleFileExtensions: [
    "ts",
    "tsx",
    "js",
    "jsx",
    "json",
    "node"
  ]
}