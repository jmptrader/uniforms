module.exports = {
  title: 'uniforms',
  tagline: 'A set of React libraries for building forms.',
  organizationName: 'vazco',
  projectName: 'uniforms',
  baseUrl: process.env.NODE_ENV === 'production' ? '/uniforms/' : '/',
  url: 'https://vazco.github.io/',
  headerLinks: [
    {label: 'Blog', blog: true},
    {label: 'Docs', doc: 'installation'},
    {label: 'Playground', page: 'playground'}
  ],
  headerIcon: 'img/uniforms.png',
  favicon: 'img/uniforms.png',
  plugins: [
    {
      name: '@docusaurus/plugin-content-blog',
      options: {path: '../blog'}
    },
    {
      name: '@docusaurus/plugin-content-docs',
      options: {path: '../docs', sidebarPath: require.resolve('./sidebars.json')}
    },
    {
      name: '@docusaurus/plugin-content-pages'
    }
  ]
};