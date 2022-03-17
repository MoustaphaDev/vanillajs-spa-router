const styles = {};

async function getProducts() {
  const response = await fetch("/static/products.json");
  const products = (await response.json()).data;
  return products;
}

const ProductsGlimpse = async () => {
  const [prod1, prod2, prod3] = await getProducts();
  return `
  
    <h2 class="font-bold mb-20 text-xl uppercase text-center mt-28">Nos produits</h2>
    <div class="grid px-16 grid-cols-3 gap-x-12 gap-y-8 py-4">
        ${[prod1, prod2, prod3]
          .map((product, idx) => {
            return `
            <div class="flex flex-col justify-evenly items-center">
                <a class="flex w-full transition-transform justify-center items-center h-3/5 ${
                  idx === 1
                    ? "hover:scale-[1.3] scale-[1.2] -translate-y-12"
                    : "hover:scale-110"
                }" data-link href="/products"><img class="h-full" src='${
              product.url
            }' /></a>
                <h1 class="font-bold text-center text-ellipsis overflow-hidden whitespace-nowrap w-[24ch] ${
                  idx === 1 ? "scale-[1.3]" : ""
                }">${product.title}</h1>
                <div class="w-full mx-auto">
                    <a class="w-full block text-center transition-colors hover:text-white hover:bg-[#0f0027]  py-2 border-2 border-black" data-link href='/products/${
                      product.id
                    }'>Details</a>
                </div>
            </div>
                `;
          })
          .join("\n")}
    </div>
    <a data-link href="/products" class="mt-12 text-orange-400 hover:bg-orange-400 hover:text-white transition-colors w-48 text-center text-lg font-bold py-4 border-2 border-orange-400 mx-auto block">Voir plus</a>
  `;
};

export default ProductsGlimpse;
