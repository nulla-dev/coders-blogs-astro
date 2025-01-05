const getPostsByTag = (posts: any, tag: string) =>
  posts.filter((post: any) => post.data?.tags?.includes(tag));
export default getPostsByTag;