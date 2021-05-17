import React from "react";
import { Link } from "react-router-dom";
import { translate } from "../../provider/languageProvider";

export const Footer : React.FunctionComponent = () => {
    return (
        <footer>
            <Link to="/legal">
                {translate("button_legal")}
            </Link>
        </footer>
    )
};