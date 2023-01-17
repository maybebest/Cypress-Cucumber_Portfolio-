export const searchListingsQuery =
    `query searchListingsQuery($query: SearchQueryJSON, $marketCenter: Int, $first: Int, $after: String, $filter: FilterEnum, $queryObj: QueryObjJSON) {
  SearchListingsQuery(query: $query, marketCenter: $marketCenter, queryObj: $queryObj) {
    result {
      ...SearchListingResultFragment
      __typename
    }
    __typename
  }
}
fragment SearchListingResultFragment on SearchListingResultType {
  listings(first: $first, after: $after, filter: $filter) {
    edges {
      node {
        ...ListingPropertyCardFragment
        __typename
      }
      __typename
    }
    pageInfo {
      ...PageInfoFragment
      __typename
    }
    totalCount
    initialTotalCount
    __typename
  }
  __typename
}
fragment ListingPropertyCardFragment on ListingType {
  id
  listId
  listingCategory
  listingDate
  listingStatus
  listingUpdateDate
  closeDate
  propertyType
  propertySubType
  match
  likes
  dislikes
  note
  virtualTour
  neighborhood {
    id
    __typename
  }
  locator {
    address {
      state
      city
      display
      zipcode
      country
      primaryAddress
      secondaryAddress
      letterbox {
        unit {
          label
          __typename
        }
        number {
          low
          __typename
        }
        __typename
      }
      __typename
    }
    geo {
      ...BaseGeoPointFragment
      __typename
    }
    __typename
  }
  flags {
    ...ListingFlagsFragment
    __typename
  }
  image
  categories {
    images {
      image
      __typename
    }
    __typename
  }
  featuredImages {
    id
    image
    category
    __typename
  }
  features {
    ...ListingFeaturesFragment
    __typename
  }
  pricing {
    ...ListingPriceDataTypeFragment
    __typename
  }
  openhouses {
    ...ListingOpenHouseFragment
    __typename
  }
  listingAgentData {
    courtesyOfBrokerage
    __typename
  }
  mlsNumber
  mlsId
  changeLog {
    statusChange
    statusChangeDate
    openHouseChange
    openHouseChangeDate
    __typename
  }
  changeData {
    changeType
    changeDate
    __typename
  }
  listingSizeData {
    ...ListingSizeDataFragment
    __typename
  }
  listingFields {
    energyGradeLevel
    __typename
  }
  dateAdded
  addedBy {
    id
    displayName
    initials
    avatar
    isAgentLuxuryEnabled
    __typename
  }
  __typename
}
fragment BaseGeoPointFragment on BaseGeoPointType {
  point {
    coordinates
    type
    __typename
  }
  __typename
}
`