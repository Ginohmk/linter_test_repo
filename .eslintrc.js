module.exports = {
  "env": {
    "browser": true,
    "es2021": true,
    "node": true
  },
  "globals": {
    "process": true
  },
  "extends": ["eslint:recommended"],
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": "latest",
    "sourceType": "module"
  },
  "plugins": ["react"],
  "rules": {},
  "settings": {
    "react": {
      "version": "detect"
    }
  }
};
