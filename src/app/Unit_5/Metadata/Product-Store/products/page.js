import Image from "next/image";
export const metadata = {
  title: "Product Details",
};
export default function Product() {
  return (
    <div>
      <h1>Product Details</h1>
        <Image
          src="/laptop.jpg"
          alt="Laptop"
          width={300}
          height={200}
        />
        <h2>Laptop</h2>
        <p>Powerful laptop for gaming and office work.</p>        
        <p>This laptop is suitable for gaming.</p>
        <h3>Price: 55,000 Rs</h3>
        <br/>
        <Image
        src="/Mobile.jpg"
        alt="Mobile"
        width={300}
        height={200}
        />
        <h2>Mobile</h2>
        <p>This mobile having good camera.</p>
        <p>Latest smartphone with amazing features.</p>
        <h3>Price: 30,000 Rs</h3>
    </div>
  );
}