const { pathToRoot, pathToTemplate } = require('../utils');

module.exports = {
  name: 'entity',
  options: {
    description: 'Create a new entity',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: "The entity's name:",
      },
      {
        type: 'input',
        name: 'modelName',
        message: "The model's name",
      },
    ],
    actions: [
      {
        type: 'add',
        path: pathToRoot(
          './src/entities/{{dashCase name}}/model/{{dashCase modelName}}.ts',
        ),
        templateFile: pathToTemplate('./entity/model.hbs'),
      },
      {
        type: 'add',
        path: pathToRoot('./src/entities/{{dashCase name}}/model/index.ts'),
        templateFile: pathToTemplate('./entity/index.hbs'),
        data: {
          import: 'events, effects, selectors',
        },
      },
      {
        type: 'add',
        path: pathToRoot('./src/entities/{{dashCase name}}/ui/index.ts'),
        templateFile: pathToTemplate('./entity/index.hbs'),
      },
      {
        type: 'add',
        path: pathToRoot('./src/entities/{{dashCase name}}/lib/index.ts'),
        templateFile: pathToTemplate('./entity/index.hbs'),
      },
      {
        type: 'add',
        path: pathToRoot('./src/entities/{{dashCase name}}/index.ts'),
        templateFile: pathToTemplate('./entity/main-index.hbs'),
        data: {
          modelImport: 'events, effects, selectors',
        },
      },
      {
        type: 'add',
        path: pathToRoot(
          './src/entities/{{dashCase name}}/{{dashCase name}}.test.ts',
        ),
        templateFile: pathToTemplate('../templates/entity/test.hbs'),
      },
    ],
  },
};
