import React, { useEffect, useState } from "react";
import ButtonComponent from "../../components/shared/button/button.component";
import { editPost, getPost } from "../../utils/editData";
import { useNavigate, useParams } from "react-router-dom";
import { Post, EMPTY_POST } from "../../services/posts_service";

function EditPost() {
    const { id } = useParams();
    const [formData, setFormData] =
        useState<Omit<Post, "userId" | "id">>(EMPTY_POST);
    const navigate = useNavigate();
    const [successMessage, setSuccessMessage] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await getPost(Number.parseInt(id!));
                setFormData({
                    title: response.title || "",
                    body: response.body || "",
                });
            } catch (error) {
                console.log(error);
            }
        };
        fetchData();
    }, []);

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
            const editedPost = await editPost(
                Number.parseInt(id!),
                formData.title,
                formData.body
            );
            setFormData({ title: "", body: "" });
            if (editedPost) {
                setSuccessMessage("Se ha modificado el post correctamente.");
                setTimeout(() => {
                    navigate(-1);
                }, 2000);
            }
        } catch (error) {
            console.log("Error al enviar los datos: ", error);
        }
    };

    return (
        <div className="App">
            <h3>Modificar un post</h3>
            <form
                className="App-form"
                onSubmit={(e) => {
                    e.preventDefault();
                }}
            >
                <input
                    className="App-input"
                    type="text"
                    id="postTitle"
                    name="postTitle"
                    value={formData.title}
                    onChange={handleChange}
                ></input>

                <textarea
                    className="App-textArea"
                    id="postDesc"
                    name="postDesc"
                    value={formData.body}
                    onChange={handleChange}
                ></textarea>
                <ButtonComponent onClick={submit} className="App-submit">
                    Modificar
                </ButtonComponent>
            </form>
            {successMessage && (
                <p className="App-succesMessage">{successMessage}</p>
            )}
        </div>
    );
}

export default EditPost;
