// import { Client } from "@notionhq/client"

// const notion = new Client(
//     { auth: 'secret_xfBAnRjR7DlZJY1VALE44IHqTdaJgMQMjlIePP3awmW' }
//     )

//const databaseId = "e649f6c751994c0ea85ac6cd6495e7f4"
 import axios from 'axios';

const options = {
  method: 'POST',
  url: 'https://api.notion.com/v1/databases',
  headers: {
    accept: 'application/json',
    'Notion-Version': '2022-06-28',
    'content-type': 'application/json'
  },
  data: {parent: 'string', properties: 'string'}
};

axios
  .request(options)
  .then(function (response) {
    console.log(response.data);
  })
  .catch(function (error) {
    console.error(error);
  });