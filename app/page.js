import Image from "next/image";
import localFont from "next/font/local";
import Link from "next/link";
const poppins = localFont({
  src: "./fonts/Poppins-ExtraBold.ttf",
 
  variable: "--font-poppins",
  weight: "100 900",
});
export default function Home() {
  return (
   <main className="bg-purple-100 ">
   <section className="grid grid-cols-2 h-[50vh]">
    <div className=" flex flex-col gap-4 items-center justify-center">
      <p className={`text-3xl font-bold  ${poppins.className}`}>The Best URL Shortener</p>
      <p className="px-56">Easy-To-Use URL Shortener designed for simplifying long links into compact.</p>
      <div className="flex gap-4 justify-start items-center">
          <Link href="/shorten">
            <button className="bg-purple-500  text-white shadow-lg p-3 rounded-lg  py-1 font-bold ">
              Try Now
            </button>
          </Link>
          <Link href="/github.com">
            <button className="bg-purple-500 text-white shadow-lg p-3 rounded-lg py-1 font-bold ">
              GitHub
            </button>
          </Link>
        </div>
    </div>
    <div className="flex justify-start relative">
      <Image className="mix-blend-darken" src={"/vector.jpg"} alt="Image Load" fill={true}></Image>
    </div>
   </section>
   </main>
  );
}
