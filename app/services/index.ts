import omit from 'lodash/omit';
import qs from 'query-string';

import { API_URL_PROD } from 'configs';

const API_URL = API_URL_PROD;

interface IDefaultHeadersProps {
  'Content-Type': string;
  Authorization?: string | null;
}

const defaultHeaders: IDefaultHeadersProps = {
  'Content-Type': 'application/json',
};

interface IAPArgs {
  url: string;
  method: 'GET' | 'POST' | 'PATCH' | 'DELETE';
  body?: any;
  headers?: any;
  queryParams?: Record<string, any>;
  noAuth?: boolean;
  formData?: boolean;
  baseDomain?: string;
}

async function service<TResp = any>(args: IAPArgs): Promise<TResp> {
  const {
    url,
    method = 'GET',
    body = {},
    headers = {},
    queryParams = null,
    formData = false,
    baseDomain,
    noAuth,
    ...extraProps
  } = args;

  const props = {
    body,
    method,
    headers: {
      ...defaultHeaders,
      ...headers,
    },
    ...extraProps,
  };

  if (noAuth) {
    delete props.headers.Authorization;
  }

  if (method === 'GET') {
    props.body = null;
  }

  if (!formData && method !== 'GET') {
    props.body = JSON.stringify(body);
  }

  if (formData) {
    props.headers = omit(props.headers, ['Content-Type']);
  }

  let fetchUrl = `${baseDomain || API_URL}${url}`;
  if (queryParams) {
    fetchUrl = `${fetchUrl}?${qs.stringify(queryParams, {
      arrayFormat: 'bracket',
    })}`;
  }

  const data = await fetch(fetchUrl, props);

  // logSuccess(API_URL, JSON.stringify(props));
  if (data.status >= 400) {
    const error = await data.json();
    throw { status: data.status, ...error };
  }
  // logSuccess(API_URL, JSON.stringify(data));

  return data.json();
}

const signIn = (token: string) => {
  defaultHeaders.Authorization = `Bearer ${token}`;
};

const signOut = () => {
  defaultHeaders.Authorization = null;
};

export { signIn, signOut };
export default service;
