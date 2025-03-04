import React, { useEffect, useState } from "react";
import ButtonComponent from "../../components/shared/button/button.component";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectPostById, updatePost } from "../../store/slices/post_slice";
import { AppDispatch, RootState } from "../../store/store";
import { Post, EMPTY_POST } from "../../services/posts_service";

function EditPost() {
    const { id } = useParams();
    const dispatch = useDispatch<AppDispatch>();
    const [formData, setFormData] =
        useState<Omit<Post, "userId" | "id">>(EMPTY_POST);
    const navigate = useNavigate();
    const [successMessage, setSuccessMessage] = useState<string | "">("");

    const post = useSelector((state: RootState) =>
        selectPostById(state, Number(id))
    );

    useEffect(() => {
        if (post) {
            setFormData({
                title: post.title,
                body: post.body,
            });
        }
    }, [post]);

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
                updatePost({
                    id: Number(id),
                    title: formData.title,
                    body: formData.body,
                })
            );
            setFormData({ title: "", body: "" });
            if (updatePost.fulfilled.match(action)) {
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
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                ></input>

                <textarea
                    className="App-textArea"
                    id="postDesc"
                    name="body"
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
