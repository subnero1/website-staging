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

## FAQ Section
The steps to add new content to the FAQ section are as follows:

1. Access the FAQ content by navigating to the "_faq" folder in the website's directory.
2. Create a new file using the question as the title and the answer as its content, maintaining the established filename pattern.
3. Indicate the relevant section in the file's header to categorize the content to the right section.
4. Commit the changes to a new branch and initiate a Pull Request (PR) for review.
5. Share the link to the PR on the "faq" Discord channel.
6. Validate the content's rendering on the staging website to ensure accurate presentation.
7. Upon PR approval, merge the changes into the main branch and subsequently delete the branch.
