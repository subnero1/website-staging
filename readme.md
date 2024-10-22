# Subnero Website

> The future of underwater wireless

![Build Status](https://github.com/subnero1/subnero1.github.io/actions/workflows/broken-links.yml/badge.svg)

## Install

1. clone the project: `git clone git@github.com:subnero1/subnero1.github.io.git && cd subnero1.github.io`

## Development

1. build static pages: `jekyll build`
- start local
server: `jekyll serve --config _dev_config.yml --watch`

- if there's error on `invalid byte sequence in US-ASCII
error: invalid byte sequence in US-ASCII`, run the following in the command line:

  ```sh
  LC_CTYPE="en_US.UTF-8"
  LANG="en_US.UTF-8"
  ```
- push to github pages: `git push origin master`

## Staging

We have a repository called `https://github.com/subnero1/website-staging` to test out the changes before pushing to production. To test out the changes, this repository gets built and served at `https://subnero1.github.io/website-staging/`.

To push a branch that you're working on to staging,

1. Add a new remote to your local repository: `git remote add staging git@github.com:subnero1/website-staging.git`
2. Push your branch to the staging repository: `git push staging <your-branch-name>` (only once)
3. Change the ["Pages" settings of the staging repository](https://github.com/subnero1/website-staging/settings/pages) to serve your branch

![staging branch](/_imgs/staging.png)

4. Wait for the build to finish and check the changes at `https://subnero1.github.io/website-staging/`