# Snappy Chat (Client)

## Technologies

- React
- Node.js
- Express
- Socket.io
- MongoDB
- Styled Components

The Client is deployed by [`Netlify`](https://www.netlify.com/)

## Prerequisite

[`Server`](https://github.com/hesbon-osoro/snappy-server) code

Set the APIRoutes [`host`](src/utils/APIRoutes.js) variable to `http://localhost:5000` or your live host.

Copy the .env.example to .env file then put your credentials

```code
# Clone the repo
git clone https://github.com/hesbon-osoro/snappy-chat.git

# Go to directory
cd snappy-chat && yarn

# Start the app
yarn start
```

## Demo

[![`Snappy Register`](src/assets/snappy-chat%20register.png)](https://snappychat.netlify.app/)

[![`Snappy Set Avatar`](src/assets/snappy-chat%20avatar.png)](https://snappychat.netlify.app/)

[![`Snappy Login`](src/assets/snappy-chat%20login.png)](https://snappychat.netlify.app/)

[![`Snappy Welcome`](src/assets/snappy-chat%20welcome.png)](https://snappychat.netlify.app/)

[![`Snappy Start Chat`](src/assets/snappy-chat%20startchat.png)](https://snappychat.netlify.app/)
