class Component extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h2>Simple component</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aut deserunt error facere laborum nam unde. Assumenda minima suscipit tempore!</p>
      </div>
    )
  }
}

ReactDOM.render(<Component />, document.getElementById('root'));
