import React from 'react';

function Checklist() {
  // TODO: Fetch and display checklist items
  return (
    <div className="bg-white p-4 rounded shadow">
      <form>
        <label>
          <input type="checkbox" name="checklist" value="item1" />
          Item 1
        </label><br/>
        <label>
          <input type="checkbox" name="checklist" value="item2" />
          Item 2
        </label><br/>
        <label>
          <input type="checkbox" name="checklist" value="item3" />
          Item 3
        </label>
      </form>
    </div>
  );
}

export default Checklist; 