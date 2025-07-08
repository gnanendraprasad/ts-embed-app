# Angular ThoughtSpot Embed App

This project provides a minimal Angular setup for embedding ThoughtSpot dashboards using the Visual Embed SDK. The original React implementation has been replaced with Angular skeleton files.

## Configuration

Edit `src/environments/environment.ts` and provide the ThoughtSpot host and credentials:

```ts
export const environment = {
  production: false,
  TS_HOST: 'https://your-thoughtspot-host',
  username: 'your-username',
  password: 'your-password'
};
```

## Available Scripts

Run the following commands with the Angular CLI:

- `npm start` – serve the application
- `npm run build` – build for production
- `npm test` – run unit tests
