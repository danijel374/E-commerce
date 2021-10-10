import React from "react";

import "./CollectionPreview.scss";

import CollectionItem from "../collection-item/CollectionItem";

export default function CollectionPreview({
  title,
  items,
}: {
  title: string;
  items: { name: string; id: number }[];
}) {
  return (
    <div className="collection-preview">
      <h1>{title.toUpperCase()}</h1>
      <div className="preview">
        {items
          .filter((item, idx) => idx < 4)
          .map((item) => {
            return <CollectionItem key={item.id} item={item} />;
          })}
      </div>
    </div>
  );
}
