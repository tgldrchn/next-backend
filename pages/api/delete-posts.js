import getAndpostRequest from "@/utils/getAndpostRequest";

export default async function handler(req, res) {
  const id = req.query._id;
  console.log(id);
  const result = await getAndpostRequest("deleteOne", {
    filter: { _id: { $oid: id } },
  });
  res.status(200).json(result);
}
