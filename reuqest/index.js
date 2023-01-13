const express = require('express')
const app = express()


const axios = require('axios');

async function createDatabase() {
    // Your Notion API key
    const apiKey = 'secret_xfBAnRjR7DlZJY1VALE44IHqTdaJgMQMjlIePP3awmW';

    // Set the base URL for the Notion API
    const baseUrl = 'https://api.notion.com/v3';

    try {
        // Authenticate the API key
        const authResponse = await axios.post(`https://api.notion.com/v3/authenticate`, {}, {
            headers: {
                Authorization: apiKey
            }
        });

        // Extract the token from the response
        const token = authResponse.data.token;
        console.log(`API key authenticated successfully, token: ${token}`);

        // Define the properties for the database
        const properties = {
            "Title": {
                "title": {}
            },
            "Description": {
                "rich_text": {}
            },
            "In stock": {
                "checkbox": {}
            },
            "Food group": {
                "select": {
                    "options": [
                        {
                            "name": "🥦Vegetable",
                            "color": "green"
                        },
                        {
                            "name": "🍎Fruit",
                            "color": "red"
                        },
                        {
                            "name": "💪Protein",
                            "color": "yellow"
                        }
                    ]
                }
            },
            "Price": {
                "number": {
                    "format": "dollar"
                }
            },
            "Created at": {
                "date": {}
            },
            "Store availability": {
                "type": "multi_select",
                "multi_select": {
                    "options": [
                        {
                            "name": "Duc Loi Market",
                            "color": "blue"
                        },
                        {
                            "name": "Rainbow Grocery",
                            "color": "gray"
                        },
                        {
                            "name": "Nijiya Market",
                            "color": "purple"
                        },
                        {
                            "name": "Gus's Community Market",
                            "color": "yellow"
                        }
                    ]
                }
            },
            "+1": {
                "people": {}
            },
            "Image": {
                "files": {}
            },
            "createdby": {
                "rich_text": [
                    {
                        "type": "text",
                        "text": {
                            "content": "username",
                            "link": null
                        }
                    }
                ]
            }
        };

        // Create the database
        const createDatabaseResponse = await axios.post(`https://api.notion.com/v1/databases/`, {
            parent: {
                page_id: '73d7c7660a864507aefbb12a768d5780'
            },
            title: [
                {
                    type: 'text',
                    text: {
                        content: 'Grocery List',
                        link: null
                    }
                }
            ],
            properties
        }, {
            headers: {
                Authorization: token
            }
        });

        console.log(`Database created successfully, database ID: ${createDatabaseResponse.data.id}`);
    } catch (error) {
        console.error(error);
    }
}
createDatabase();


const PORT = process.env.PORT || 3020;
app.listen(PORT, () => {
  console.log("server is listening at port http://localhost:3020");
});