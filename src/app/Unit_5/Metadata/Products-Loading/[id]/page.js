import { Suspense } from "react";
async function ProductDetails(params) {
    const {id} = await params;
    return(
        <div>
            <h1>Product Details</h1>
            <h2>Products ID:</h2>
        </div>
    );
}
export default function ProductPage({params})
{
    return(
        <div>
            <Suspense fallback={<p>Loading Product......</p>}>
                <ProductDetails params = {params}/>
            </Suspense>
        </div>
    );
}