import React from "react";
import { withRouter } from "react-router";
import CollectionItem from "../collection-item/collection-item.component";

import "./preview-collection.styles.scss";

const PreviewCollection = ({ title, items, history, match, routeName }) => {
  return (
    <div className="collection-preview">
      <h1
        className="title"
        onClick={() => history.push(`${match.path}/${routeName}`)}
      >
        {title}
      </h1>
      <div className="preview">
        {items
          .filter((item, idx) => idx < 4)
          .map((item) => (
            <CollectionItem key={item.id} item={item} />
          ))}
      </div>
    </div>
  );
};

export default withRouter(PreviewCollection);
