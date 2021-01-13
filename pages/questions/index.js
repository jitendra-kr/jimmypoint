import { QuestionList } from "../../src/components";
import Config from "../../src/config/env";
import { sample } from "lodash";
import useSWR from "swr";
const baseUrls = Config.getData().default.baseUrl;

const limit = 10;
function url() {
  return `${sample(
    baseUrls
  )}question/question-list?skip=${0}&limit=${limit}`;
  
}


const fetcher = (...args) => fetch(...args).then((res) => res.json());
function QuestionListPage({ initialData }) {
  let { data, error } = useSWR(url(), fetcher, { initialData, refreshInterval: 2000 });

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;

  return (
    <QuestionList
      questionData={data.result}
      limit={limit}
      totalRecords={data.totalRecords}
      loadMore={data.result.length && limit === data.result.length ? 1 : 0}
    />
  );
}

export async function getStaticProps() {
  let response = await fetcher(url());
  return {
    props: {
      initialData: response,
    },
    revalidate: 2,
  };
}

export default QuestionListPage;
