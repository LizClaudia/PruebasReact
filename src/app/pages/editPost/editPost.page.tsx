import React, { useEffect, useState } from "react";
import ButtonComponent from "../../components/shared/button/button.component";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectPostById, updatePost } from "../../store/slices/post_slice";
import { AppDispatch, RootState } from "../../store/store";

function EditPost() {
    const { id } = useParams();
    const dispatch = useDispatch<AppDispatch>();
    const [formData, setFormData] = useState({ postTitle: "", postDesc: "" });
    const navigate = useNavigate();
    const [successMessage, setSuccessMessage] = useState<string | "">("");

    const post = useSelector((state: RootState) =>
        selectPostById(state, Number(id))
    );

    useEffect(() => {
        if (post) {
            setFormData({
                postTitle: post.title,
                postDesc: post.body,
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
                    title: formData.postTitle,
                    body: formData.postDesc,
                })
            );
            setFormData({ postTitle: "", postDesc: "" });
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
