# VSCode ESLint Setup

### 1. Install ESLint extension for VSCode

It is better to use ESLint extension by Dirk Baeumer.

### 2. Install ESLint package
```
npm install eslint --save-dev
```

### 3. Setup configuration file using command:
```
npx eslint --init
```

### 4. It will create .eslintrc.json file

```
{
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "airbnb-base",
        "plugin:@typescript-eslint/recommended"
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": 12,
        "sourceType": "module"
    },
    "plugins": [
        "@typescript-eslint"
    ],
    "rules": {
        "linebreak-style": 0,
        "no-new": 0,
        "indent": ["error", 4],
        "max-classes-per-file": 0,
        "class-methods-use-this": 1
    }
}
```

### 5. If you want to extend a specific configuration file, you can use the extends property and specify the path to the file.

```
"extends": [
        "airbnb-base",
        "plugin:@typescript-eslint/recommended"
    ],
```

### 6. You can use oveerides section to enable or disbale rules specifically for some files. 

```
"overrides": [
    {
        // enable the rule specifically for TypeScript files
        "files": ["*.ts", "*.tsx"],
        "rules": {
        "@typescript-eslint/explicit-module-boundary-types": ["error"]
        }
    }
]
```

### 7. You can control which rules are enabled and at what error level in rules section.

```
"rules": {
    "linebreak-style": 0,
    "no-new": 0,
    "indent": ["error", 4],
    "max-classes-per-file": 0,
    "class-methods-use-this": 1
}
```

### 8. To change a rule setting, you must set the rule ID equal to one of these values:

"off" or 0 - turn the rule off
"warn" or 1 - turn the rule on as a warning (doesn't affect exit code)
"error" or 2 - turn the rule on as an error (exit code is 1 when triggered)