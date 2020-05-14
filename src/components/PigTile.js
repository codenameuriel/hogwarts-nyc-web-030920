import React from 'react';

export default class PigTile extends React.Component {
  state = {
    showInfo : false 
  }

  renderPigInfo = () => {
    this.setState({showInfo: !this.state.showInfo})
  }

  render() {

    const {name, specialty, greased, weight, 'highest medal achieved': highestMedalAcheived} = this.props

    let newName = name.toLowerCase().split(' ').join('_')
    let pigImage = require(`../hog-imgs/${newName}.jpg`) 
  
    return (
      <div className="pigTile" onClick={this.renderPigInfo}>
        <img src={pigImage} alt={name} />
        <h3>{name}</h3>
          <div style={{display: this.state.showInfo ? 'block' :'none' }}>
            <p>Specialty: {specialty}</p>
            <p>Greased Status: {greased ? "Greased" : "Not Greased"}</p>
            <p>Weight: {weight}lbs</p> 
            <p>Medal: {highestMedalAcheived}</p>
          </div>
      </div>
    )
  }
}

