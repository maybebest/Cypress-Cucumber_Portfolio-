export const consumerCoBuyerInviteAcceptActionQuery =
    `mutation ConsumerCoBuyerInviteAcceptAction {
  ConsumerCoBuyerInviteAcceptAction {
    result {
      ...CoBuyerTypeFragment
      __typename
    }
    __typename
  }
}
`