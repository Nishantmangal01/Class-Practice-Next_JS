// export const metadata = {
//     title: "About",
//     description: "About Webpage"
// };
// export default function Home()
// {
//     return(
//         <div>
//             <h1>This is About Page</h1>
//         </div>
//     );
// }




// Prepare a next.js folder including
// 1. Same layout for all pages with header and footer and metadata
// 2. Home page should hae minimum 3 images & description of product with price
// 3. Clicking on 1 product link will open another route
import Image from "next/image";
import Link from "next/link";
export const metadata = {
  title: "Home",
};
export default function Home() {
  return (
    <div>

      <h1>Welcome to My Product Store</h1>
      <div>
        <div>
          <Image
            src="/laptop.jpg"
            alt="Laptop"
            width={250}
            height={180}
          />
          <h2>Laptop</h2>
          <Link href="/Unit_5/Metadata/Product-Store/products">
            View Details
          </Link>
        </div>
        <div>
          <Image
            src="/mobile.jpg"
            alt="Mobile"
            width={250}
            height={180}
          />
          <h2>Smartphone</h2>
          <Link href="/Unit_5/Metadata/Product-Store/products">
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
}