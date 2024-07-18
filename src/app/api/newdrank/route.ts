// "use server";
// import db from "../../server/pb";

// export async function POST(req: any, res: any) {
//   const formData = await req.formData();
//   const postBody = formData.get("postBody");
//   const userId = formData.get("userId");
//   console.log(postBody);
//   const data = {
//     postBody: postBody,
//     user: userId,
//   };
//   db.addDrank(data);
//   return new Response(JSON.stringify({ postBody: postBody }), {
//     status: 200,
//   });
// }
