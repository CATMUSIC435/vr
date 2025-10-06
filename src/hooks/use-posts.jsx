import { useEffect, useState } from "react";

export function usePosts(domain) {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!domain) return;

        const fetchPosts = async () => {
            try {
                setLoading(true);
                const res = await fetch(`${domain}/wp-json/wp/v2/posts?per_page=6&_embed`);
                if (!res.ok) throw new Error("Failed to fetch posts");
                const data = await res.json();

                const formatted = data.map((item) => ({
                    id: item.id,
                    title: item.title?.rendered || "",
                    excerpt: item.excerpt?.rendered || "",
                    link: item.link,
                    image: item._embedded?.["wp:featuredmedia"]?.[0]?.source_url || "",
                    date: item.date,
                }));

                setPosts(formatted);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchPosts();
    }, [domain]);

    return { posts, loading, error };
}
