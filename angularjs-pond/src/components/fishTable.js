angular.module('fish-pond')
.component('fishTable', {
  bindings: {
    fishes: '<'
    FishTable:'<'
  },
  template: `
    <div>
      <fish-table-row></fish-table-row>
      <fish-table-row></fish-table-row>
      <fish-table-row></fish-table-row>
    </div>`
});

var FishTable = () => (
  <ft>
    <p2>
      <FishTableRow />
      <FishTableRow />
      <FishTableRow />
    </p2>
  </ft>
);
window.FishTable = FishTable;