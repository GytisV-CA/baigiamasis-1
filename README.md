# FrontEnd + BackEnd ...

## Environment

Server directory must contain .env file with parameters `PORT` and `MONGODB_URI` (to run backend API service on specified port)

Client directory must contain .env file with `VITE_API_URI` (to connect to backend on which API service is hosted)

## Launching scripts

As in Makefile, build and launch sequences are defined in scripts start-dev.sh and start-prod.sh

Alternatively, scripts can be found in package.json separately for server and client.

- server

  `	"scripts": {
	"build": "npx tsc",
	"start": "node dist/app.js",
	"dev": "concurrently \"npx tsc --watch\"  \"nodemon dist/app.js\""
}`

- client

  `	"scripts": {
"dev": "vite",
"build": "tsc && vite build",
"lint": "eslint src --ext ts,tsx --report-unused-disable-directives --max-warnings 0",
"preview": "vite preview"
}`
