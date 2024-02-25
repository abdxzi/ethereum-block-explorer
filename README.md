# Ethereum Block Explorer
  


This purticular project aims to learn about `ether.js` and `alchemy-sdk` by creating a simple ethereum block explorer app

In this project we chose to use React for a front-end and added minimal front-end code


You can find lots of good docs on the AlchemySDK here:
  * [API Quickstart](https://docs.alchemy.com/reference/alchemy-sdk-quickstart)
  * [API Overview](https://docs.alchemy.com/reference/api-overview)


## Live Demo
<a href="https://ethereum-block-explorer-beta.vercel.app/" target="_blank"><img src="https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white" /></a>


## Getting Started

1. Clone this project, `cd` into project root directory
2. `pnpm install` to download all the project dependencies.
3. Get alchemy api by creating a app in alchemy dashboard [described here](https://docs.alchemy.com/reference/api-overview)
4. Create an empty `.env` file in root directory and add api key `VITE_API_ALCHEMY_API_KEY=`
5. Run `pnpm run dev` to start the app


**⚠️ Note**

> Alchemy API Mainnet Key is a sensitive piece of data. If we were\
> building an enterprise app to conquer the world we would never place\
> this sensitive data in the client code of our blockexplorer project that\
> could potentially be read by anyone.
>
> But hey, we're just learning this stuff right now, not conquering anything\
> yet! :-) It won't be the end of the world to put the Alchemy API key in our\
> front-end code for this project.


