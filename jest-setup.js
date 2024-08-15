import mockAsyncStorage from "@react-native-async-storage/async-storage/jest/async-storage-mock";

jest.mock("react-native", () => {
  const RN = jest.requireActual("react-native");

  RN.Animated.timing = () => ({ start: (callback) => callback && callback() });
  RN.Platform.OS = "android";
  RN.BackHandler = {
    exitApp: jest.fn(),
  };

  RN.AppState = {
    currentState: "active",
    addEventListener: jest.fn((event, handler) => {
      if (event === "change") {
        handler("background");
      }
      return {
        remove: jest.fn(),
      };
    }),
  };

  return RN;
});

jest.mock("@react-native-async-storage/async-storage", () => mockAsyncStorage);

jest.mock("react-native-expo-viewport-units", () => ({
  vw: jest.fn((val) => val),
  vh: jest.fn((val) => val),
}));

jest.mock("@react-three/fiber", () => ({
  Canvas: ({ children }) => <mock-canvas>{children}</mock-canvas>,
  useFrame: jest.fn(),
}));

jest.mock("three", () => {
  const actualThree = jest.requireActual("three");
  return {
    ...actualThree,
    TextureLoader: jest.fn().mockImplementation(() => ({
      load: jest.fn(() => ({
        wrapS: "",
        wrapT: "",
        repeat: { set: jest.fn() },
      })),
    })),
    Vector3: jest.fn().mockImplementation(() => ({
      x: 0,
      y: 0,
      z: 0,
      set: jest.fn(function (x, y, z) {
        this.x = x;
        this.y = y;
        this.z = z;
        return this;
      }),
    })),
    Quaternion: jest.fn().mockImplementation(() => ({
      x: 0,
      y: 0,
      z: 0,
      w: 0,
    })),
    RepeatWrapping: "RepeatWrapping",
  };
});

jest.mock("react-native-reanimated", () => {
  const Reanimated = require("react-native-reanimated/mock");
  Reanimated.default.call = () => {};
  return Reanimated;
});

jest.mock("@react-three/drei/native", () => ({
  useGLTF: jest.fn(),
}));

jest.mock("expo-router", () => ({
  useRouter: jest.fn(),
}));
