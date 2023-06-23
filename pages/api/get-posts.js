import getAndpostRequest from "@/utils/getAndpostRequest";

export default async function handler(req, res) {
  const result = await getAndpostRequest("find", {});
  res.status(200).json(result);
}
