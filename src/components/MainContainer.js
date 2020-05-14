import React from 'react';
import PigTile from './PigTile';

export default class MainContainer extends React.Component {
  renderPigs = () => (
    this.props.hogs.map((hog, index) => <PigTile 
    key={hog.index}
    {...hog}
    />)
  )

  render() {
    console.log(this.props.hogs)

    return (
      <div>
        {this.renderPigs()}
      </div>
    )
  }
}
