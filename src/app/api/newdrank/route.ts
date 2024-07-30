"use server";
import db from "../../server/pb";

export async function POST(req: any, res: any) {
  const formData = await req.formData();
  const inputName = formData.get("Beer");
  const inputBrewery = formData.get("Brewery");
  const inputRating = formData.get("Rating");
  const data = {
    Beer: inputName,
    Brewery: inputBrewery,
    Rating: inputRating,
  };
  db.addDrank(data);
  return new Response(JSON.stringify({ data: data }), {
    status: 200,
  });
}
