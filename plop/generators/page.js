const { pathToRoot, pathToTemplate, validateByLowerCase } = require('../utils');

module.exports = {
  name: 'page',
  options: {
    description: 'Create a new page in "pages" layer',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Enter the page\'s name (i.e. "feedback"):',
        validate: validateByLowerCase,
      },
    ],
    actions: [
      {
        type: 'add',
        path: pathToRoot(
          './src/pages/{{dashCase name}}/ui/views/{{dashCase name}}.tsx',
        ),
        templateFile: pathToTemplate('./page/view.hbs'),
      },
      {
        type: 'add',
        path: pathToRoot(
          './src/pages/{{dashCase name}}/ui/views/{{dashCase name}}.story.tsx',
        ),
        templateFile: pathToTemplate('./page/story.hbs'),
      },
      {
        type: 'add',
        path: pathToRoot('./src/pages/{{dashCase name}}/ui/views/index.ts'),
        templateFile: pathToTemplate('./page/index.hbs'),
      },
      {
        type: 'add',
        path: pathToRoot(
          './src/pages/{{dashCase name}}/ui/connectors/{{dashCase name}}-connector.tsx',
        ),
        templateFile: pathToTemplate('./page/connector.hbs'),
      },
      {
        type: 'add',
        path: pathToRoot(
          './src/pages/{{dashCase name}}/ui/connectors/index.ts',
        ),
        templateFile: pathToTemplate('./page/index.hbs'),
        data: {
          connector: true,
        },
      },
      {
        type: 'add',
        path: pathToRoot('./src/pages/{{dashCase name}}/ui/index.ts'),
        templateFile: pathToTemplate('./page/index.hbs'),
        data: {
          ui: true,
        },
      },
      {
        type: 'add',
        path: pathToRoot('./src/pages/{{dashCase name}}/index.ts'),
        templateFile: pathToTemplate('./page/index.hbs'),
        data: {
          main: true,
        },
      },
    ],
  },
};
