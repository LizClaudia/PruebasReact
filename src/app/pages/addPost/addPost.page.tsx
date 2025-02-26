import React, { useState } from "react";
import ButtonComponent from "../../components/shared/button/button.component";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../store";
import { addPost } from "../../../post_slice";
import { useNavigate } from "react-router-dom";

function AddPost() {
    const dispatch = useDispatch<AppDispatch>();
    const [formData, setFormData] = useState({ postTitle: "", postDesc: "" });
    const navigate = useNavigate();
    const [successMessage, setSuccessMessage] = useState<string | null>(null);
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
            const action = await dispatch(
                addPost({ title: formData.postTitle, body: formData.postDesc })
            );
            setFormData({ postTitle: "", postDesc: "" });
            if (addPost.fulfilled.match(action)) {
                setSuccessMessage("Se ha agregado el post correctamente.");
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
            {successMessage && (
                <p className="App-succesMessage">{successMessage}</p>
            )}
        </div>
    );
}

export default AddPost;
