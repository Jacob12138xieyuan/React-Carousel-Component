import React from 'react';
import PropTypes from 'prop-types';

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = { currentNodeIndex: 0 };
    this.previous = this.previous.bind(this);
    this.next = this.next.bind(this);
  }

  componentDidMount() {
    this.interval = setInterval(() => this.tick(), this.props.delay);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  tick() {
    this.setState(state => ({ currentNodeIndex: state.currentNodeIndex + 1 }));
  }

  previous() {
    this.setState(state => ({ currentNodeIndex: state.currentNodeIndex - 1 }));
    clearInterval(this.interval);
    this.interval = setInterval(() => this.tick(), this.props.delay);
    console.log(
      this.state.currentNodeIndex,
      ((this.state.currentNodeIndex % this.props.children.length) + this.props.children.length) %
        this.props.children.length,
    );
  }

  next() {
    this.setState(state => ({ currentNodeIndex: state.currentNodeIndex + 1 }));
    clearInterval(this.interval);
    this.interval = setInterval(() => this.tick(), this.props.delay);
  }

  render() {
    return (
      <div className="carousel">
        <div className="current">
          {
            this.props.children[
              ((this.state.currentNodeIndex % this.props.children.length) +
                this.props.children.length) %
                this.props.children.length
            ]
          }
        </div>
        <div className="buttons">
          <button className="button-previous" type="button" onClick={this.previous}>
            Previous
          </button>
          <button className="button-next" type="button" onClick={this.next}>
            Next
          </button>
        </div>
      </div>
    );
  }
}

Carousel.propTypes = {
  delay: PropTypes.number.isRequired,
  children: PropTypes.array.isRequired,
};

export default Info;
