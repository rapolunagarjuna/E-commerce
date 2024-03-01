import axios from "axios";
import fs from "fs";
import convertPdf from "./PDFConvertor.js";
import Mapping from "../models/Mapping.js";

const apiKey = process.env.CHATGPT_API_KEY;

function encodeImage(filePath) {
  // Read the file and convert it to base64
  const file = fs.readFileSync(filePath);
  return Buffer.from(file).toString("base64");
}

const headers = {
  "Content-Type": "application/json",
  Authorization: `Bearer ${apiKey}`,
};

export async function chatgpt(req, res) {
  const fileName = req.file.path;

  convertPdf(fileName)
    .then((filenames) => {
      const base64Image = encodeImage(filenames);
      const payload = {
        model: "gpt-4-vision-preview",
        messages: [
          {
            role: "user",
            content: [
              {
                type: "text",
                text: `Summarize the image into a json as 
              {
                purchaseOrderNumber: String,
                shipTo: String,
                shipVia: String,
                orderedFrom: String,
                buyer: String,
                totalExtendedPrice: Number,
                date: Date,
                terms: String,
                items: [{
                  productCode: String,
                  description: String,
                  quantity: Number,
                  unitPrice: Number,
                  extendedPrice: Number
                }]
              } make sure you dont have anything else, apart from this json , also the productCode doesnt start with PG and it is just not numbers
              `,
              },
              {
                type: "image_url",
                image_url: {
                  url: `data:image/jpeg;base64,${base64Image}`,
                },
              },
            ],
          },
        ],
        max_tokens: 300,
      };

      axios
        .post("https://api.openai.com/v1/chat/completions", payload, {
          headers: headers,
        })
        .then(async (response) => {
          // Remove the backticks and any additional whitespace or newlines
          let responseString = response.data.choices[0].message.content
            .replace(/```json\n|\n```/g, "")
            .trim();
          console.log("response from chatgpt " + responseString);

          // Now, parse the JSON string
          let jsonObject;
          try {
            jsonObject = JSON.parse(responseString);
          } catch (e) {
            console.error("Error parsing JSON:", e);
          }
        
          // Now, delete the file
          fs.unlink(filenames, (err) => {
            if (err) {
              console.error("Error deleting file:", err);
            } else {
              console.log(`Successfully deleted file: ${filenames}`);
            }
          });

          // Now, delete the file
          fs.unlink(fileName, (err) => {
            if (err) {
              console.error("Error deleting file:", err);
            } else {
              console.log(`Successfully deleted file: ${fileName}`);
            }
          });

          async function processItems(items) {
            return await Promise.all(items.map(async (item) => {
              let mapping = await Mapping.findOne({ secondaryCode: item.productCode });
              console.log(mapping);
              return {
                primaryCode: mapping ? mapping.primaryCode : "",
                secondaryCode: item.productCode,
                description: item.description,
                quantity: item.quantity,
                unitPrice: item.unitPrice,
                extendedPrice: item.extendedPrice,
              };
            }));
          }

          jsonObject.items = await processItems(jsonObject.items);

          return res.status(200).json({ data: jsonObject });
        })
        .catch((error) => {
          console.error("Error:", error);

          return res.status(403).json({ message: "You are not authorized" });
        });
    })
    .catch((error) => {
      console.error("Error during conversion:", error);

    });
}
