import headerStyles from  '@/styles/Header.module.css'

const Header = () => {
	return (

		<div>
			<h1 className={headerStyles.title}>Hacker News</h1>
			<p className={headerStyles.description}>
				Hacker News built with NEXTJS
			</p>
		</div>
	)
}



export default Header
