# Pokédex

[![Build status](https://img.shields.io/travis/rbardini/pokedex.svg)](https://travis-ci.org/rbardini/pokedex)
[![Code coverage](https://img.shields.io/codecov/c/github/rbardini/pokedex.svg)](https://codecov.io/gh/rbardini/pokedex)
[![Dependencies status](https://img.shields.io/david/rbardini/pokedex.svg)](https://david-dm.org/rbardini/pokedex)
[![devDependencies status](https://img.shields.io/david/dev/rbardini/pokedex.svg)](https://david-dm.org/rbardini/pokedex?type=dev)

🎒 A server-rendered universal JavaScript application for Pokémon trainers.

Powered by [Razzle](https://github.com/jaredpalmer/razzle) and [PokéAPI](https://pokeapi.co/).

## Demo

https://rbardini-pokedex.herokuapp.com

## Quick Start

```bash
git clone https://github.com/rbardini/pokedex.git
cd pokedex
npm install
npm start
```

Then open http://localhost:3000/ to see the app.

Below is a list of commands you will probably find useful:

- `npm start` runs the project in development mode.
- `npm run build` builds the app for production to the `build` folder.
- `npm run start:prod` runs the compiled app in production mode.
- `npm test` runs the test watcher (Jest) in an interactive mode.
- `npm start -- --inspect` starts the node server and enables the inspector agent.
- `npm start -- --inspect-brk` starts the node server, enables the inspector agent and breaks before code starts.

If the application is running and you need to manually restart the server, you do not need to completely kill and rebundle the application. Instead, you can just type `rs` and press enter in terminal.

## License

MIT
