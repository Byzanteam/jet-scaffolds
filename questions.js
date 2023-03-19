export default [
  {
    name: 'type',
    message: 'Which type is this project?',
    choices: [
      /**
       * use dockerfile for deploy
       * use build-image action
       * use .env, .env.local, .env.production
       */
      {
        title: 'Vue App',
        value: 'vue',
      },
      /**
       * use taro
       * use beta-preview workflow
       */
      {
        title: 'Mini Program',
        value: 'miniprogram',
      },
      /**
       * use changesets to manage the publication of sub-packages
       */
      {
        title: 'Monorepo App',
        value: 'monorepo',
      },
      {
        title: 'JS/TS Lib',
        value: 'js',
      },
      {
        title: 'Node Tool',
        value: 'node',
      },
    ],
  },
  {
    // vue app only
    if: 'vue',
    multiple: true,
    message: 'What features do you want to use for this project?',
    choices: [
      {
        title: 'Vue Router',
        value: 'router',
        selected: true,
      },
      {
        title: 'Auto Import',
        value: 'auto-import',
        hint: 'use unplugin-auto-import to auto import api of vue or vue-router, use unplugin-vue-components to auto import component',
      },
      {
        title: 'I18n',
        value: 'i18n',
      },
    ],
  },
  // vue app only
  {
    if: 'vue',
    message: 'Which css resolution do you want?',
    choices: [
      {
        title: 'Tailwindcss',
        hint: 'preferred and recommendation',
        value: 'tailwindcss',
      },
      {
        title: 'Sass',
        value: 'sass',
      },
      {
        title: 'None',
      },
    ],
  },
]
