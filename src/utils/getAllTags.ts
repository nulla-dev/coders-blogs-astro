export default function getAllTags(blogs: any) {
    const allTags: any = [];
    blogs.forEach((post: any) => {
        if (post.data.tags) {
            post.data.tags.forEach((tag: any) => allTags.push(tag));
        }
    });
    return [...new Set(allTags)];
}