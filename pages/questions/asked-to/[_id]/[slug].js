import { sample, upperFirst } from "lodash";
import { Layout } from "antd";
const baseUrls = Config.getData().default.baseUrl;
import Config from '../../../../src/config/env';
import { AppHead } from "../../../../src/components";
import { dateFormat } from "../../../../src/utils";

const { Content } = Layout;

function AskedToPage({ result }) {

  const data = result.was_asked_to_me.filter(Boolean);
  return (
    <Content style={{ padding: "50px 50px 59px 56px" }}>
      <AppHead data={{ title: result.title }} />
      <h1>{result.title}</h1>
      <div className="row" style={{ marginRight: "20px", marginBottom: "30px" }}>
        <div className='col-lg-4'>
          <span className="ask-view">Posted On: </span>
          <span>{dateFormat(result.created_at)}</span>
        </div>
        <div className='col-lg-4'>
          <span className="ask-view">Posted By: </span>
          <span>{upperFirst(result.author.firstName)}</span>
        </div>
        <div className='col-lg-4'>
          <span className="ask-view"> Viewed: </span>
          <span>{result.visits} times </span>
        </div>
      </div>
      <h5>This Question is asked to</h5>
      <ul>
        {data.map((value, i) => {
          return <li key={i}>
            { `${value.firstName} ${value.lastName}` }
          </li>
        })}
      </ul>
    </Content>
  )
}


export async function getServerSideProps(context) {

  const url = `${sample(baseUrls)}question/get-asked-by-to/${context.params._id}/was_asked_to_me`;
  let response = await fetch(url);
  response = await response.json();
  return {
    props: {
      result: response.result
    }
  }
}

export default AskedToPage;
