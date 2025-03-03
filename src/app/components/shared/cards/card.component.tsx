import React, { useState } from "react";
import ButtonComponent from "../button/button.component";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/app/store/store";
import { erasePost } from "../../../store/slices/post_slice";

interface CardProps {
    id: number;
    title: string;
    description: string;
    user: number;
}
const Card: React.FC<CardProps> = ({ id, title, description, user }) => {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    const handleClick = async () => {
        navigate(`/edit_post/${id}`);
    };
    const dispatch = useDispatch<AppDispatch>();
    const [successMessage, setSuccessMessage] = useState<string | null>(null);
    const submitErase = async () => {
        setIsLoading(true);
        try {
            const resultAction = await dispatch(erasePost(id));
            if (erasePost.fulfilled.match(resultAction)) {
                setSuccessMessage("Se ha eliminado el post correctamente.");
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
                    Editar
                </ButtonComponent>
                <ButtonComponent
                    className="App-buttonActions"
                    onClick={submitErase}
                    disabled={isLoading}
                >
                    {isLoading ? "Eliminando..." : "Eliminar"}
                </ButtonComponent>
            </div>
        </div>
    );
};

export default Card;
