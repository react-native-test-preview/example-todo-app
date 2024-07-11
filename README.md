This is a simple todo app that demonstrates how test preview library is used.

## Getting started
This project uses yarn. To run the app:
1. `yarn` - to install dependencies
2. `yarn run ios` or `yarn run android`
3. In new terminal start the preview server with `yarn server` or `npm run server`
4. Run your tests with `yarn test` or `npm run test`

By default the project will run the the app. To see previews of the tests, you have to:
1. set `TEST_PREVIEW=true` in the .env and restart the metro server.
2. run tests in the todo.spec.tsx file