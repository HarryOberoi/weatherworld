import { render, screen } from '@testing-library/react'
import { Router } from 'react-router-dom'
import { createMemoryHistory } from 'history'
import Home from './'

test('If home page contains link and redirect to it', () => {
	const fakeHistory = createMemoryHistory()
 	render(
		<Router location={fakeHistory} navigator={fakeHistory}>
			<Home />
		</Router>
	) 
	expect(screen.getByText('Weather World')).toBeInTheDocument()
	
})