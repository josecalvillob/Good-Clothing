import React from "react";
import { connect } from "react-redux";
import "./collection.styles.scss";
import CollectionItem from "../../components/collection-item/collection-item.component";
import { selectCollection } from "../../redux/shop/shop.selectors";

const CollectionPage = ({ collection }) => {
  console.log(collection);
  return (
    <div className="category">
      <h2>Collection Page</h2>
    </div>
  );
};

// ownProps is the second argument that can be passed to mapStateToProps
// here ownProps is match that we get from the router
const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state)
});

export default connect(mapStateToProps)(CollectionPage);
