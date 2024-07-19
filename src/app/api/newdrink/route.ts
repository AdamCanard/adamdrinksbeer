"use server";
import db from "../../server/pb";

export async function POST(req: any, res: any) {
  const formData = await req.formData();
  const inputBeer = formData.get("beer");
  const inputRequest = formData.get("requestedBy");
  const inputBrewery = formData.get("brewery");
  const data = {
    Beer: inputBeer,
    Brewery: inputBrewery,
    Requested_by: inputRequest,
  };
  db.addDrink(data);
  return new Response(JSON.stringify({ data: data }), {
    status: 200,
  });
}
