'use client'
import { useState } from 'react'
import Image from 'next/image'
import styles from '../app/feed.module.css'
import { HeartIcon, CommentIcon, ShareIcon, BookmarkIcon } from './PostIcons'

export default function Post({ post, priority }) {
  const [liked, setLiked] = useState(false)
  const [saved, setSaved] = useState(false)
  const likes = post.likes + (liked ? 1 : 0)

  function toggleLike() {
    setLiked((prev) => !prev)
  }

  return (
    <article className={styles.post}>
      <header className={styles.postHeader}>
        <div
          className={styles.avatar}
          style={{ backgroundColor: post.avatarColor }}
          aria-hidden="true"
        >
          {post.avatarLabel}
        </div>
        <div className={styles.postHeaderText}>
          <span className={styles.username}>{post.username}</span>
          <span className={styles.location}>{post.location}</span>
        </div>
        <button className={styles.moreButton} aria-label="Más opciones">
          ···
        </button>
      </header>

      <div className={styles.imageWrapper}>
        <Image
          src={post.image}
          alt={post.caption}
          fill
          quality={95}
          sizes="(max-width: 470px) 100vw, 470px"
          priority={priority}
          placeholder="blur"
          className={styles.postImage}
        />
      </div>

      <div className={styles.actions}>
        <div className={styles.actionsLeft}>
          <button
            className={styles.iconButton}
            onClick={toggleLike}
            aria-label="Me gusta"
          >
            <HeartIcon filled={liked} />
          </button>
          <button className={styles.iconButton} aria-label="Comentar">
            <CommentIcon />
          </button>
          <button className={styles.iconButton} aria-label="Compartir">
            <ShareIcon />
          </button>
        </div>
        <button
          className={styles.iconButton}
          onClick={() => setSaved((prev) => !prev)}
          aria-label="Guardar"
        >
          <BookmarkIcon filled={saved} />
        </button>
      </div>

      <p className={styles.likes}>{likes.toLocaleString('es')} Me gusta</p>

      <p className={styles.caption}>
        <span className={styles.username}>{post.username}</span> {post.caption}
      </p>

      {post.comments > 0 && (
        <p className={styles.viewComments}>
          Ver los {post.comments} comentarios
        </p>
      )}

      <p className={styles.timestamp}>{post.timestamp}</p>
    </article>
  )
}
