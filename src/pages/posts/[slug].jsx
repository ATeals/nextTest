import { allPosts } from "contentlayer/gererated";
import "github-markdown-css";

export default ({ collection }) => {
    console.log(collection);
    return <div>hello</div>;
};

export const getStaticPaths = async () => {
    return {
        paths: allPosts.map((p) => ({ params: { slug: p._raw.flattenedPath.split("/")[0] } })),
        fallback: false,
    };
};

export const getStaticProps = async ({ params }) => {
    // const collection = getCollactionItem(params.slug);
    const collection = allPosts;
    return {
        props: {
            collection,
        },
    };
};
