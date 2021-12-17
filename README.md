# Angular Eslint (Angular + Typescript + EsLint + Style Guide (airbnb) Prettier + Git Hook (husky))

Content
- Angular Project Prepare
  - Create New
  - Clone Existing One
- Eslint Prepare
  - Eslint Configure
  - Eslint lint check
  - Eslint lint check, remove others
  - Eslint UI
  - Eslint / Typescript-eslint Rules use
- Eslint Style Guide
  - Default
  - Airbnb
  - Google
  - Standard
- EsLint with prettier
- Git Hook
  - husky


Tools used in this project
- nodejs
- git
- vscode
- Angular - 13.1.1
- Typescript - 
- EsLint
- Style Guide
  - 
  - airbnb
  - google
  - standard
- Prettier
- Git Hook
  - husky
  
  
## Angular Project Prepare
- Install nodejs, vscode, git
- update  npm
- Install angular

```
node --version
npm -v

npm install -g @angular/cli
npm install npm@latest -g

```
### Create new Angular Project
```
# create new angular project
ng new AngularEslint
cd AngularEslint
npm install
ng serve -o --port 3032

# init in git
git init
git remote add ...
git add .
git commit -m "message"
git push
```

### Cone existing Angular Project
```
git clone 
```

### Run your angular project
```
ng serve -o --port 3032
```

## Eslint
- `eslint`: ESLint core library
- `@typescript-eslint/parser`: parser that allows ESLint to understand TypeScript code
- `@typescript-eslint/eslint-plugin`: plugin with a set of recommended TypeScript rules

```
npm install eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin --save-dev
```

### Configure EsLint
#### Automatic
```
eslint --init 
```

#### Manualy
- create a file `.eslintrc`

```json
{
  "parser": "@typescript-eslint/parser",
  "plugins": ["@typescript-eslint"],
  "extends": [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking"
  ],
  "parserOptions": {
    "ecmaVersion": 2020,
    "project": ["tsconfig.json"] ,
    "sourceType": "module"
  },
  "rules": {
    "@typescript-eslint/object-curly-spacing": ["error", "always"],
    "@typescript-eslint/array-type": "error"
  }
}
```
- create a file `.eslintignore` for ignore linting
```
node_modules
dist
```

- Add eslint command in `package.json`
```json
{
  ...
  "scripts": {
    "ng": "ng",
    ...
    "lint": "eslint . --ext .ts",
    "lint1": "eslint . --ext .js,.jsx,.ts,.tsx"
  }
}
```

- Run eslint
```
npm run lint
```

## Eslint Check, remove others
- change vs code settings for typescript disable
- go to settings & search `typescript validate` and uncheck it
- or open the `settings.json` file and set the below options in `settings.json` file

```json
{
  ...
  "typescript.validate.enable" : false
}
```


### Eslint / Typescript-eslint Rules use
- add/modify rules in `.eslintrc` file
```json
{
  ...
  "rules": {
    "@typescript-eslint/object-curly-spacing": ["error", "always"],
    "@typescript-eslint/array-type": "error"
  }
}
```

### Eslint UI
- Install EsLint vs code extention - [EsLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- after eslint command, you can see eslint context menu at hover in vscode


- Eslint Style Guide
  - Default
  - Airbnb
  - Google
  - Standard

- EsLint with prettier

- Git Hook
  - husky