import db from "../../server/pb";
import { BeerData } from "../../types";

export async function POST(req: any, res: any) {
  const formData = await req.formData();
  const data: BeerData = {
    Beer: formData.get("Beer"),
    Brewery: formData.get("Brewery"),
    By: formData.get("By"),
    Rating: formData.get("Rating"),
  };
  db.addBeer(data);
  return new Response(JSON.stringify({ data: data }), {
    status: 200,
  });
}
