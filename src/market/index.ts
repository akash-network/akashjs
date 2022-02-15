import {
  QueryClientImpl,
  QueryLeasesRequest,
  QueryLeasesResponse,
} from "../protobuf/akash/market/v1beta1/query";

import { getRpc } from "../rpc";
import { LeaseFilters } from "../protobuf/akash/market/v1beta1/lease";


function query(endpoint: string) {
  const client = new QueryClientImpl(getRpc(endpoint));

  return {
    leases: (filters: LeaseFilters) => (
      client.Leases(QueryLeasesRequest.fromJSON({ filters }))
        .then(QueryLeasesResponse.toJSON)
    ),
  };
}

export default () => ({
  query,
});