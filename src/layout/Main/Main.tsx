import "./Main.css"

const range = (n: number) => Array.from({ length: n }, (_, i) => i)

const Main = () => (
	<main>
		{range(100).map((index: number) => (
			<p key={index}>Line number {index + 1}</p>
		))}
	</main>
)
export default Main
