import React from "react";
import { CollectionPreview } from "../../components/collection-preview/collection-preview";
import { SHOP_DATA } from "./shop.data";

export const Shop = () => {
    const collections = SHOP_DATA;
    return (
        <div>
            {collections.map((collection) => (
                <CollectionPreview key={collection.id} {...collection} />
            ))}
        </div>
    );
};
