angular.module('fish-pond')
.controller('FishTableCtrl', function() {
  this.showDescription = false;
  this.toggleDescription = () => {
    this.showDescription = !this.showDescription;
  };
})
.component('fishTableRow', {
  bindings: {
    fish: '<'
    FishTableRow: '<'
  },
  controller: 'FishTableCtrl',
  template: `
    <div ng-click="$ctrl.toggleDescription()">
      <span class="fish-name">Nemo</span>
      <span>
        <img src="http://tinyurl.com/h8o5szh" />
      </span>
      <span class="fish-description" ng-if="$ctrl.showDescription">Does anyone know where my dad is?</span>
    </div>`
});

class FishTableRow extends React.Component {
  constructor() {
    super();
    this.state = {
      clicked: false
    };
  }

  render() {
    return (
      <fs onClick={() => this.setState({clicked: !this.state.clicked})}>
        <p1 className="fish-name">Nemo</p1>
        <p1>
          <img src="http://tinyurl.com/h8o5szh" />
        </p1>
        {this.state.clicked ? <p1 className="fish-description">Does anyone know where my dad is?</p1> : null}
      </fs>
    )
  }
}
window.FishTableRow = FishTableRow;
