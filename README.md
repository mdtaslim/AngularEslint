# Angular EsLint (Angular + Typescript + EsLint + Style Guide (airbnb) Prettier + Git Hook (husky))

Content
- Angular Project Prepare
  - Create New
  - Clone Existing One
- EsLint Prepare
  - EsLint Configure
  - EsLint lint check
  - EsLint lint check, remove others
  - EsLint UI
  - EsLint / Typescript-eslint Rules use
- EsLint Style Guide
  - Default
  - Airbnb
  - Google
  - Standard
- EsLint with prettier
- Git Hook
  - husky


Tools used in this project
- [nodejs](https://nodejs.org/en/download/)
- [git](https://git-scm.com/)
- [vscode](https://code.visualstudio.com/)
- [Angular - 13.1.1](https://angular.io/guide/setup-local)
- [Typescript - ](https://www.typescriptlang.org/)
- [EsLint](https://eslint.org/)
- [Typescript EsLint](https://github.com/typescript-eslint/typescript-eslint)
- Style Guide
  - [default](https://eslint.org/docs/rules/)
  - [airbnb](https://www.npmjs.com/package/eslint-config-airbnb)
  - [google](https://www.npmjs.com/package/eslint-config-google)
  - [standard](https://www.npmjs.com/package/eslint-config-standard)
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

### Clone existing Angular Project
```
git clone 
```

### Run your angular project
```
ng serve -o --port 3032
```

## EsLint
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

## EsLint Check, remove others
- change vs code settings for typescript disable
- go to settings & search `typescript validate` and uncheck it
- or open the `settings.json` file and set the below options in `settings.json` file

```json
{
  ...
  "typescript.validate.enable" : false
}
```


### EsLint / Typescript-eslint Rules use
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

### EsLint UI
- Install EsLint vs code extention - [EsLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- after eslint command, you can see eslint context menu at hover in vscode


- EsLint Style Guide
  - Default
  - Airbnb
  - Google
  - Standard

- EsLint with prettier

- Git Hook
  - husky

## Problems / Solutions
- git clone problem
```
# problem
error: RPC failed; curl 92 HTTP/2 stream 0 was not closed cleanly: Unknown error code (err 8)

# solution
git config --global http.postBuffer 157286400
```

- eslint configure problem
```
# problem
error: Error while loading rule '@typescript-eslint/await-thenable': You have used a rule which requires parserServices to be generated. You must therefore provide a value for the "parserOptions.project" property for @typescript-eslint/parser.
Occurred while linting C:\Projects\Documents\github\angular\AngularEslint\src\app\app-routing.module.ts

#solution
.eslintrc
{
	...
	
	"parserOptions": {
		"ecmaVersion": 2020,
		"project": ["tsconfig.json"] ,
		"sourceType": "module"
	}
}
```

## References
- tools
  - [eslint](https://eslint.org/)
  - [typescript-eslint](https://typescript-eslint.io/)
  - [prettier](https://prettier.io/)
  - [husky](https://github.com/typicode/husky)
- Style Guide
  - npm
  - Rules
    - [default](https://eslint.org/docs/rules/)
    - [airbnb](https://github.com/airbnb/javascript)
    - [standardjs](https://standardjs.com/rules.html)
    - [google](https://google.github.io/styleguide/jsguide.html)