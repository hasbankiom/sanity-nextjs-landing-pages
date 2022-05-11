export default {
  widgets: [
    // {
    //   name: 'sanity-tutorials',
    //   options: {
    //     templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
    //   }
    // },
    { name: 'structure-menu' },
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
                  buildHookId: '627bd50e6f064d0b72eb67bf',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-3cn4zr1f',
                  apiId: '7b953f95-03f5-4f50-b04e-9b790f5fe163'
                },
                {
                  buildHookId: '627bd50e75f9bf09e333a31a',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-a6v72ri1',
                  apiId: '31b75906-6503-4ef1-b267-48457a5ea55a'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/hasbankiom/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-a6v72ri1.netlify.app', category: 'apps' }
        ]
      }
    },
    {
      name: 'document-list',
      options: { title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page'] },
      layout: { width: 'medium' }
    },
    { name: 'project-users', layout: { height: 'auto' } }
  ]
}
