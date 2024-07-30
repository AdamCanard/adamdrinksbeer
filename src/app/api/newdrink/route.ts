"use server";
import db from "../../server/pb";

export async function POST(req: any, res: any) {
  const formData = await req.formData();
  const inputBeer = formData.get("Beer");
  const inputRequest = formData.get("By");
  const inputBrewery = formData.get("Brewery");
  const data = {
    Beer: inputBeer,
    Brewery: inputBrewery,
    By: inputRequest,
  };
  db.addDrink(data);
  return new Response(JSON.stringify({ data: data }), {
    status: 200,
  });
}
