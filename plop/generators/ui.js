const {
  pathToRoot,
  pathToTemplate,
  validateByLowerCase,
  validateByAtomicDesign,
} = require('../utils');

module.exports = {
  name: 'ui',
  options: {
    description: 'Create a new UI component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Enter the component\'s name (i.e. "buttons section"):',
        validate: validateByLowerCase,
      },
      {
        type: 'input',
        name: 'type',
        message:
          'Which type the component belongs to by the atomic design (atoms | molecules | organisms):',
        validate: validateByAtomicDesign,
      },
    ],
    actions: [
      {
        type: 'add',
        path: pathToRoot(
          './src/shared/ui/core/{{type}}/{{dashCase name}}/{{dashCase name}}.tsx',
        ),
        templateFile: pathToTemplate('../templates/ui/component.hbs'),
      },
      {
        type: 'add',
        path: pathToRoot(
          './src/shared/ui/core/{{type}}/{{dashCase name}}/{{dashCase name}}.story.tsx',
        ),
        templateFile: pathToTemplate('./ui/story.hbs'),
      },
      {
        type: 'add',
        path: pathToRoot(
          './src/shared/ui/core/{{type}}/{{dashCase name}}/index.ts',
        ),
        templateFile: pathToTemplate('./ui/index.hbs'),
      },
      {
        type: 'add',
        path: pathToRoot(
          './src/shared/ui/core/{{type}}/{{dashCase name}}/{{dashCase name}}.test.tsx',
        ),
        templateFile: pathToTemplate('./ui/test.hbs'),
      },
    ],
  },
};
