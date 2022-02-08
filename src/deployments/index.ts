import {
  QueryDeploymentsRequest,
  QueryDeploymentRequest,
  QueryClientImpl,
  QueryGroupRequest
} from "../protobuf/akash/deployment/v1beta1/query";

import {
  DeploymentFilters,
  DeploymentID
} from "../protobuf/akash/deployment/v1beta1/deployment";

import { GroupID } from "../protobuf/akash/deployment/v1beta1/group";

import { getRpc } from "../rpc";

function query(endpoint: string) {
  const client = new QueryClientImpl(getRpc(endpoint));

  return {
    deployments: (filters: DeploymentFilters) => (
      client.Deployments(QueryDeploymentsRequest.fromJSON({ filters }))
    ),

    deployment: (id: DeploymentID) => (
      client.Deployment(QueryDeploymentRequest.fromJSON({ id }))
    ),

    group: (id: GroupID) => (
      client.Group(QueryGroupRequest.fromJSON({ id }))
    )
  };
}

export default () => ({
  query,
});