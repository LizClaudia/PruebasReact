import React, { useEffect } from "react";
import Card from "../../shared/cards/card.component";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../../store";
import { fetchPosts } from "../../../../post_slice";

const MainContentComponent: React.FC = () => {
    const dispatch = useDispatch<AppDispatch>();
    const posts = useSelector((state: RootState) => state.posts);
    useEffect(() => {
        if (posts.length === 0) {
            dispatch(fetchPosts());
        }
        // Cargar los posts al montar el componente
    }, [dispatch, posts.length]);
    return (
        <div className="App-grid">
            {posts.map((post, index) => (
                <Card
                    id={post.id}
                    key={index}
                    title={post.title}
                    description={post.body}
                    user={post.userId ?? 1}
                />
            ))}
        </div>
    );
};

export default MainContentComponent;
