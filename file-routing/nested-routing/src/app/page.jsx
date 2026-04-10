import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>welcome to the world of next js</h1>
      <Link href="/blog/first">blogs</Link>
      <Link href="/products">products</Link>
      <Link href="/docs">docs</Link>
      <Link href="/orderPlace">orders</Link>
    </div>
  );
}
