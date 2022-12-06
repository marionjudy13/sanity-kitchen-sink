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
                  buildHookId: '638ea4ab611d9d46a111491c',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-m7ey9iie',
                  apiId: 'c9f207fd-e3f3-4b14-abc8-e4d97bab3843'
                },
                {
                  buildHookId: '638ea4ab7df82d3954ac0107',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-y45vgcqn',
                  apiId: '9dea14d6-2880-4dce-b602-d4cc4cf8ec09'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/marionjudy13/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-y45vgcqn.netlify.app', category: 'apps'}
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
