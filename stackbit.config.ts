import { defineStackbitConfig } from '@stackbit/sdk'

export default defineStackbitConfig({
  contentSources: [
    {
      name: 'content',
      type: 'git',
      rootPath: 'content',
      models: [
        {
          name: 'homepage',
          label: 'Página de inicio',
          type: 'page',
          filePath: 'homepage.md',
          urlPath: '/',
          fields: [
            { type: 'string', name: 'title', label: 'Título' },
            { type: 'string', name: 'subtitle', label: 'Subtítulo' },
            { type: 'markdown', name: 'body', label: 'Contenido principal' }
          ]
        }
      ]
    }
  ]
})
