import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Main from '../../pages/main/main';
import Archive from '../../pages/archive/archive';
import Form from '../../pages/form/form';
import Error from '../../pages/error/error';
import { AppRoute } from '../../const';

const App = ({ events }) => {
	return (
		<BrowserRouter>
			<Switch>
				<Route path={AppRoute.MAIN} exact>
					<Main events={events} />
				</Route>
				<Route path={AppRoute.ARCHIVE} exact>
					<Archive events={events} />
				</Route>
				<Route path={AppRoute.EVENT} exact component={Form} />
				<Route>
					<Error />
				</Route>
			</Switch>
		</BrowserRouter >
	)
}

export default App;