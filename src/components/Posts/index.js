import React from 'react'
import Post from './Post'
import Banner from '../Banner'
import styled from 'styled-components';

const PostsWrapper = styled.div`
  .posts {
    width: 85vw;
    max-width: var(--max-width);
    margin: 0 auto;
    margin-bottom: 4rem;
  }
  .posts-title {
    font-weight: 700;
    text-transform: uppercase;
    color: #e12d39;
    font-size: 1.25rem;
    margin-top: 1.5rem;
    margin-bottom: 1.5rem;
  }

  @media screen and (min-width: 992px) {
    .posts {
      width: 92vw;
    }
  }
  @media screen and (min-width: 1170px) {
    .posts-center {
      display: grid;
      grid-template-columns: 1fr 250px;
      column-gap: 1rem;
    }
  }
`

const Posts = ({posts, title}) => {
  return (
    <PostsWrapper>
    <section className="posts">
      <h3 className="posts-title">{title}</h3>
      <div className="posts-center">
        {/* posts column */}
        <article>
          {posts.map(post => {
            return <Post key={post.id} {...post} />
          })}
        </article>
        {/* banner column */}
        <article>
          <Banner/>
        </article>
      </div>
    </section>
    </PostsWrapper>
  )
}

export default Posts
