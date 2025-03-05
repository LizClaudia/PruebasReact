import React, { useState } from "react";
import ButtonComponent from "../button/button.component";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/app/store/store";
import { erasePost } from "../../../store/slices/post_slice";
import { useTranslation } from "react-i18next";

interface CardProps {
    id: number;
    title: string;
    description: string;
    user: number;
}
const Card: React.FC<CardProps> = ({ id, title, description, user }) => {
    const navigate = useNavigate();
    const { t } = useTranslation();
    const [isLoading, setIsLoading] = useState(false);
    const handleClick = async () => {
        console.log("Esta entradno a esta funcion");
        navigate(`/edit_post/${id}`);
    };
    const dispatch = useDispatch<AppDispatch>();
    const [successMessage, setSuccessMessage] = useState<string | null>(null);

    const submitErase = async () => {
        setIsLoading(true);
        try {
            const resultAction = await dispatch(erasePost(id));
            if (erasePost.fulfilled.match(resultAction)) {
                setSuccessMessage(t("SUCCESS_MESSAGE_DELETED"));
                setTimeout(() => {
                    navigate(-1);
                }, 2000);
            }
        } catch (error) {
            console.log("Error: ", error);
        } finally {
            setIsLoading(false);
        }
    };
    return (
        <div className="App-card">
            <h3>{title}</h3>
            <p>{description}</p>
            <p>User: {user}</p>
            {successMessage && (
                <p className="App-succesMessage">{successMessage}</p>
            )}
            <div className="App-actions">
                <ButtonComponent
                    onClick={handleClick}
                    className="App-buttonActions"
                >
                    {t("APP.BUTTONS.EDIT")}
                </ButtonComponent>

                <ButtonComponent
                    className="App-buttonActions"
                    onClick={submitErase}
                    disabled={isLoading}
                >
                    {isLoading ? "..." : t("APP.BUTTONS.DELETE")}
                </ButtonComponent>
            </div>
        </div>
    );
};

export default Card;
