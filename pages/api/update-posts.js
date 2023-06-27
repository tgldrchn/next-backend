import getAndpostRequest from "@/utils/getAndpostRequest";

export default async function handler(req, res) {
  try {
    const id = req.query._id;
    const text = req.body.text;
    const result = await getAndpostRequest("updateOne", {
      filter: { _id: { $oid: id } },
      update: { $set: { text: text } },
    });
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json(error);
  }
}
