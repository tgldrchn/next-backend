import getAndpostRequest from "@/utils/getAndpostRequest";

export default async function handler(req, res) {
  try {
    const id = req.query._id;
    const result = await getAndpostRequest("deleteOne", {
      filter: { _id: { $oid: id } },
    });
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json(error);
  }
}
