import React from "react";
import { Table } from "react-bootstrap";
import KITS_SHIPPING_DATA from "../data/KITS_SHIPPING_DATA.json";

const TableList = ({ tableList = [] }) => {
  return (
    <div>
      {tableList?.map((data, key) => {
        return (
          <div key={data.id}>
            <Table striped bordered hover variant="dark">
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Label Id</th>
                  <th>Shipping Tracking Code</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{data.id}</td>
                  <td>{data.label_id}</td>
                  <td>{data.shipping_tracking_code}</td>
                </tr>
              </tbody>
            </Table>
          </div>
        );
      })}
    </div>
  );
};

export default TableList;
