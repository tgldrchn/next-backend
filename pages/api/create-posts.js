import getAndpostRequest from "@/utils/getAndpostRequest";

export default async function handler(req, res) {
  const { text, name } = req.body;
  console.log(name, text);
  const result = await getAndpostRequest("insertOne", {
    document: { text: text, name: name },
  });
  res.status(200).json(result);
}
