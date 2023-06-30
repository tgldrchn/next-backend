import getAndpostRequest from "@/utils/getAndpostRequest";

export default async function handler(req, res) {
  try {
    const { text, name, date } = req.body;
    const result = await getAndpostRequest("insertOne", {
      document: { text: text, name: name, date: date },
    });
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json(error);
  }
}
