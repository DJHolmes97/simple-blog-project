import React, { Component, Fragment } from 'react';
import {
	Link,
	BrowserRouter,
	Route,
	Switch,
	StaticRouter,
	Redirect,
} from 'react-router-dom';
import { Helmet } from 'react-helmet';

import BlogPosts from "./BlogPosts/BlogPosts.jsx";


const HomePage = () => (
	<Fragment>
		<Helmet>
			<title>Daniel Holmes Blog</title>
		</Helmet>
		ReactJS.NET is 🔥🔥
		
		<BlogPosts />
	</Fragment>
)

export default class HomeComponent extends Component {
	render() {
		const app = (
			<div className="container">
					<h1 className="display-4">Daniel Holmes Frontend Engineer</h1>
					<hr className="my-4" />
					<Switch>
						<Route
							exact
							path="/"
							render={() => <Redirect to="/home" />}
						/>
						<Route path="/home" component={HomePage} />
						<Route
							path="*"
							component={({ staticContext }) => {
								if (staticContext) staticContext.status = 404;

								return <h1>Not Found :(</h1>;
							}}
						/>
					</Switch>
				</div>
		);

		if (typeof window === 'undefined') {
			return (
				<StaticRouter
					context={this.props.context}
					location={this.props.location}
				>
					{app}
				</StaticRouter>
			);
		}
		return <BrowserRouter>{app}</BrowserRouter>;
	}
}
