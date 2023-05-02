import styles from '@/styles/Layout.module.css'

export default function Home() {
	return (
		<main className={styles.main}>
			<div className={styles.description}>
				<h1>Hacker News built with NextJS</h1>
			</div>
		</main>
	)
}
