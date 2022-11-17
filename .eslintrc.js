module.exports = {
  "env": {
    "browser": true,
    "es2021": true,
    "node": true
  },
  "globals": {
    "process": true
  },
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:cypress/recommended",
    "important-stuff",
    "prettier"
  ],
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": "latest",
    "sourceType": "module"
  },
  "plugins": ["react", "eslint-plugin-css-modules"],
  "rules": {
    // "no-use-before-define": ["off"],
    // "indent": ["error", "tab"],
    // "linebreak-style": ["error", "unix"],
    // "quotes": ["error", "double"],
    // "semi": ["error", "always"]
    "react/react-in-jsx-scope": [0, "off"],
    "react/display-name": ["off"],
    "react/prop-types": [0, "off"],
    "react/no-unescaped-entities": ["off"],

    "no-console": ["error", { "allow": ["warn", "error", "log"] }]
  },
  "overrides": [
    {
      files: [
        "**/*.test.js",
        "**/*.test.jsx",
        "**/*.test.tsx",
        "**/*.spec.js",
        "**/*.spec.jsx",
        "**/*.spec.tsx"
      ],
      env: {
        jest: true
      }
    }
  ],
  "settings": {
    "react": {
      "version": "detect"
    }
  }
};
