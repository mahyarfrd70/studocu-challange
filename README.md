# Studocu Challange

The project has been created based on Nextjs and Typescript. The final application is live. It's deployed by Vercel zero configuration deployment, so to check if the application is working you don't need to run it locally, just navigate to [https://studocu-challange.vercel.app/](https://studocu-challange.vercel.app/) to see the last version of application.

## Stack

- Nextjs
- Typescript
- Redux Toolkit
- Tailwind
- Storybook
- Jest
- Testing Library
- Eslint
- Prettier
- Docker

## Run

To run the project, First of all, you need to follow the below steps:

1. You have to have Nodejs installed.

2. Clone the project from repository and open it with your prefered IDE.

3. Run `yarn install` in te root directory.

4. Run `npx husky install` in te root directory.

And now the project is ready to be run in different mode and environment, so to run on different mode please follow the below steps.

#### Development

To run on development mode , you just need to run `yarn dev`, then open `http://localhost:3000` on your browser.

#### Production

To run on production mode , please run `yarn build` and then `yarn start`, afterward, open `http://localhost:3000` on your browser.

#### Test

To run test cases , please run `yarn test` .

#### Storybook

To run stories, please run `yarn storybook` , then navigate to `http://localhost:6006` from your browser.

## Run with docker

To run the project with docker, you have to have docker installed and docker daemon started, then follow the below steps:

1. Run `docker build -t your-tag .`

2. Run `docker run -p 3000:3000 your-tag`

Finally, you can see your app run on top the docker on `http://localhost:3000`.

## Conclusion

In this project, I tried to demonstrate both my technical skills and my knowledge of technologies.

Cheers.
