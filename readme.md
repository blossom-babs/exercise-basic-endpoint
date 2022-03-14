# Node application that has a POST, GET, PUT and DELETE endpoint, using express

Create a simple [node](https://nodejs.org/en/) application that has a [POST, GET, PUT and DELETE endpoint](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods), using [express](https://expressjs.com/).

### Requirements
1. The POST endpoint should create new data.
2. The GET endpoint should get the created or updated data as applicable.
3. The PUT endpoint should UPDATE the data.
4. The DELETE endpoint should delete the data.

__No persistence is required. No Deployment is required.__

## Bootstrapped with
1. [Typescript](https://www.typescriptlang.org/)
2. [ExpressJs](https://expressjs.com/)
3. [NodeJs](https://nodejs.org/en/)
4. [eslint linter](https://eslint.org/)
5. [Prettier code formatter](https://prettier.io/)

## Getting started
```
$ git clone https://github.com/blossom-babs/exercise-basic-endpoint
$ cd exercise-basic-endpoint
$ npm install
$ npm run build
```
If you want to contribute, before any of the steps above, you would need to __fork__ this project first.
You're ready to hack (and | or contribute) ✌️

## Endpoints
1. GET /students
> returns an array of the students object
2. POST /students
> pushes new student data created to students array and returns the array.
> Request should be made using a JSON object like this 👇
```
{
"id": 5,
"name": "Molade folayan",
"age": 23,
"subjects":["Arts", "Commerce", "Physics"]
}
```
3. PUT /students/:id
> updates the subject of the id of the student to be edited
4. DELETE /students/:id
> retuns the students array without the deleted student data
5. GET /students/:id
> returns the student data that matches the id

## 🤝 Contributing
Contributions, issues and feature requests are welcome!

## Authors
🌸 __Blossom__
- Github: [@blossom-babs](https://github.com/blossom-babs/)
- LinkedIn: [Blossom Babalola](https://www.linkedin.com/in/blossom-babalola/)
- Twitter: [@BlossomBabalola](https://twitter.com/BlossomBabalola)

### Show your support
- Give a ⭐ if you like this project
- [Buy me a coffee](https://www.buymeacoffee.com/blossombabs)