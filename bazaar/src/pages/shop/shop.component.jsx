import React, { Component } from "react";
import { Route } from "react-router-dom";
import CollectionOverview from "../../components/collection-overview/collection-overview.component";
import CollectionPage from "../collection/collection.component";

class ShopPage extends Component {
  render() {
    const { match } = this.props;

    return (
      <div className="shop-page">
        <Route exact path={`${match.path}`} component={CollectionOverview} />
        <Route
          exact
          path={`${match.path}/:categoryId`}
          component={CollectionPage}
        />
      </div>
    );
  }
}

export default ShopPage;
