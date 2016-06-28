class Component extends React.Component {
  constructor(props) {
    super(props);

    this.state = ({
      value: 1,
    });
  }

  handleClick = () => {
    const newValue = this.state.value + 1;
    this.setState({
      value: newValue,
    });
  };

  render() {
    return (
      <div>
        <h2>Simple component</h2>
        <h3 onClick={this.handleClick}>Click me to increase value - {this.state.value}</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aut deserunt error facere laborum nam unde. Assumenda minima suscipit tempore!</p>
      </div>
    )
  }
}

ReactDOM.render(<Component />, document.getElementById('root'));
