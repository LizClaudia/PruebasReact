import React, { useEffect, useState } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../../../store/store";
import { fetchPostsByUser } from "../../../store/slices/post_slice";
import { fetchCommentsByUser } from "../../../store/slices/comments_slice";

function ChartComponent() {
    const dispatch = useDispatch<AppDispatch>();
    const [userId, setUserId] = useState<number | "">(""); // Input para ID de usuario

    // Accede a los posts y comentarios desde el estado de Redux
    const posts = useSelector((state: RootState) => state.posts);
    const comments = useSelector((state: RootState) => state.comments);

    const [postCount, setPostCount] = useState<number>(0);
    const [commentCount, setCommentCount] = useState<number>(0);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string>("");

    useEffect(() => {
        if (userId === "") return;

        setIsLoading(true);
        setError("");

        const fetchData = async () => {
            try {
                await dispatch(fetchPostsByUser(Number(userId)));
                await dispatch(fetchCommentsByUser(Number(userId)));
            } catch (err) {
                setError("Error al obtener los datos.");
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, [userId, dispatch]);

    useEffect(() => {
        if (userId === "") return;

        const filteredPosts = posts.filter((post) => post.userId === userId);
        const filteredComments = comments.filter(
            (comment) => comment.postId === userId
        );

        setPostCount(filteredPosts.length);
        setCommentCount(filteredComments.length);
    }, [userId, posts, comments]);

    const options: Highcharts.Options = {
        chart: { type: "column" },
        title: { text: `Posts y Comentarios del usuario ${userId || "..."}` },
        xAxis: { categories: ["Posts", "Comentarios"] },
        yAxis: { title: { text: "Cantidad" } },
        series: [
            {
                name: "Cantidad",
                type: "column",
                data: [postCount, commentCount],
            },
        ],
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const id = e.target.value ? Number(e.target.value) : "";
        setUserId(id);
    };

    return (
        <div>
            <input
                type="number"
                placeholder="Ingrese User ID"
                value={userId}
                onChange={handleChange}
                className="App-input App-form"
            />
            {isLoading && <p>Cargando...</p>}
            {error && <p style={{ color: "red" }}>{error}</p>}
            <HighchartsReact highcharts={Highcharts} options={options} />
        </div>
    );
}

export default ChartComponent;
