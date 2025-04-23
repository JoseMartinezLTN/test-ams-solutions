import React from "react";
import Header from "../../components/header";
import Description from "../../components/description";
import Actions from "../../components/actions";
import Image from "../../components/image";

const ProductDetailsPage = () => {
  return (
    <div>
      <Header />
      <div>
        <div>
          <Image />
        </div>
        <div>
          <Description />
          <Actions />
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsPage;
