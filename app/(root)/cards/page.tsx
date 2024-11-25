import React from "react";
import CollectionList from "../../../components/CollectionList";

const CollectionsPage = () => {
  return (
    <div>
      <div className="flex-center h-screen">
        <h1 className={"h1"}>cards</h1>
      </div>
      <CollectionList />
    </div>
  );
};

export default CollectionsPage;
