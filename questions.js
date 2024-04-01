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
       * use dockerfile for deploy
       * use build-image action
       * use .env, .env.local, .env.production
       */
      {
        title: 'Nextjs App',
        value: 'next',
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
       * use turbo to manage project
       */
      {
        title: 'Monorepo App',
        value: 'monorepo',
      },
      /**
       * use vite build package
       * use changesets to manage package version
       */
      {
        title: 'Lib for Browser',
        value: 'lib',
      },
      /**
       * use tsup build package
       * use changesets to manage package version
       * tsconfig - moduleResolution use "Node"
       */
      {
        title: 'Lib for Node',
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
  {
    if: 'vue || next',
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
  // lib mode
  {
    if: 'lib',
    message: 'which frame this lib dependences?',
    choices: [
      { title: 'vue', value: 'vueLib' },
      { title: 'none', value: 'noFrame' },
    ],
  },
]
