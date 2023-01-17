export const consumerSignUpQuery =
    `mutation consumerSignUpAction($user: ConsumerSignUpActionInput!, $kwuid: Int, $siteId: String, $siteType: String, $clientType: ClientTypeEnum) {
  ConsumerSignUpAction(user: $user, kwuid: $kwuid, siteId: $siteId, siteType: $siteType, clientType: $clientType) {
    result {
      ...ConsumerSignInUpActionTypeFragment
      __typename
    }
    __typename
  }
}
`
