import React, { useState } from "react";
import ButtonComponent from "../button/button.component";
import { useNavigate } from "react-router-dom";
import { deletePost } from "../../../utils/deleteData";

interface CardProps {
    id: number;
    title: string;
    description: string;
    user: number;
}
const Card: React.FC<CardProps> = ({ id, title, description, user }) => {
    const navigate = useNavigate();
    const handleClick = async () => {
        navigate(`/edit_post/${id}`);
    };
    const [successMessage, setSuccessMessage] = useState<string | null>(null);
    const erasePost = async () => {
        console.log("esta entrando a elimianr");
        try {
            console.log("esta entrando al try");
            const deletedPost = await deletePost(id);
            console.log(deletedPost);

            if (deletedPost) {
                console.log("entra al if");
                setSuccessMessage("Se eliminado el post correctamente.");
                setTimeout(() => {
                    navigate(-1);
                }, 2000);
            }
        } catch (error) {
            console.log("Error: ", error);
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
                    onClick={erasePost}
                >
                    Eliminar
                </ButtonComponent>
            </div>
        </div>
    );
};

export default Card;
