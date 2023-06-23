export default async function getAndpostRequest(action, object) {
  const result = await fetch(
    `https://ap-south-1.aws.data.mongodb-api.com/app/data-uyssn/endpoint/data/v1/action/${action}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "api-key":
          "CBmUJvvBImZhxaOhZbKY09qIBqJUxHZeq2NoQRSo6HKt7vjqqkmnDpA8Dr6ZIKFr",
      },
      body: JSON.stringify({
        dataSource: "Cluster0",
        database: "Post",
        collection: "posts",
        ...object,
      }),
    }
  ).then((res) => res.json());
  return result;
}
