import React, { useState } from "react";
import ButtonComponent from "../../components/shared/button/button.component";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store/store";
import { useNavigate } from "react-router-dom";
import { addPost } from "../../store/slices/post_slice";
import { useTranslation } from "react-i18next";

function AddPost() {
    const dispatch = useDispatch<AppDispatch>();
    const [formData, setFormData] = useState({ postTitle: "", postDesc: "" });
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
            const action = await dispatch(
                addPost({ title: formData.postTitle, body: formData.postDesc })
            );
            setFormData({ postTitle: "", postDesc: "" });
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
                    id="postTitle"
                    name="postTitle"
                    value={formData.postTitle}
                    onChange={handleChange}
                    required
                ></input>

                <textarea
                    className="App-textArea"
                    id="postDesc"
                    name="postDesc"
                    value={formData.postDesc}
                    onChange={handleChange}
                    required
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
