import Button from "@/app/Components/Button";

export function generateMetadata() {
  return { title: "Products", description: "This is products page" };
}

const GetProducts = async () => {
  const api = "https://dummyjson.com/products";
  let response = await fetch(api);
  response = await response.json();
  return response.products;
};

const page = async () => {
  const data = await GetProducts();

  return (
    <div>
      <h1>Products</h1>
      {data.map((items) => {
        return (
          <div key={items.id}>
            <h3>
              {items.title} = {items.price}
            </h3>
          </div>
        );
      })}

      <div className="load-more">
        <Button slug="Load More" />
      </div>
    </div>
  );
};

export default page;
