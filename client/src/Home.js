import React, { Component } from 'react';
import Worldview from './Components/worldview';

class Home extends Component {
	render() {
		// if (this.props.user) { <--- THIS BREAKS AUTH
		return(
			<div>
				<p>HOME PAGE!!!</p>
				<Worldview />
			</div>
		);
	}
// }
}

export default Home;