import styled from "styled-components";

const Container = styled.div`
  padding: 20px;
  margin-bottom: 10px;
  background-color: #999;
`;

const ProductDetails = ({ product }) => {
  return (
    <Container>
      <h3>{product.name}</h3>
      <p>{product.price}</p>
      <h4>Description:</h4>
      <p>{product.description}</p>
      <p>Average Rating: {product.rating}</p>
    </Container>
  );
};

export default ProductDetails;
