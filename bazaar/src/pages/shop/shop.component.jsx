import React, { Component } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCollections } from "../../redux/shop/shop.selectors";
import PreviewCollection from "../../components/preview-collection/preview-collection.component";

class ShopPage extends Component {
  render() {
    const { collections } = this.props;
    return (
      <div className="shop-page">
        {collections.map(({ id, ...otherCollectionProps }) => (
          <PreviewCollection key={id} {...otherCollectionProps} />
        ))}
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  collections: selectCollections,
});

export default connect(mapStateToProps)(ShopPage);
