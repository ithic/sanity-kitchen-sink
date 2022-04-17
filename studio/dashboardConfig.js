export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '625c53e737f5c31281882304',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-bwa6y3zg',
                  apiId: '04da2d07-04b4-4980-a4c3-13b6268ef0ae'
                },
                {
                  buildHookId: '625c53e81f553d133790b6ca',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-vis34e2a',
                  apiId: '54eb15ca-6d7c-4d9a-9e08-a63e3c639970'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/ithic/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-vis34e2a.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
