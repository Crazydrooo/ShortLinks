"use client";

import Link from "next/link";
import { useState } from "react";

const Shorten = () => {

  const [url, setUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [generated, setGenerated] = useState(false);

  const generate =()=>{
    const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

const raw = JSON.stringify({
  "url": url,
  "shorturl": shortUrl
});

const requestOptions = {
  method: "POST",
  headers: myHeaders,
  body: raw,
  redirect: "follow"
};

fetch("/api/generate", requestOptions)
  .then((response) => response.json())
  .then((result) => {
    setUrl(""),setShortUrl(""),console.log(result ),setGenerated(`${process.env.NEXT_PUBLIC_HOST}/${shortUrl}`), alert(result.message)})
  .catch((error) => console.error(error));
  }

  // const handleChange = () => {};
  return (
    <div className="mx-auto max-w-lg bg-purple-100 my-16 p-8 rounded-lg flex flex-col gap-4">
      <h1 className="font-bold text-2xl ">Genertae Your Short URL</h1>
      <div className="flex flex-col gap-2">
        <input
          value={url}
          type="text"
          placeholder="Enter Your URL"
          className="px-4 py-2 focus:outline-purple-600 rounded-md"
          onChange={(e)=>(setUrl(e.target.value))}
        />
        <input
          value={shortUrl}
          type="text"
          placeholder="Enter Your Preffered short URL text"
          className="px-4 py-2 focus:outline-purple-600 rounded-md"
      
          onChange={(e)=>(setShortUrl(e.target.value))}
        />
        <button onClick={generate} className="bg-purple-500 shadow-lg p-3 rounded-lg  py-1 font-bold text-white my-3"> Generate</button>
      </div>

      {generated &&  <> <span className="font-bold text-lg">Your Link</span> 
      <code>  <Link target="_blank" href={generated}> {generated} </Link></code> </>}
    </div>
  );
};

export default Shorten;
