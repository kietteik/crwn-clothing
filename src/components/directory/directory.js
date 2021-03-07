import React, { useState } from "react";
import { MenuItem } from "../menu-item/menu-item";

export const Directory = () => {
    const [sections] = useState([
        {
            id: 1,
            title: "Hat",
            img: "https://i.ibb.co/cvpntL1/hats.png",
            url: "/hats",
        },
        { id: 2, title: "Jacket", img: "https://i.ibb.co/px2tCc3/jackets.png" },
        {
            id: 3,
            title: "Sneaker",
            img: "https://i.ibb.co/0jqHpnp/sneakers.png",
        },
        {
            id: 4,
            title: "Woman",
            img: "https://i.ibb.co/GCCdy8t/womens.png",
            size: "large",
        },
        {
            id: 5,
            title: "Men",
            img: "https://i.ibb.co/R70vBrQ/men.png",
            size: "large",
        },
    ]);
    return (
        <div className="directory-menu">
            {sections.map(({ id, ...otherProps }) => (
                <MenuItem key={id} {...otherProps} />
            ))}
        </div>
    );
};
