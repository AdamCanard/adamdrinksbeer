import db from "../../server/pb";

export async function GET() {
  const drankList = await db.getDrank();
  return new Response(JSON.stringify(drankList), { status: 200 });
}
