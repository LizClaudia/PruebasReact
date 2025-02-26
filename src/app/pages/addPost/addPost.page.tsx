import React, { useState } from "react";
import ButtonComponent from "../../components/shared/button/button.component";
import Card from "../../components/shared/cards/card.component";
import { createPost } from "../../utils/postData";
import { Post } from "../../services/posts_service";

function AddPost() {
    const [formData, setFormData] = useState({ postTitle: "", postDesc: "" });
    const [cards, setCards] = useState<Post[]>([]);
    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };
    const submit = async () => {
        try {
            const newPost = await createPost(
                formData.postTitle,
                formData.postDesc
            );
            setCards((prevCards) => [...prevCards, newPost]);
            setFormData({ postTitle: "", postDesc: "" });
        } catch (error) {
            console.log("Error al enviar los datos: ", error);
        }
    };
    return (
        <div className="App">
            <h3>Agregar un post</h3>
            <form
                className="App-form"
                onSubmit={(e) => {
                    e.preventDefault();
                }}
            >
                <input
                    placeholder=" Titulo del Post"
                    className="App-input"
                    type="text"
                    id="postTitle"
                    name="postTitle"
                    value={formData.postTitle}
                    onChange={handleChange}
                ></input>

                <textarea
                    className="App-textArea"
                    id="postDesc"
                    name="postDesc"
                    value={formData.postDesc}
                    onChange={handleChange}
                    placeholder="Descripcion del Post"
                ></textarea>

                <ButtonComponent onClick={submit} className="App-submit">
                    Agregar
                </ButtonComponent>
            </form>
            <div className="App-grid">
                {cards.map((card, index) => (
                    <Card
                        id={card.id}
                        key={index}
                        title={card.title}
                        description={card.body}
                        user={card.userId}
                    />
                ))}
            </div>
        </div>
    );
}

export default AddPost;
