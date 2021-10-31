import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import "./CollectionOverview.scss";

import { selectCollectionsForPreview } from "../../redux/shop/shop.selector";

import CollectionPreview from "../preview-collection/CollectionPreview";

export const CollectionsOverview = ({ collections }: { collections: any }) => {
  return (
    <div className="collections-overview">
      {collections.map(
        ({ id, ...otherCollectionProps }: { id: number }, index: number) => {
          return (
            <CollectionPreview
              items={collections[index].items}
              title={collections[index].title}
              key={id}
              {...otherCollectionProps}
            />
          );
        }
      )}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview,
});

export default connect(mapStateToProps)(CollectionsOverview);
