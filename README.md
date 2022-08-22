<a name="readme-top"></a>

<h3 align="center">NoSQL: Social Network API</h3>

<div align="center">

[![MongoDB](https://img.shields.io/badge/MongoDB-green.svg)](https://www.mongodb.com/)
[![Express.js](https://img.shields.io/badge/expressjs-orange.svg)](https://expressjs.com/)
[![Mongoose.js](https://img.shields.io/badge/mongoosejs-red.svg)](https://mongoosejs.com/)

[![Status](https://img.shields.io/badge/status-active-success.svg)]()
[![Repo Size](https://img.shields.io/github/repo-size/xndroli/Social-Network-API.svg)](https://github.com/xndroli/Social-Network-API/issues)
[![GitHub Issues](https://img.shields.io/github/issues/xndroli/Social-Network-API.svg)](https://github.com/xndroli/Social-Network-API/issues)
[![GitHub Pull Requests](https://img.shields.io/github/issues-pr/xndroli/Social-Network-API.svg)](https://github.com/xndroli/Social-Network-API/pulls)

</div>

---

## 🔗 Description <a name = "description"></a>

MongoDB is a popular choice for many social networks due to its speed with large amounts of data and flexibility with unstructured data. Over the week, I’ll use several of the technologies that social networking platforms use in their full-stack applications. Because the foundation of these applications is data, it’s important that I understand how to build and structure the API first.

I'll build an API for a social network web application where users can share their thoughts, react to friends’ thoughts, and create a friend list. I’ll use Express.js for routing, a MongoDB database, and the Mongoose ODM. In addition to using the [Express.js](https://www.npmjs.com/package/express)] and [Mongoose](https://www.npmjs.com/package/mongoose)] packages, I will also optionally use a JavaScript date library of your choice or the native JavaScript `Date` object to format timestamps.

Because this application won’t be deployed, I’ll create a walkthrough video that demonstrates its functionality and all of the following acceptance criteria being met via [insomnia](https://insomnia.rest/). Furthermore I’ll submit a link to the video and add it to the README of this project.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 📝 Table of Contents

- [Description](#description)
- [User Story](#user_story)
- [Acceptance Criteria](#acceptance_criteria)
- [Demo](#demo)
- [Installation](#installation)
- [Usage](#usage)
- [Technology](#built_with)
- [Authors](#authors)
- [Contributing](../CONTRIBUTING.md)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 💡 User Story <a name = "user_story"></a>

```md
AS A social media startup
I WANT an API for my social network that uses a NoSQL database
SO THAT my website can handle large amounts of unstructured data
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## ⛓️ Acceptance Criteria <a name = "acceptance_criteria"></a>

```md
GIVEN a social network API
WHEN I enter the command to invoke the application
THEN my server is started and the Mongoose models are synced to the MongoDB database
WHEN I open API GET routes in Insomnia for users and thoughts
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia
THEN I am able to successfully create, update, and delete users and thoughts in my database
WHEN I test API POST and DELETE routes in Insomnia
THEN I am able to successfully create and delete reactions to thoughts and add and remove friends to a user’s friend list
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 🎞️ Demo <a name = "demo"></a>

[![NoSQL: Social Network API Demo](./public/assets/images/nosql-sns-api-demo-01.gif)](https://github.com/xndroli/Social-Network-API/)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 🏁 Getting Started <a name = "getting_started"></a>

Clone the repo by running:

`git clone https://github.com/xndroli/Social-Network-API.git`

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### 💾 Installation <a name = "installation"></a>

Input basic project information in include in your package by running:

`npm init`

Install the package, and any packages that it depends on by running:

`npm install`

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 💻 Usage <a name="usage"></a>

Run the following command at the root of your project:

`npm start`

If you have nodemon:

`npm run watch`

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## ⛏️ Built With <a name = "built_with"></a>

- [MongoDB](https://www.mongodb.com/) - Database
- [Express.js](https://expressjs.com/) - Server Framework
- [Mongoose.js](https://mongoosejs.com/) - Object Data Modeling
- [Node.js](https://nodejs.org/en/) - Server Environment

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## ✍️ Authors <a name = "authors"></a>

- [@xndroli](https://github.com/xndroli)

See also the list of [contributors](https://github.com/xndroli/Social-Network-API/contributors) who participated in this project.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

---

© 2022 xndroli. All Rights Reserved.
