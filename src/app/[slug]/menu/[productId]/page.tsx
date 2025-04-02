import { db } from "@/lib/prisma";
import { notFound } from "next/navigation";
import ProducHeader from "./components/product-header";

interface ProductPageProps {
  params: Promise<{ slug: string; productId: string }>;
}

const ProductPage = async ({ params }: ProductPageProps) => {
  const { slug, productId } = await params;
  const product = await db.product.findUnique({ where: { id: productId } });

  if (!product) {
    return notFound();
  }

  return (
    <>
      <ProducHeader product={product} />
      {slug}
      {productId}
    </>
  );
};

export default ProductPage;
