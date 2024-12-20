import { redirect } from "next/navigation"
import clientPromise from "@/lib/mongodb"

export default async function Page({ params }) {
    const shorturl = (await params).shorturl
    const client = await clientPromise;
    const db = client.db(process.env.MONGO_DB_NAME || 'shortlinks');
    const collection = db.collection('url');
    const existingDoc = await collection.findOne({ shorturl });
    if (existingDoc) {
     redirect(existingDoc.url)
    }else{
     redirect(`${process.env.NEXT_PUBLIC_HOST}`)
    }
    return <div>My Post: { shorturl}</div>
  }