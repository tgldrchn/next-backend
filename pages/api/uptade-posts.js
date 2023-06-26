import getAndpostRequest from "@/utils/getAndpostRequest";

export default async function handler(req, res) {
  const id = req.query._id;
  const text = req.body.text;
  console.log(text);
  console.log(id);
  const result = await getAndpostRequest("uptadeOne", {
    filter: { _id: { $oid: id } },
    update: {
      $set: {
        text: text,
      },
    },
  });
  res.status(200).json(result);
}
