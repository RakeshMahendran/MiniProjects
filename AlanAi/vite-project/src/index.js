import { Client } from "@notionhq/client"

const notion = new Client(
    { auth: 'secret_xfBAnRjR7DlZJY1VALE44IHqTdaJgMQMjlIePP3awmW' }
    )

const databaseId = "e649f6c751994c0ea85ac6cd6495e7f4"

async function addItem(text,content) {
  try {
    const response = await notion.pages.create({
      parent: { database_id: databaseId },
      properties: {
        title: {
          title:[
            {
              "text": {
                "content": text
              }
            }
          ]
        }
      },
    })
    console.log(response)
    console.log("Success! Entry added.")
  } catch (error) {
    console.error(error.body)
  }
}

addItem("Yurts in Big Sur, California")