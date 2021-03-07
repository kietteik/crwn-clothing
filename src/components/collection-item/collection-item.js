import React from "react";
import "./collection-item.scss";

export const CollectionItem = ({ id, imageUrl, price, name }) => {
    return (
        <div className="collection-item">
            <div
                className="image"
                style={{ backgroundImage: `url(${imageUrl})` }}
            ></div>
            <div className="collection-footer">
                <div className="name">{name}</div>
                <div className="price">{price}$</div>
            </div>
        </div>
    );
};
