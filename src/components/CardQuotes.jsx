import React, { useState } from 'react'
import quotes from '../quotes.json'
import colors from '../colors.json'

const cardQuotes = () => {
	const colorsTitles = Object.keys(colors)

	const [quoteIndex, setQuoteIndex] = useState(
		Math.floor(Math.random() * quotes.length)
	)

	const [colorIndex, setColorIndex] = useState(
		Math.floor(Math.random() * colorsTitles.length)
	)

	const changeStates = () => {
		setQuoteIndex(Math.floor(Math.random() * quotes.length))
		setColorIndex(Math.floor(Math.random() * colorsTitles.length))
	}

	return (
		<div className="App" style={{ backgroundColor: colorsTitles[colorIndex] }}>
			<div className="cardQuote">
				<blockquote style={{ color: colorsTitles[colorIndex] }}>
					<i className="fa-solid fa-quote-left"></i> {quotes[quoteIndex].quote}
				</blockquote>
				<small style={{ color: colorsTitles[colorIndex] }}>
					{quotes[quoteIndex].author}
				</small>
				<button
					onClick={changeStates}
					style={{ backgroundColor: colorsTitles[colorIndex] }}
				>
					<i className="fa-solid fa-caret-right"></i>
				</button>
			</div>
			<p className="highlight" style={{ color: colorsTitles[colorIndex] }}>
				Highlight the text by hovering over the box
			</p>
			<p className="nextQuote">tab + enter: next quote</p>
		</div>
	)
}

export default cardQuotes
