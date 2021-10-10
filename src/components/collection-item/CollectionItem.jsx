import React from "react";
import { connect } from "react-redux";

import "./CollectionItem.scss";

import CustomButton from "../custom-button/CustomButton";
import { addItem } from "../../redux/cart/cart.actions";

function CollectionItem(props) {
  const { item, addItem } = props;
  const { name, price, imageUrl } = item;

  return (
    <div className="collection-item">
      <div
        className="image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <CustomButton onClick={() => addItem(item)} inverted>
        Add to cart
      </CustomButton>
    </div>
  );
}

// const mapDispatchToProps = (dispatch) => ({
//   addItem: (item) => dispatch(addItem(item)),
// }); work same bellow

const mapDispatchToProps = {
  addItem,
};

export default connect(null, mapDispatchToProps)(CollectionItem);
