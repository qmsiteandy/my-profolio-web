import { Row, Col } from "antd";
function ProductDetail({ product }) {
   return (
      <Row gutter={[32, 32]}>
         <Col lg={{ span: 8, offset: 2 }}>
            <img
               alt={product.name}
               className="product-image"
               src={product.image}
            />
         </Col>
         <Col lg={{ span: 12 }} >
            <div className="product-info--detail">
               <h2 className="product-category">
                  {product.category}
               </h2>
               <h1 className="product-name product-name--large">
                  {product.name}
               </h1>
               <p className="product-description">{product.description_long}</p>
               <div className="product-price-wrap">
                  <p className="product-price product-price--large">
                     US${product.price}.00
                  </p>
               </div>
            </div>
         </Col>
      </Row>
   );
}

export default ProductDetail;