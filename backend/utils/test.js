import axios from "axios";
import fs from "fs";
const apiKey = process.env.CHATGPT_API_KEY;

const headers = {
  "Content-Type": "application/json",
  Authorization: `Bearer ${apiKey}`,
};

function encodeImage(filePath) {
  // Read the file and convert it to base64
  const file = fs.readFileSync(filePath);
  return Buffer.from(file).toString("base64");
}

export function test(req, res) {
  const fileName = "/Users/nagarjunarapolu/Downloads/demo-for-par-global/backend/utils/sample.jpeg";

  const base64Image = encodeImage(fileName);
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
                  description: String,
                  quantity: Number,
                  unitPrice: Number,
                  extendedPrice: Number
                }]
              } make sure you dont have anything else apart from the json 
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
    .then((response) => {
      // Remove the backticks and any additional whitespace or newlines
      let responseString = response.data.choices[0].message.content
        .replace(/```json\n|\n```/g, "")
        .trim();

      // Now, parse the JSON string
      let jsonObject;
      try {
        jsonObject = JSON.parse(responseString);
      } catch (e) {
        console.error("Error parsing JSON:", e);
      }

    //   // Now, delete the file
    //   fs.unlink(fileName, (err) => {
    //     if (err) {
    //       console.error("Error deleting file:", err);
    //     } else {
    //       console.log(`Successfully deleted file: ${filenames}`);
    //     }
    //   });

    //   // Now, delete the file
    //   fs.unlink(fileName, (err) => {
    //     if (err) {
    //       console.error("Error deleting file:", err);
    //     } else {
    //       console.log(`Successfully deleted file: ${fileName}`);
    //     }
    //   });

      return res.status(200).json({ data: jsonObject });
    })
    .catch((error) => {
      console.error("Error:", error);

      return res.status(403).json({ message: "You are not authorized" });
    });
}
