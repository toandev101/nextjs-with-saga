# Redux example

This example shows how to integrate Redux Saga in Next.js.

Usually splitting your app state into `pages` feels natural but sometimes you'll want to have global state for your app. This is an example on how you can use redux that also works with Next.js's universal rendering approach.

Install it and run:

```bash
npm install
npm run dev
# or
yarn
yarn dev
```

## Notes

In the first example we are going to display a digital clock that updates every second. The first render is happening in the server and then the browser will take over. To illustrate this, the server rendered clock will have a different background color (black) than the client one (grey).

The Redux `Provider` is implemented in `lib/redux.js`. Since the `IndexPage` component is wrapped in `withRedux` the redux context will be automatically initialized and provided to `IndexPage`.

All components have access to the redux store using `useSelector`, `useDispatch` or `connect` from `react-redux`.

On the server side every request initializes a new store, because otherwise different user data can be mixed up. On the client side the same store is used, even between page changes.

The example under `providers/SampleProvider`, shows a simple incremental counter implementing a common Redux pattern of mapping state to props. Again, the first render is happening in the server and instead of starting the count at 0, it will dispatch an action in redux that starts the count at 1. This continues to highlight how each navigation triggers a server render first and then a client render when switching pages on the client side.
