import React, { useEffect, useState } from "react";
import { NextPage } from "next";
import { Media, Row, Col } from "reactstrap";
import { CurrencyContext } from "helpers/currency/CurrencyContext";
import { useApiData } from "helpers/data/DataContext";


interface ApiData {
  menus: {
    [menuName: string]: {
      categories: {
        sub_categories: {
          products: {
            // Define the structure of a product here
          }[];
        }[];
      }[];
    };
  };
  // Add other properties if needed
}


const OrderHistoryPage: NextPage = () => {
  const [error, setError] = useState<string | null>(null);
  const apiData = useApiData() as ApiData;
  const [orders, setOrders] = useState([]);

  const [products, setProducts] = useState([]);
  useEffect(() => {
    const allProducts = [];

    // Loop through each menu
    for (const menuName in apiData.menus) {
      // Loop through each category in the current menu
      for (const category of apiData.menus[menuName].categories) {
        // Loop through each sub_category in the current category
        for (const subCategory of category.sub_categories) {
          // Loop through each product in the current sub_category and add it to allProducts
          for (const product of subCategory.products) {
            allProducts.push(product);
          }
        }
      }
    }

    // Set the productsData state with all fetched products
    setProducts(allProducts);
  }, [apiData]);

  useEffect(() => {
    // Fetch order data from the API
    fetch("http://18.235.14.45/api/user/31/orders")
      .then((response) => response.json())
      .then((data) => {
        setOrders(data.orders);
      })
      .catch((error) => {
        console.error("Error fetching orders:", error);
      });
  }, []);

  // Function to find product by id and return its URL
  const getProductImageUrl = (productId) => {
    const product = products.find((p) => p.id === productId);
    return product ? product.url : "";
  };

  return (
    <div className="">
      <section className="cart-section order-history section-big-py-space">
        <div className="custom-container">
          <Row>
            <Col sm="12">
              <table className="table cart-table table-responsive-xs">
                <thead>
                  {/* Table headers */}
                </thead>
                <tbody>
                  {orders.map((order) => (
                    <tr key={order.id}>
                      <td>
                        <a href="#">
                          {/* Display the product image based on the product ID */}
                          <Media
                            src={products.find((product) => product.id === order.product_id)?.url}
                            alt="product"
                            className="img-fluid"
                          />
                        </a>
                      </td>
                      <td>
                        <a href="#">
                          order no: <span className="dark-data">{order.id}</span> <br />
                          {order.comments}
                        </a>
                        {/* Render other order details here */}
                      </td>
                      <td>
                        <h4>${order.total_price}</h4>
                      </td>
                      <td>
                        <span>Size: {order.size}</span>
                        <br />
                        <span>Quantity: {order.quantity}</span>
                      </td>
                      <td>
                        <div className="responsive-data">
                          <h4 className="price">${order.total_price}</h4>
                          <span>Size: {order.size}</span>|<span>Quantity: {order.quantity}</span>
                        </div>
                        <span className="dark-data">{order.status}</span> ({order.created_at})
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </Col>
          </Row>
          <Row className="cart-buttons">
            <Col xs="12" className="pull-right">
              <a href="#" className="btn btn-normal btn-sm">
                Show All Orders
              </a>
            </Col>
          </Row>
        </div>
      </section>
    </div>
  );
};

export default OrderHistoryPage;
