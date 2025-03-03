import React from "react";
import ButtonComponent from "../button/button.component";
import { useNavigate } from "react-router-dom";

interface CardProps {
    id: number;
    title: string;
    description: string;
    user: number;
}
const Card: React.FC<CardProps> = ({ id, title, description, user }) => {
    const navigate = useNavigate();
    const handleClkic = async () => {
        navigate(`/edit_post/${id}`);
    };
    return (
        <div className="App-card">
            <h3>{title}</h3>
            <p>{description}</p>
            <p>User: {user}</p>
            <div className="App-actions">
                <ButtonComponent
                    onClick={handleClkic}
                    className="App-buttonActions"
                >
                    Editar
                </ButtonComponent>
                <ButtonComponent className="App-buttonActions">
                    Eliminar
                </ButtonComponent>
            </div>
        </div>
    );
};

export default Card;
