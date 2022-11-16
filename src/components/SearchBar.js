import React from "react"

class SearchBar extends React.Component {
  state = { term: "HI THERE!" }

  render() {
    return (
      <div className="ui segment">
        <form className="ui form">
          <div className="field">
            <label htmlFor="">Image search</label>
            <input
              type="text"
              onChange={e => this.setState({ term: e.target.value })}
              value={this.state.term}
            />
          </div>
        </form>
      </div>
    )
  }
}

export default SearchBar
