# @zenhomes/react-shared

> Reusable custom react components

[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install @zenhomes/react-shared
```

## Usage

```ts
import { Component } from '@zenhomes/react-shared';
```

## Testing

### Run Storybook

write or copy the following into your terminal

```bash
npm install
npm run storybook
```

After installation and build processes the storybook will open in browser, the process might take several minutes to finish.

## Distribution

### Npm

-   Bump up the version in `package.json` using `npm version patch|minor|major`
-   Add a changelog entry
-   Create a PR
-   Update local with updated release branch
-   Run `npm run build` and publish package with: `npm publish`

### Bit

`TopBar` component as a use case.

-   Check [HERE](https://docs.bit.dev/docs/installation) to install bit cli

-   Create README for component

-   Track component in bit

    ```bash
    bit add src/components/top-bar
    ```

-   Build component

    ```bash
    bit build
    ```

-   Tag version to component

    ```bash
    bit tag top-bar 1.0.

    OR

    bit tag --all  // for incremental version bump
    ```

-   Export component

    ```bash
    bit export zenhomes.react-components
    ```

-   Follow pull request instructions as specified in Npm distrubution above excluding the publish step.

MIT © [zenhomes](https://github.com/zenhomes)
