import prisma from "@/lib/prisma";

// 이 함수는 서버에서만 실행됩니다.
async function getPosts() {
  // const posts = await prisma.post.findMany({
  //   orderBy: {
  //     createdAt: "desc",
  //   },
  // });
  // return posts;
  return [];
}

// 이 페이지는 서버 사이드 렌더링(SSR)됩니다.
export default async function PostsPage() {
  // 페이지가 요청될 때마다 getPosts 함수가 서버에서 실행됩니다.
  const posts = await getPosts();

  return (
    <main style={{ padding: "2rem" }}>
      <h1>게시물 목록 (SSR 테스트)</h1>
      <a href="/posts/new">새 글 작성하기 (미구현)</a>
      <hr />
      {posts.length === 0 ? (
        <p>
          게시물이 없습니다. `npx prisma db seed`로 테스트 데이터를
          추가해보세요.
        </p>
      ) : (
        <ul>
          {posts.map((post) => (
            <li
              key={post.id}
              style={{ borderBottom: "1px solid #ccc", marginBottom: "1rem" }}
            >
              <h2>{post.title}</h2>
              <p>{post.content}</p>
              <small>작성일: {new Date(post.createdAt).toLocaleString()}</small>
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}
