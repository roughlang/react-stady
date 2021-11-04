'use strict';

console.log("streact1");
const e = React.createElement;

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    console.log("streact3");
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
      console.log("streact4");
      return 'You liked this.';
    }

    console.log("streact4");
    return e(
      'button',
      { onClick: () => this.setState({ liked: true }) },
      'Like'
    );
  }
}

console.log("streact2");
const domContainer = document.querySelector('#react-stady-container');
ReactDOM.render(e(LikeButton), domContainer);