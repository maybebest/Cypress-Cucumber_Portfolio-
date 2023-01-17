export const agentClaimActionQuery =
`mutation AgentClaimAction($agentId: IDProfileAgentScalar) {
  AgentClaimAction(agentId: $agentId) {
    result {
      ...BaseConfirmationFragment
      __typename
    }
    __typename
  }
}
`
