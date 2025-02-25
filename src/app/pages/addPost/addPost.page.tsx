import React, { useState } from "react";
import ButtonComponent from "../../components/shared/button/button.component";
import Card from "../../components/shared/cards/card.component";
import { createPost } from "../../utils/postData";
import { Post } from "../../services/posts_service";

function AddPost() {
    const [formData, setFormData] = useState({ postTitle: "", postDesc: "" });
    const [cards, setCards] = useState<Post[]>([]);
    //    const cards = [
    //     { title: "Card 1", description: "Description 1" },
    //     { title: "Card 2", description: "Description 2" },
    //     { title: "Card 3", description: "Description 3" },
    //     { title: "Card 4", description: "Description 4" },
    //     { title: "Card 5", description: "Description 5" },
    //     { title: "Card 6", description: "Description 6" },
    //     { title: "Card 7", description: "Description 7" },
    //     { title: "Card 8", description: "Description 8" },
    //   ];
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
            const newPost: Post = await createPost(
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
                        key={index}
                        title={card.title}
                        description={card.body}
                        user={card.userId}
                        id={card.id}
                    />
                ))}
            </div>
        </div>
    );
}

export default AddPost;
