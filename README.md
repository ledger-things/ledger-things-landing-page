# Installation

```
yarn
```

```
// For starting NextJs Server run
yarn next-dev
```

NextJs Server will start in `localhost:3000`


...
```

# Folder Structure

```
/packages
	/landing [NextJs version of the project]
```

# Stack We Have Used

1. Lerna (A tool for managing JavaScript projects with multiple packages. https://lernajs.io)
2. Yarn Workspace
3. React Js and Next Js
5. Styled System and Styled Components
6. Firebase Deployment.
7. Vercel Deployment.


### NextJs

To build the nextjs version run below commands.

```
yarn next-build

// To check the build version locally run below command
// Not necessary if you don't want to check on your local.

yarn next-start
```

If you want to host the static html version of your nextjs project then run the below command to build static version

```
yarn next-export
```

## Running with Docker

To run the SuperProps Next.js app in docker

```
yarn next-export
docker build -t superprops/landing-next -f ./packages/landing/Dockerfile .
docker run -it -p 3000:3000 superprops/landing-next:latest
Open http://localhost:3000
```


Now run below command .

```
vercel
```

### NextJs

For deploying nextjs on vercel.com go to `packages/landing`. Now run below command .

```
vercel
```

> **Make sure you have `vercel-cli` installed in your system.**

## Firebase

### NextJs

Add your project ID at `packages/landing/.firebaserc`

Then, To deploy to your site, run the following command from the `packages/landing` directory.

```
yarn deploy
```

## Netlify

At first, open an account on netlify and go to `sites` tab.

### NextJs

Run the below command to make the project netlify deploy ready from `packages/landing`.

```
yarn export
```

After running the above command go to `/landing` folder. You will find a `out` folder there. Drag
and drop this `out` folder on netlify `sites` tab. Now after finishing the upload you are ready to go.

