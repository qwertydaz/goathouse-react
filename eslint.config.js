import eslintParser from '@typescript-eslint/parser';
import eslintPlugin from '@typescript-eslint/eslint-plugin';
import eslintPluginReact from 'eslint-plugin-react';
import eslintPluginReactHooks from 'eslint-plugin-react-hooks';
import eslintPluginPrettier from 'eslint-plugin-prettier';
import prettierConfig from './prettier.config.js';

const eslintConfig = [{
    ignores: ['node_modules', 'dist'],
    languageOptions: {
      parser: eslintParser,
      parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    plugins: {
      '@typescript-eslint': eslintPlugin,
      'react': eslintPluginReact,
      'react-hooks': eslintPluginReactHooks,
      'prettier': eslintPluginPrettier,
    },
    rules: {
      'prettier/prettier': ['warn', prettierConfig],
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
    files: ['**/*.ts', '**/*.tsx'],
  },
];

export default eslintConfig;
