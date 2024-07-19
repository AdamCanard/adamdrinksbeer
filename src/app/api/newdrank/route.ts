"use server";
import db from "../../server/pb";

export async function POST(req: any, res: any) {
  const formData = await req.formData();
  const inputName = formData.get("name");
  const inputBrewery = formData.get("brewery");
  const inputRating = formData.get("rating");
  const data = {
    Name: inputName,
    Brewery: inputBrewery,
    Rating: inputRating,
  };
  db.addDrank(data);
  return new Response(JSON.stringify({ data: data }), {
    status: 200,
  });
}
