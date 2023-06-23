import getAndpostRequest from "@/utils/getAndpostRequest";

export default async function handler(req, res) {
  const id = req.query._id;
  const text = req.query;

  console.log(id);
  const result = await getAndpostRequest("uptadeOne", {
    filter: { _id: { $oid: id } },
    uptade: {
      $set: {
        text: "ssss",
        name: "skh",
      },
    },
  });
  res.status(200).json(result);
}
