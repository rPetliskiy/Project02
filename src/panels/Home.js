import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Panel, PanelHeader, Header, Button, Group, Cell, Div, Avatar } from '@vkontakte/vkui';

export default class Home extends Component {

	add() {
		bridge.send('VKWebAppGetAds')
			.then((promoBannerProps) => {
				this.setState({ promoBannerProps });
			})
	}

	render() {
		return(
                        <Panel id={this.props.id}>
                    		<PanelHeader>Example</PanelHeader>
                    		{this.props.fetchedUser &&
                    		<Group header={<Header mode="secondary">User Data Fetched with VK Bridge</Header>}>
                    			<Cell
                    				before={this.props.fetchedUser.photo_200 ? <Avatar src={this.props.fetchedUser.photo_200}/> : null}
                    			>
                    				{`${this.props.fetchedUser.first_name} ${this.props.fetchedUser.last_name}`}
                    			</Cell>
                    		</Group>}
				{ this.state.promoBannerProps && <PromoBanner bannerData={ this.state.promoBannerProps } /> }
                    		<Group header={<Header mode="secondary">Navigation Example</Header>}>
                    			<Div>
                    				<Button stretched size="l" mode="secondary" onClick={this.add} data-to="persik">
                    					Show me the Persik, please
                    				</Button>
                    			</Div>
                    		</Group>
                    	</Panel>
		);
	}
}

Home.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
	fetchedUser: PropTypes.shape({
		photo_200: PropTypes.string,
		first_name: PropTypes.string,
		last_name: PropTypes.string,
		city: PropTypes.shape({
			title: PropTypes.string,
		}),
	}),
};
