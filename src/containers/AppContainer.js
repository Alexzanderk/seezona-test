import React, { Component } from 'react';
import { connect } from 'react-redux';
import App from '../components/App';

class AppContainer extends Component {
	render() {
		return (
			<div>
				<App {...this.props} />;
			</div>
		);
	}
}
const mapStateToProps = state => ({
	weather: state.weather,
	alert: state.alert,
	loading: state.loading
});

export default connect(mapStateToProps)(AppContainer);
