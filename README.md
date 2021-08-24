# [Qnamics](https://qnamics.netlify.app/)

[Presentation](https://youtu.be/Yeh1uznUp64?t=1131) - [Demo](https://youtu.be/Yeh1uznUp64?t=1304) - [Platform](https://qnamics.netlify.app/)

## Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

## Exploring

--> [ACCESSIBLE ONLINE](https://qnamics.netlify.app/) <--

An online version of the app is accessible at https://qnamics.netlify.app/. User interface is accessible on a mobile with `john@mail.com` and any password. Admin interface is accessible on a laptop with `admin@mail.com` and any password.


For a live presentation during the [Quantum Entrepreneurship Lab](https://www.pushquantum.tech/qel-v2) - Demo Day of

--> [the solution](https://youtu.be/Yeh1uznUp64?t=1131)

--> [the web interfaces](https://youtu.be/Yeh1uznUp64?t=1304)

## Repository structure

### `assets`

The assets directory contains uncompiled assets such as Sass files.

### `components`

The components directory contains the Vue.js components. Components make up the different parts of pages and can be reused and imported into pages, layouts and even other components.

### `layouts`

Layouts help to change the look and feel of the app like have distinct layouts for mobile and desktop.

### `pages`

This directory contains the application views and routes.

### `plugins`

The plugins directory contains JavaScript plugins to run before instantiating the root Vue.js Application.

### `static`

This directory contains the static files. 

### `store`

This directory contains the Vuex store files. Having centralized all data interactions there makes it simple to eventually use a real backend.

## Next steps
- [Better authentification management](https://www.digitalocean.com/community/tutorials/implementing-authentication-in-nuxtjs-app)
