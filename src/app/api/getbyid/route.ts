import db from "../../server/pb";

export async function POST(req: any, res: any) {
  const formData = await req.formData();
  const collection = formData.get("collection");
  const id = formData.get("id");
  console.log(collection, id);
  const beer = await db.getById(collection, id);
  return new Response(JSON.stringify(beer), { status: 200 });
}
