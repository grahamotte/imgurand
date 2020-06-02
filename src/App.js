import Masonry from "react-masonry-component";
import React from "react";

const randId = () => {
  var length = Math.random() > 0.2 ? 5 : 7;
  return Math.random()
    .toString(36)
    .substring(2, length + 2);
};

class App extends React.Component {
  state = {};

  markJunkImg = (id, img) => {
    if (img.naturalHeight === 81 && img.naturalWidth === 161) {
      this.setState({ [id]: false });
    }
  };

  componentDidMount() {
    setInterval(() => this.setState({ [randId()]: +new Date() }), 250);
  }

  render() {
    return (
      <div className="container">
        <hr />
        <h1>All that the internet has to offer...</h1>
        <h4>(random imgur images)</h4>
        <h6>(may be nsfw)</h6>
        <hr />
        <Masonry fitWidth>
          {Object.keys(this.state)
            .filter((id) => this.state[id])
            .map((id) => {
              return (
                <div className="grid-item">
                  <a
                    href={`http://imgur.com/${id}.png`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      key={id}
                      id={id}
                      alt={id}
                      src={`http://imgur.com/${id}.png`}
                      onLoad={({ target: img }) => this.markJunkImg(id, img)}
                      onError={() => this.setState({ [id]: false })}
                    />
                  </a>
                </div>
              );
            })}
        </Masonry>
      </div>
    );
  }
}

export default App;
