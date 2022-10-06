import { Component, Fragment } from 'react';
import './FishReportTable.module.css';
import 'assets/css/main.css'

export default class FishReportTable extends Component {

  constructor(props) {
    super(props);
    this.reportGroups = props.report_groups.data;
  }

  render() {
    return <table id="wholesale-list" className="clearfix">
      <caption>Daily Fresh Fish Report</caption>
      {
        this.reportGroups.map((reportGroup, index) => {
          const { header, report_entries: { data } } = reportGroup.attributes
          const showTable = Boolean(data.length)
          return !showTable ? null : (
            <Fragment>
              <thead key={index}>
                <tr>
                  <th className='col1'>{header}</th>
                  {/* <th className="col1b">ID</th> */}
                  <th className="col2">Origin</th>
                  <th className="col3">Fresh </th>
                  {/* <th className="col4">Refreshed</th> */}
                  <th className="col4">Frozen</th>
                </tr>
              </thead>
              <tbody>
                {data.map((entry) => {
                  const { description, fresh, frozen, productId, refreshed, origin } = entry.attributes
                  return (
                    <tr key={productId}>
                      <td className="col1">{description}</td>
                      {/* <td className="col1b">{productId}</td> */}
                      <td className="col2">{(origin ? origin.toUpperCase() : "")}</td>
                      <td className="col3">{fresh ? "✔" : ""}</td>
                      {/* <td className="col4">{refreshed ? "✔" : ""}</td> */}
                      <td className="col4">{frozen ? "✔" : ""}</td>
                    </tr>
                  )
                })
                }
              </tbody>
            </Fragment>
          );
        })
      }
    </table>
  }
}
