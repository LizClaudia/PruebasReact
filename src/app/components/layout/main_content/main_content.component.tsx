import React, { useEffect } from "react";
import Card from "../../shared/cards/card.component";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../store/store";
import { fetchPosts } from "../../../store/slices/post_slice";

const MainContentComponent: React.FC = () => {
    const dispatch = useDispatch<AppDispatch>();
    const posts = useSelector((state: RootState) => state.posts);
    useEffect(() => {
        if (posts.length === 0) {
            dispatch(fetchPosts());
        }
    }, [dispatch, posts.length]);

    return (
        <div className="App-grid">
            {posts.map((post) => (
                <Card
                    id={post.id ?? 0}
                    key={post.id}
                    title={post.title}
                    description={post.body}
                    user={post.userId ?? 1}
                />
            ))}
        </div>
    );
};

export default MainContentComponent;
