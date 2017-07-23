import React from 'react';
import ReactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor';
import {Tracker} from 'meteor/tracker';

import {Players} from './../imports/api/players';

const renderPlayers = function (playersList) {
	return playersList.map(function (player) {
		return <p key={player._id}> {player.name} has {player.score} point(s).</p> ;
	});
};

const handleSumbit = function (event) {
	let playerName = event.target.playerName.value;
	let score = event.target.score.value;
	event.preventDefault();

	if (playerName) {
		event.target.playerName.value = ''
		event.target.score.value = ''
		Players.insert ({
			name: playerName,
			score: score
		});
	}
};

Meteor.startup(function() {
	//Call tracker.autorun
	//	create variable called players --> set equal to fetch query
	// Render players to the screen

	Tracker.autorun(function(){
		let players = Players.find().fetch();
		let title = 'Score Settings';
		let name = 'data -';
		let jsx =(
		<div>
			<h1> {title}! </h1>
			<p> Hello {name}! </p>
			<p>This is my second p.</p>
			{renderPlayers(players)}
			<form onSubmit={handleSumbit}>
				<input type="text" name="playerName" placeholder="Player name"/>
				<input type="number" name="score" placeholder="score"/>
				<button>Add Player</button>
			</form>
		</div>
		);
		ReactDOM.render(jsx, document.getElementById('app'));
	});
});
