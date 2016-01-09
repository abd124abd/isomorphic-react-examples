webpackJsonp([5,6],[
/* 0 */
/***/ function(module, exports) {

	'use strict';

	var Projects = React.createClass({
		displayName: 'Projects',

		propTypes: {
			source: React.PropTypes.string.isRequired
		},

		getInitialState: function getInitialState() {
			return {
				projects: []
			};
		},

		componentDidMount: function componentDidMount() {
			$.get(this.props.source, (function (result) {
				var projectItems = result.data;
				if (this.isMounted()) {
					this.setState({ projects: projectItems });
				}
			}).bind(this));
		},

		render: function render() {
			var projectItemElements = this.state.projects.map(function (project, index) {
				return React.createElement('li', {
					key: index,
					style: { listStyleType: 'none' } }, React.createElement('h2', {}, project.name), React.createElement('h5', { style: { marginBottom: '15px' } }, project.date), React.createElement('img', { src: project.picture, style: { width: '250px', marginBottom: '15px', marginLeft: '5px' } }), React.createElement('ul', {}, project.languages.map(function (language) {
					return React.createElement('li', {
						style: {
							listStyleType: 'none',
							display: 'inline',
							paddingRight: '5px',
							opacity: '.8',
							fontSize: '12px'
						} }, language);
				})), React.createElement('p', { style: { marginLeft: '5px', marginBottom: '50px' } }, project.summary));
			});

			return React.createElement('div', {}, React.createElement('ul', {}, projectItemElements));
		}
	});

	ReactDOM.render(React.createElement(Projects, { source: 'http://localhost:3000/api/projects' }), document.getElementById('projects'));

/***/ }
]);