import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { assist } from '@sanity/assist';
import { schemaTypes } from './src/sanity/schemaTypes';

export default defineConfig({
  name: 'ramia-studio',
  title: 'Ramia Studio',
  projectId: 'xfzft9lx',
  dataset: 'production',
  basePath: '/studio',
  plugins: [
    structureTool(),
    assist({
      translate: {
        document: {
          languageField: 'language',
          documentTypes: ['product'],
        },
      },
    }),
  ],
  schema: {
    types: schemaTypes,
  },
  document: {
    actions: (prev: any) => prev,
  },
});
