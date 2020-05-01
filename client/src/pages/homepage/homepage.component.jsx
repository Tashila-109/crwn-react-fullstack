import React from 'react'

import Directory from '../../components/directory/directory.component'

import './homepage.styles.scss'

import { HomePageConatiner } from './homepage.styles'

const HomePage = () => {
	return (
		<HomePageConatiner>
			<Directory />
		</HomePageConatiner>
	)
}

export default HomePage
