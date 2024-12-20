"use client";
import { useEffect, useState } from "react";

export default function urls() {
  const [urls, setUrls] = useState([]);

  useEffect(() => {
    // Fetch data from the GET API
    fetch("/api/generate")
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          setUrls(data.data);
          console.log(data.data);
        }
      });
  }, []);

  return (
    <div>
      <h1 className="text-center border-l-8 text-3xl">List of URLs</h1>
      <ul className="border border-gray-300 rounded-lg overflow-hidden shadow-md">
        <li className="bg-gray-200 font-bold text-gray-700 flex justify-between px-4 py-2">
          <span>Short URL</span>
          <span>Original URL</span>
        </li>
        {urls.map((url, index) => (
          <li
            key={index}
            className={`flex justify-between px-4 py-2 ${
              index % 2 === 0 ? "bg-gray-100" : "bg-white"
            }`}
          >
            <span>{url.shorturl}</span>
            <a
              href={url.url}
              className="text-blue-500 hover:underline truncate max-w-xs"
              target="_blank"
              rel="noopener noreferrer"
            >
              {url.url}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
