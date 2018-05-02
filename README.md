## React Starter Kit Example v0.25
This is an example create-react-app project that includes styled-components, unit tests, flow and a modified folder structure.

### Installation
1. Clone the project
2. Go to path \src\main\react in terminal and type 'npm install'
3. After install is done type 'npm start' and app will launch in localhost:3000

#### Unit Tests (after install)
1. Go to path \src\main\react in terminal and type 'npm test'

#### Flow (after install)
1. Go to path \src\main\react in terminal and type 'npm run flow'

OR

1. Install flow globally 'npm install --global flow-bin'
2. Go to path \src\main\react in terminal and type 'flow status'

### ESLint Settings
Follows Airbnb JavaScript style guide (https://github.com/airbnb/javascript) with some custom rules.


### Folder Structure Example
components/\
├── app/\
│ ├── App.js\
│ ├── AppSpec.js\
│ └── header/\
│ │├── Header.js\
│ │├── HeaderSpec.js\
│ │├── HeaderView.js\
│ │├── HeaderViewSpec.js\
│ │├── styles.js\
│ │└── navbar/\
│ ││├── Navbar.js\
│ ││├── NavbarSpec.js\
│ ││├── NavbarView.js\
│ ││├── NavbarViewSpec.js\
│ ││└── styles.js\
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
config/

### Installed packages

- Styled Components
- Flow
- ESLint
- Chai / Enzyme
- Babel
- React Router Dom
- Karma
