import FishReportTable from 'components/FishReportTable/FishReportTable';
import './FishReport.module.css';
import { useQuery, gql } from "@apollo/client";
import moment from 'moment';

const REPORT_QUERY = gql`
{reportTable (id: 1) {
  data{
    id
    attributes{
      header
      report_date
      report_groups{
        data{
          id
          attributes{
            header
            report_entries{
              data{
                id
                attributes{
                  productId
                  referenceId
                  description
                  origin
                  fresh
                  refreshed
                  frozen
                }
              }
            }
          }
        }
      }
    }
  }
}}
`;

export default function FishReport() {
  const { data, loading, error } = useQuery(REPORT_QUERY)

  if (loading) return <div>"Loading..."</div>
  if (error) return <pre>{error.message}</pre>

  const { reportTable: { data: { attributes: { header, report_date, report_groups } } } } = data;
  const reportDisplayDate = moment(report_date).format('MM/DD/YYYY, ddd')

  return (
    <div id="wholesale">
      <div id="content" role="main" className="clearfix">
        <div id="wholesale-wrap">
          <div id="wholesale-border">
            <header className="clearfix">
              <h2>Daily Fresh Fish Report</h2>
              <div id="wholesale-header-right">
                <p className="wholesale-date">Date: {reportDisplayDate}<br />
                  Phone Orders: 503-286-5950
                </p>
                <br />
                <p className='wholesale-date'>
                  {header}
                </p>

              </div>
            </header>
            <br data-clear="all" />
            <FishReportTable report_groups={report_groups} />
          </div>
        </div>
      </div>
    </div>
  )
}