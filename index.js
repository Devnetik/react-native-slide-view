/**
 * Created by maluramichael on 16/08/16.
 */
import React, {Component} from 'react';
import {
	View,
	Animated,
	TouchableWithoutFeedback
} from 'react-native';

class SlideView extends Component {
	constructor(props) {
		super(props);

		this.show = this.show.bind(this);
		this.hide = this.hide.bind(this);

		this.state = {
			opacity : new Animated.Value(props.visible ? 1 : 0),
			position: new Animated.Value(props.visible ? 0 : -this.props.expandedHeight),
		}
	}

	show() {
		Animated.timing(this.state.opacity, {
			toValue : 1.0,
			friction: this.props.friction,
			duration: this.props.duration
		}).start();
		Animated.timing(this.state.position, {
			toValue : 0,
			friction: this.props.friction,
			duration: this.props.duration
		}).start();
	}

	hide() {
		Animated.timing(this.state.opacity, {
			toValue : 0,
			friction: this.props.friction,
			duration: this.props.duration
		}).start();
		Animated.timing(this.state.position, {
			toValue : -this.props.expandedHeight,
			friction: this.props.friction,
			duration: this.props.duration
		}).start();
	}

	componentWillReceiveProps(newProps) {
		if (this.state.visible === false && newProps.visible) {
			this.show();
		}
		if (this.state.visible === true && !newProps.visible) {
			this.hide();
		}
		if (this.state.visible !== newProps.visible) {
			this.setState({visible: newProps.visible});
		}
	}

	render() {
		const absolute = {
			position: 'absolute',
			top     : 0,
			left    : 0,
			bottom  : 0,
			right   : 0
		};

		const containerStyle = {
			flex           : 1,
			backgroundColor: 'rgba(0,0,0,0.6)',
			opacity        : this.state.opacity
		};

		const sliderStyle = {
			height         : this.props.expandedHeight,
			backgroundColor: 'white',
			opacity        : this.state.opacity,
			position       : 'absolute',
			top            : this.state.position,
			left           : 0,
			right          : 0,
			bottom         : null
		};

		return (
			<Animated.View style={[absolute, containerStyle]}>
				<Animated.View style={[absolute, sliderStyle, this.props.style]}>
					{this.props.children}
				</Animated.View>
			</Animated.View>
		)
	}
}

SlideView.propTypes = {
	friction      : React.PropTypes.number,
	duraction     : React.PropTypes.number,
	expandedHeight: React.PropTypes.number
};

SlideView.defaultProps = {
	friction      : 1,
	duration      : 300,
	expandedHeight: 300
};

export default SlideView;