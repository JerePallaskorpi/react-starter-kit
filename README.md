## React Starter Kit Example v1.1
This is an example [Create React App](https://github.com/facebook/create-react-app) project that includes redux, styled-components, unit tests, flow and a modified folder structure.

### Installation
1. Clone the project
2. Go to path \src\main\react in terminal and type 'npm install'
3. After install is done type 'npm start' and app will launch in localhost:3000

#### Unit Tests (after install)
1. Go to path \src\main\client in terminal and type 'npm test'

#### Flow (after install)
1. Go to path \src\main\client in terminal and type 'npm run flow'

OR

1. Install flow globally 'npm install --global flow-bin'
2. Go to path \src\main\react in terminal and type 'flow status'

### ESLint Settings
Follows Airbnb JavaScript style guide (https://github.com/airbnb/javascript) with some custom rules.

### Folder Structure Example
components/\
├── app/\
│ └── header/\
│ │├── \_\_tests\_\_/\
│ ││├── Header.test.js\
│ ││└── HeaderView.test.js\
│ │├── Header.js\
│ │├── HeaderContainer.js\
│ │├── HeaderView.js\
│ │├── styles.js\
│ │└── navbar/\
├── ui/\
│ ├── blocks/\
│ ││└── Modal/\
│ │ ││├── Footer.js\
│ │ ││├── Header.js\
│ │ ││├── Content.js\
│ │ ││└── index.js\
│ └── elements/\
│ ││└── Button.js\
utils/\
actions/\
reducers/\
store/\
config/

### Installed packages

- Redux
- Styled Components
- Jest / Enzyme
- Flow
- ESLint
- Babel
- React Router Dom
