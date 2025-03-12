import React, { useState } from "react";
import ButtonComponent from "../../components/shared/button/button.component";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store/store";
import { useNavigate } from "react-router-dom";
import { addPost } from "../../store/slices/post_slice";
import { useTranslation } from "react-i18next";
import { Post, EMPTY_POST } from "../../services/posts_service";

function AddPost() {
    const dispatch = useDispatch<AppDispatch>();
    const [formData, setFormData] = useState<Post>(EMPTY_POST);
    const navigate = useNavigate();
    const { t } = useTranslation();
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
            const action = await dispatch(addPost(formData));
            setFormData(EMPTY_POST);
            if (addPost.fulfilled.match(action)) {
                setSuccessMessage(t("SUCCESS_MESSAGE_ADD"));
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
            <h3>{t("COMPONENT_LAYOUT_ADD_FORM_TITLE")}</h3>
            <form
                className="App-form"
                onSubmit={(e) => {
                    e.preventDefault();
                }}
            >
                <input
                    placeholder={t(
                        "COMPONENT_LAYOUT_ADD_FORM_PLACEHOLDER_TITLE"
                    )}
                    className="App-input"
                    type="text"
                    id="title"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                ></input>

                <textarea
                    className="App-textArea"
                    id="body"
                    name="body"
                    value={formData.body}
                    onChange={handleChange}
                    placeholder={t(
                        "COMPONENT_LAYOUT_ADD_FORM_PLACEHOLDER_DESCRIPTION"
                    )}
                ></textarea>

                <ButtonComponent onClick={submit} className="App-submit">
                    {t("APP.BUTTONS.SAVE")}
                </ButtonComponent>
            </form>
            {successMessage && (
                <p className="App-succesMessage">{successMessage}</p>
            )}
        </div>
    );
}

export default AddPost;
