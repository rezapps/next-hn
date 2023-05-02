import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
	return (
		<Html lang="en">
			<Head>
				<title>Next HN</title>
				<meta name="description" content="Next HN" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/fav.png" />
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	)
}
