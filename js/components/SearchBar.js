import React, { Component } from 'react';

export default class SearchBar extends Component {
	searchByName(e) {
		this.props.searchByName(e.target.value);
	}

	render() {
		return (
			<div className="row">
				<div className="col-sm-12">
					<div className="searchbar form-group">
						<input value={this.props.searchValue} onChange={this.searchByName.bind(this)} type="text" className="form-control" placeholder="Искать товар по названию..." />
					</div>
				</div>
			</div>
		);
	}
}
