import React from "react";
import { connect } from "react-redux";

import CollectionItem from "../../components/collection-item/collection-item.component";

import { selectCollection } from "../../selectors/section.selectors";

import "./collection.styles.scss";

const CollectionPage = ({ collection }) => {
  const { title, items } = collection;
  return (
    <div className="collection-page">
      <h2 className="title">{ title }</h2>
      <div className="items">
        { items.map(item => (
          // maping over the item and pass it to its item component
          <CollectionItem key={ item.id } item={ item } />
        )) }
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state)
});
// connect the props to the component
export default connect(mapStateToProps)(CollectionPage);
