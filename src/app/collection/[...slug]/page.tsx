import { getPostAll } from "@/lib/Postdata";
import { unescape } from "querystring";
import { useMDXComponent } from "next-contentlayer/hooks";
import tagList from "@/components/MDXComponentTags/tagList";

export async function generateStaticParams() {
    return getPostAll.map((post) => ({
        slug: [post._raw.flattenedPath.split("/")[0], post._raw.flattenedPath.split("/")[1]],
    }));
}

export default ({ params: { slug } }: { params: { slug: string[] } }) => {
    const post = getPostAll.find((p) => p._raw.flattenedPath === `${slug[0]}/${unescape(slug[1])}`);
    const MDXComponent = useMDXComponent(post?.body?.code || "");
    return (
        <>
            <h1></h1>
            <MDXComponent components={tagList as any} />;
        </>
    );
};
