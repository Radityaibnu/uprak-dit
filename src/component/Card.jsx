import { useEffect, useState } from "react";
import gambar from '../assets/go-redis-pub-sub.png'

export default function CardList() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data.slice(0, 6)));
  }, []);

  return (
    
    <section className="container mx-auto px-4 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {posts.map((post) => (
        <div key={post.id} className="bg-white rounded-xl shadow p-4 hover:shadow-lg transition-shadow">
          <img className="px-5 py-5" src={gambar} alt="" />
          <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
          <p className="text-gray-600 text-sm">{post.body}</p>
        </div>
      ))}
    </section>
  );
}