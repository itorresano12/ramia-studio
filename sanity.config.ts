import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { assist } from '@sanity/assist';
import { schemaTypes } from './src/sanity/schemaTypes';

export default defineConfig({
  name: 'ramia-studio',
  title: 'Ramia Studio',
  projectId: import.meta.env.PUBLIC_SANITY_PROJECT_ID || 'placeholder-id',
  dataset: import.meta.env.PUBLIC_SANITY_DATASET || 'production',
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
