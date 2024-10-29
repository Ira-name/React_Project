import { Product } from "../../service/products.service";

interface ProductProps {
  productList: Product[];
}

const ProductList = ({ productList }: ProductProps) => {
  return (
    <div className="container">
      <div className="row">
        {productList.map((product) => (
          <div className="col-md-4 mb-4" key={product.id}>
            <div className="card h-100">
              <img
                src={product.thumbnail}
                className="card-img-top"
                alt={product.title}
              />
              <div className="card-body">
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text">
                  <strong>Description:</strong> {product.description}
                </p>
                <p className="card-text">
                  <strong>Price:</strong> ${product.price}
                </p>
                <p className="card-text">
                  <strong>Rating:</strong> {product.rating}
                </p>
                <p className="card-text">
                  <strong>Brand:</strong> {product.brand}
                </p>
                <p className="card-text">
                  <strong>Category:</strong> {product.category}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
