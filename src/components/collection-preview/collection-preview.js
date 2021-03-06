import React from "react";
import { CollectionItem } from "../collection-item/collection-item";
import "./collection-preview.scss";

export const CollectionPreview = ({ title, items }) => {
    return (
        <div className="collection-preview">
            <h2 className="title">{title.toUpperCase()}</h2>
            <div className="preview">
                {items
                    .filter((item, index) => index < 4)
                    .map((item) => (
                        <CollectionItem key={item.id} {...item} />
                    ))}
            </div>
        </div>
    );
};
