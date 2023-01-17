export const consumerInviteCoBuyerActionQuery =
    `mutation ConsumerInviteCoBuyerAction($email: String!, $firstName: String!, $lastName: String!) {
  ConsumerInviteCoBuyerAction(email: $email, firstName: $firstName, lastName: $lastName) {
    result {
      ...BaseConfirmationFragment
      __typename
    }
    __typename
  }
}
`