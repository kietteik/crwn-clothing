import React from "react";
import "./menu-item.scss";

export const MenuItem = ({ title, img, size }) => {
    return (
        <div className={`${size} menu-item`}>
            <div
                className="background-image"
                style={{ backgroundImage: `url(${img})` }}
            ></div>
            <div className="content">
                <div className="title">{title}</div>
                <div className="subtitle">SHOP NOW</div>
            </div>
        </div>
    );
};
