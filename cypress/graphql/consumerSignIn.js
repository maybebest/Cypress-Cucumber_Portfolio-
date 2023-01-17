export const consumerSignInQuery =
`mutation consumerSignInAction($username: String!, $password: String!, $kwuid: Int, $siteType: String) {
  ConsumerSignInAction(username: $username, password: $password, kwuid: $kwuid, siteType: $siteType) {
  result {
  ...ConsumerSignInUpActionTypeFragment
  __typename
}
__typename
}
}
`
