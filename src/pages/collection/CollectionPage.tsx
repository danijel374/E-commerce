import React from "react";
import { connect } from "react-redux";

import "./CollectionPage.scss";

import { selectCollection } from "../../redux/shop/shop.selector";

import CollectionItem from "../../components/collection-item/CollectionItem";

const CollectionPage = ({
  match,
  collection,
}: {
  match: { params: { collectionId: string } };
  collection: any;
}) => {
  console.log(collection, "aaaaaaaaaaaaaa");
  const { title, items } = collection;
  return (
    <div className="collection-page">
      <h2 className="title">{title}</h2>
      <div className="items">
        {items.map((item: any) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state: any, ownProps: any) => {
  console.log("OWNR PROPSSSSSSSSSSSSSSSSSSSSSSSSSSSS");
  console.log(ownProps.match.params.collectionId);
  return {
    collection: selectCollection(ownProps.match.params.collectionId)(state),
  };
};

export default connect(mapStateToProps)(CollectionPage);