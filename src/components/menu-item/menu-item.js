import React from "react";
import "./menu-item.scss";
import { withRouter } from "react-router-dom";

export const MenuItem = withRouter(
    ({ title, img, size, history, match, url }) => {
        return (
            <div
                className={`${size} menu-item`}
                onClick={() => {
                    console.log(match);
                    history.push(`${url}`);
                }}
            >
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
    }
);
