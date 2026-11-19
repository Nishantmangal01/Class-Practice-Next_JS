"use client"
import Image from "next/image";
export default function ProductDetails()
{
    return(
        <div>
            <h1>Products details will load here....</h1>
            <div style={{
                border: "2px solid black",
                padding: "15px",
                margin: "10px",
                borderRadius: "10px",
                width: "350px",
                boxShadow: "2px 2px 8px gray"
            }}>
                <p>Product : <b>Laptop</b></p>
                <p>Price : 1,30,000 Rs</p>
                <p>Company : HP OMEN 016 Latest Addition</p>
                <Image 
                src="/laptop.jpg"
                alt="Internal Image"
                width={350}
                height={250}/><br/>
            </div>
            <div style={{
                border: "2px solid black",
                padding: "15px",
                margin: "10px",
                borderRadius: "10px",
                width: "350px",
                boxShadow: "2px 2px 8px gray"
            }}>
                <p>Product : <b>Mobile</b></p>
                <p>Price : 30,000 Rs</p>
                <p>Company : Realme Gt 6T Pro   </p>
                <Image 
                src="/Mobile.jpg"
                alt="Internal Image"
                width={350}
                height={250}/><br/>
            </div>
        </div>
    );
}