import Post from '../components/Post'
import styles from './feed.module.css'
import mountains from '../public/images/mountains.jpg'
import dog from '../public/images/dog.jpg'
import cat from '../public/images/cat.jpg'

const posts = [
  {
    id: 1,
    username: 'valle.viajero',
    location: 'Cordillera de los Andes',
    avatarLabel: 'VV',
    avatarColor: '#f77737',
    image: mountains,
    caption: 'Amaneciendo entre montañas, no hay mejor forma de empezar el día. 🏔️',
    likes: 1284,
    comments: 32,
    timestamp: 'HACE 2 HORAS',
  },
  {
    id: 2,
    username: 'huellas.del.bosque',
    location: 'Sendero del Bosque',
    avatarLabel: 'HB',
    avatarColor: '#833ab4',
    image: dog,
    caption: 'Mi compañero de aventuras nunca falta a una caminata. 🐾',
    likes: 2431,
    comments: 78,
    timestamp: 'HACE 8 HORAS',
  },
  {
    id: 3,
    username: 'siesta.felina',
    location: 'En casa',
    avatarLabel: 'SF',
    avatarColor: '#fcaf45',
    image: cat,
    caption: 'Supervisando que todo esté en orden por aquí. 🐱',
    likes: 1897,
    comments: 54,
    timestamp: 'HACE 1 DÍA',
  },
]

export default function HomePage() {
  return (
    <section className={styles.feed}>
      {posts.map((post, index) => (
        <Post key={post.id} post={post} priority={index === 0} />
      ))}
    </section>
  )
}
