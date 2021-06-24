# Micro front-end POC

**This POC is about implementing micro frontend artitecture with library components.**

## Tech Stack

    1. React
    2. Mobx
    3. Typescript
    4. Webpack

## Concept

    Instead of having micro apps and loading them with Iframe we are creating library compoents and importing the same in main app.

## Advantage

    1. Since library components are bundled with the main app so over all bundles that are loaded for the app gets reduces as common dependencies are shared.
    2. Sharing of cookies, session storage, local storage can be shared accross library components.
    3. Losely coupled library components can be integrated in other apps.

## Project setup

    1. yarn install
    2. yarn start
        * yarn start:dev - for dev build
        * yarn start:build - for prod builds
    3. Update path in micro-todo-lib under dependency in package.json with your local directory path for development purpose.

## Improvements required / planned

    1. Code splitting
    2. Service worker implementation
    3. Pre-commit hooks
    4. micro-todo-lib dependency will be via git tag
