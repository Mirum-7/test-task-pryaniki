// const HOST = 'https://test.v5.pryaniky.com';
const HOST = ''; // просит Cross-Origin
const API = 'ru/data/v3/testmethods/docs'

const routes = {
  login: `${HOST}/${API}/login`,
  data: `${HOST}/${API}/userdocs`,
}

export default routes;