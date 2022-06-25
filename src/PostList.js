import React from 'react'

export default function PostList({ posts }) {
  return (
    <div>
        { posts.map(post => (
            <div className="border p-3">
                <h3>{ post.author }</h3>
                <p>{ post.text }</p>
            </div>
        ))}
    </div>
  )
}
