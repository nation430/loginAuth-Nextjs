import Image from "next/image";
import { useEffect } from "react";
import Layout from "../components/Layout";

export default function Home() {
  useEffect(() => {});
  return (
    <Layout>
      <div className="pt-56 text-center ">
        <Image
          src="/bg.jpg"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          alt="bg"
          className=" w-full h-full block bg-img"
        />
        <div className="relative z-20 space-y-4">
          <h2 className="font-bold text-4xl ">Welcome to this Amazing App</h2>
          <p>Register to get started</p>
        </div>
      </div>
    </Layout>
  );
}
