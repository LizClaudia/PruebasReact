import { fetchComments } from "../../../store/slices/comments_slice";
import { fetchPosts } from "../../../store/slices/post_slice";
import { fetchUsers } from "../../../store/slices/users_slice";
import { AppDispatch, RootState } from "../../../store/store";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { User } from "@/app/services/posts_service";

function ChartAllUsersComponent() {
    const dispatch = useDispatch<AppDispatch>();
    const posts = useSelector((state: RootState) => state.posts);
    const comments = useSelector((state: RootState) => state.comments);
    const users = useSelector((state: RootState) => state.users);
    useEffect(() => {
        if (posts.length === 0) {
            dispatch(fetchPosts());
        }
        if (comments.length === 0) {
            dispatch(fetchComments());
        }
        if (users.length === 0) {
            dispatch(fetchUsers());
        }
    }, [dispatch, posts.length, comments.length, users.length]);

    const [isLoading] = useState<boolean>(false);
    const [error] = useState<string>("");

    const [userData, setUserData] = useState<
        {
            user: User | null;
            postsCommentsCount: number;
        }[]
    >([]);

    useEffect(() => {
        const data = users.map((user) => {
            const filteredPosts = posts.filter(
                (post) => post.userId === user.id
            );
            const filteredComments = comments.filter(
                (comment) => comment.postId === user.id
            );
            const totalCount = filteredComments.length + filteredPosts.length;
            return {
                user,
                postsCommentsCount: totalCount,
            };
        });
        setUserData(data);
    }, [users, posts, comments]);

    const options: Highcharts.Options = {
        chart: { type: "column" },
        title: { text: `Grafica de post y comentarios por cada usuario` },
        xAxis: {
            categories: userData.map((data) =>
                data.user != null ? data.user.name : "Someone"
            ),
        },
        yAxis: { title: { text: "Posts y Comentarios " } },
        series: [
            {
                name: "Total de comentarios y posts",
                type: "column",
                data: userData.map((data) => data.postsCommentsCount),
            },
        ],
    };

    return (
        <div>
            {isLoading && <p>Cargando...</p>}
            {error && <p style={{ color: "red" }}>{error}</p>}
            <HighchartsReact highcharts={Highcharts} options={options} />
        </div>
    );
}

export default ChartAllUsersComponent;
