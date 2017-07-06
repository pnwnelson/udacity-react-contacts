import React, { Component } from 'react'
import PropTypes from 'prop-types'
import escapeRegExp from 'escape-string-regexp'
import sortBy from 'sort-by'

class ListContacts extends Component {

	static propTypes ={
		contacts: PropTypes.array.isRequired,
		onDeleteContact: PropTypes.func.isRequired
	}

	state = {
		query: ''
	}

	// This handler is to just show in the input field what user is typing
	updateQuery = (query) => {
		this.setState({ query: query.trim() })
	}

	render () {
		return (
			<div className='list-contacts'>
				<div className='list-contacts-top'>
					<input 
						className='search-contacts'
						type='text'
						placeholder='Search contacts'
						value={this.state.query}
						onChange={(event) => this.updateQuery(event.target.value)}
					/>
				</div>
				<ol className='contact-list'>
					{this.props.contacts.map((contact) => (
						<li key={contact.id} className='contact-list-item'>
							<div className='contact-avatar' style={{backgroundImage: `url(${contact.avatarURL}`}}/>
							<div className='contact-details'>
								<p>{contact.name}</p>
								<p>{contact.email}</p>
							</div>
							<button onClick={() => this.props.onDeleteContact(contact)} className='contact-remove'>
								Remove 
							</button>	
						</li>
						))}
				</ol>
			</div>
			)
	}
}

export default ListContacts

// {JSON.stringify(this.state)}

// function ListContacts (props) {
// 	return (
// 			<ol className='contact-list'>
// 				{props.contacts.map((contact) => (
// 					<li key={contact.id} className='contact-list-item'>
// 						<div className='contact-avatar' style={{backgroundImage: `url(${contact.avatarURL}`}}/>
// 						<div className='contact-details'>
// 							<p>{contact.name}</p>
// 							<p>{contact.email}</p>
// 						</div>
// 						<button onClick={() => props.onDeleteContact(contact)} className='contact-remove'>
// 							Remove 
// 						</button>	
// 					</li>
// 					))}
// 			</ol>
// 			)
// }

// ListContacts.propTypes = {
// 	contacts: PropTypes.array.isRequired,
// 	onDeleteContact: PropTypes.func.isRequired
// }