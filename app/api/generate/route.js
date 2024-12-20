// import clientPromise from "@/lib/mongodb"

//  export async function POST(){
// const body = await request.json()
// const client = await clientPromise;
// const db = client.db("shortlinks")
// const collection =db.collection("url")

// // check if the short url Exist
// const result = await collection.insertOne({
//     url:body.url,
//     shorturl:body.shorturl,
// })
//     return Response.json({sucess:true,error:false,message:'URL Generated Sucessfully'})
// }

// import clientPromise from "@/lib/mongodb";

// export async function POST(request) {
//   try {
//     const { url, shorturl } = await request.json();

//     const client = await clientPromise;
//     const db = client.db(process.env.MONGO_DB_NAME || 'shortlinks');
//     const collection = db.collection('url');

//     const result = await collection.insertOne({ url, shorturl });
//     const doc = await collection.findOne({shorturl:body.shorturl})
//     if (doc){
//         return Response.json({
//               success: false,
//               error: true,
//               message: 'Failed to generate URL',
//             })
//     }

//     return new Response(
//       JSON.stringify({
//         success: true,
//         error: false,
//         message: 'URL Generated Successfully',
//       }),
//       { status: 200 }
//     );
//   } catch (error) {
//     console.error('Error:', error);
//     return new Response(
//       JSON.stringify({
//         success: false,
//         error: true,
//         message: 'Failed to generate URL',
//       }),
//       { status: 500 }
//     );
//   }
// }

import clientPromise from "@/lib/mongodb";

export async function POST(request) {
  try {
    const { url, shorturl } = await request.json();

    const client = await clientPromise;
    const db = client.db(process.env.MONGO_DB_NAME || "bitlinks");
    const collection = db.collection("url");

    // Check if the short URL already exists
    const existingDoc = await collection.findOne({ shorturl });
    if (existingDoc) {
      return new Response(
        JSON.stringify({
          success: false,
          error: true,
          message: "URL already exists",
        }),
        { status: 400 }
      );
    }

    // Insert the new URL if it doesn't exist
    const result = await collection.insertOne({ url, shorturl });

    return new Response(
      JSON.stringify({
        success: true,
        error: false,
        message: "URL Generated Successfully",
      }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Error:", error);
    return new Response(
      JSON.stringify({
        success: false,
        error: true,
        message: "Failed to generate URL",
      }),
      { status: 500 }
    );
  }
}

export async function GET(request) {
  const client = await clientPromise;
  const db = client.db(process.env.MONGO_DB_NAME || "shortlinks");
  const collection = db.collection("url");

  const urls = await collection.find({}).toArray();
  return new Response(JSON.stringify({ success: true, data: urls }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
