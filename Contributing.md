# Contributing to FlixMenu

We love your input! We want to make contributing to this project as easy and transparent as possible, whether it's:

- Reporting an issue
- Discussing the current state of the code
- Submitting a fix
- Proposing new features
- Becoming a maintainer

# Branches

- staging -> PR ( Pull Request ) this branch for everything.
- prod -> Dont touch this branch, this is what is running in production.

# Our Development Process
All changes happen through pull requests. Pull requests are the best way to propose changes. We actively welcome your pull requests and invite you to submit pull requests directly [here](https://github.com/FlixMenu/FlixMenu-api/pulls), and after review, these can be merged into the project.


# Using the Project's Standard Commit Messages

- 1. Make sure your shell path is in the root of the project (not inside any of the packages).
- 2. Run `npm install` or `yarn`
- 3. Stage the files you are committing with `git add [files]` or `git add .`.
- 4. Create a separate branch and checkout. `git branch <branch-name>` `git checkout <branch-name>`
- 5. Use `git status` to check if you are on that branch.
- 6. Run `git commit -m "action done / feature added"`.

# Pull Requests

- 1. Fork the repo and create your branch from `staging` using `git branch <branch-name>`. DO NOT USE `staging` as the branch name.
- 2. Ensure to describe your pull request.

<img src="https://cdn.hashnode.com/res/hashnode/image/upload/v1615760603448/FANNgQ1fy.png?auto=compress,format&format=webp">

# Quickstart Local Frontend Development

## FrontEnd UI (react):

- 1. Run `npm install`
- 2. Make some major changes.
- 3. Fork the [repository](https://github.com/FlixMenu/FlixMenu-web) (click on fork in the top right corner of the screen)

<img src="https://camo.githubusercontent.com/e40ea43919913afd2402494b51345af565ba47b937715baba5ae8f4bc0979579/68747470733a2f2f692e6962622e636f2f524234465653302f53637265656e73686f742d323032312d30352d30372d3135323832372e6a7067">

- 4. Make a pull requests within the [pull request tab](https://github.com/FlixMenu/FlixMenu-web/pulls)

- 5. Add a brief description on what was done.


## Backend ( Nodejs / Express ) Full Development.

How to run locally.

### PostgreSQL

Install PostgreSQL:

- macOS: Run `brew install postgresql`.
- Windows: Follow [this](https://www.postgresqltutorial.com/install-postgresql/) guide.
- Linux: Follow [this](https://www.postgresqltutorial.com/install-postgresql-linux/) guide.


### Create a `.env` file. Paste and update the created .env file to the variables found in `.env.development`

```js

    DATABASE_URL="postgresql://postgres:1234@localhost:5432/flixmenuDB?schema=public"

    ACCESS_TOKEN_SECRET="dfvdfvdfvdv"

    REFRESH_TOKEN_SECRET="dfvdfv"

    MAX_API_REQUEST_COUNT = 100

    CLOUDINARY_NAME="dsfvcdsvc"

    CLOUDINARY_KEY="fgbfgbb"

    CLOUDINARY_SECRET="gdfbgfbf"
```

If a new `.env` variable is added, update `.env.development` and also navigate to `/src/config` and update all exported `env`

```js
    export const ACCESS_SECRET = process.env.ACCESS_TOKEN_SECRET

    export const REFRESH_SECRET = process.env.REFRESH_TOKEN_SECRET

    export const DATABASE_URL = process.env.DATABASE_URL

    export const MAX_API_REQUEST = process.env.MAX_API_REQUEST_COUNT

    export const CLOUDINARY_NAME = process.env.CLOUDINARY_NAME

    export const CLOUDINARY_KEY = process.env.CLOUDINARY_KEY

    export const CLOUDINARY_SECRET = process.env.CLOUDINARY_SECRET
```

## This API uses `Prisma ORM` for managing `Postgresql Database`. So it compulsory you have postgresql installed, if not follow the link below on setting up postgresql and prisma orm on your pc

- ## [Postgresql Setup](https://www.postgresqltutorial.com/postgresql-getting-started/install-postgresql/)

- ## [Prisma Setup](https://www.prisma.io/docs/getting-started/setup-prisma/start-from-scratch/relational-databases-typescript-postgres)


## FlixMenu Database Achitecture 🚀.

```bash

flixDB (Database)

    Users (Tables)

    Posts (Tables)

    ...coming soon

```