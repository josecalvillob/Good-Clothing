import React from "react";
import "./collection-preview.styles.scss";
import CollectionItem from "../collection-item/collection-item.component";
// import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";

const CollectionPreview = ({ title, items, match, routeName, history }) => {
  console.log("CollectionPreview Props:");
  console.log(match);
  console.log("Route Name: " + routeName);
  return (
    <div className="collection-preview">
      {/* <Link to={`${match.path}/${routeName}`}>
      <h1 className="title">{title.toUpperCase()}</h1>
    </Link> */}

      <h1
        className="title"
        onClick={() => history.push(`${match.path}/${routeName}`)}
      >
        {title.toUpperCase()}
      </h1>

      <div className="preview">
        {items
          // Only want to display th first 4 items
          .filter((item, idx) => idx < 4)
          .map(item => (
            <CollectionItem key={item.id} item={item} />
          ))}
      </div>
    </div>
  );
};

export default withRouter(CollectionPreview);
