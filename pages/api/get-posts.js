import getAndpostRequest from "@/utils/getAndpostRequest";

export default async function handler(req, res) {
  try {
    const result = await getAndpostRequest("find", {});
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json(error);
  }
}
