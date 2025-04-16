import React from "react";

const ProductIdPage = async ({
  params,
}: {
  params: Promise<{ productId: string }>;
}) => {
  const { productId } = await params;
  return (
    <div className="flex h-screen justify-center flex-row items-center bg-black">
      <h1 className="text-6xl text-white font-extrabold">
        Product Id Page for this page is: {productId}
      </h1>
    </div>
  );
};

export default ProductIdPage;
