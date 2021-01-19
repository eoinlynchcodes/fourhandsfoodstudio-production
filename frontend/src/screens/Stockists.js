import React from "react";

function Stockists() {
  return (
    <div>
      <section id="stockists" className="stockists">
        <div className="coloredBox violet">
          <h3>Stockists</h3>
        </div>
        <br />
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Address</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Nuts and Grains</td>
              <td>Mullingar, Westmeath</td>
            </tr>
            <tr>
              <td>Foxes Fruit and Veg</td>
              <td>Mullingar, Westmeath</td>
            </tr>
            <tr>
              <td>Lowe and Co.</td>
              <td>Athlone, Westmeath</td>
            </tr>
            <tr>
              <td>Marlowe and Co</td>
              <td>Dublin</td>
            </tr>
            <tr>
              <td>Lennox Street Grocers</td>
              <td>Howth Dublin</td>
            </tr>
            <tr>
              <td>Mamo Restaurant</td>
              <td>Howth, Dublin</td>
            </tr>
            <tr>
              <td>Margadh Specialty Shop</td>
              <td>Howth, Dublin</td>
            </tr>
            <tr>
              <td>The Dublin Food Co-Op.</td>
              <td>Dublin</td>
            </tr>
            <tr>
              <td>The Barrow Market</td>
              <td>Dublin</td>
            </tr>
          </tbody>
        </table>
        <br />
        <br />
      </section>
    </div>
  );
}

export default Stockists;
