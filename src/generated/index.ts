import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | undefined;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** BigInt custom scalar type */
  BigInt: any;
  /** Date custom scalar type */
  DateTime: any;
  /** Decimal custom scalar type */
  Decimal: any;
  /** Json custom scalar type */
  Json: any;
};

export type AggregateCounter = {
  __typename?: 'AggregateCounter';
  _avg?: Maybe<CounterAvgAggregateOutputType>;
  _count?: Maybe<CounterCountAggregateOutputType>;
  _max?: Maybe<CounterMaxAggregateOutputType>;
  _min?: Maybe<CounterMinAggregateOutputType>;
  _sum?: Maybe<CounterSumAggregateOutputType>;
  avg?: Maybe<CounterAvgAggregateOutputType>;
  count?: Maybe<CounterCountAggregateOutputType>;
  max?: Maybe<CounterMaxAggregateOutputType>;
  min?: Maybe<CounterMinAggregateOutputType>;
  sum?: Maybe<CounterSumAggregateOutputType>;
};

export type BatchPayload = {
  __typename?: 'BatchPayload';
  count: Scalars['Int'];
};


export type BigIntFieldUpdateOperationsInput = {
  decrement?: Maybe<Scalars['BigInt']>;
  divide?: Maybe<Scalars['BigInt']>;
  increment?: Maybe<Scalars['BigInt']>;
  multiply?: Maybe<Scalars['BigInt']>;
  set?: Maybe<Scalars['BigInt']>;
};

export type BigIntFilter = {
  equals?: Maybe<Scalars['BigInt']>;
  gt?: Maybe<Scalars['BigInt']>;
  gte?: Maybe<Scalars['BigInt']>;
  in?: Maybe<Array<Maybe<Scalars['BigInt']>>>;
  lt?: Maybe<Scalars['BigInt']>;
  lte?: Maybe<Scalars['BigInt']>;
  not?: Maybe<NestedBigIntFilter>;
  notIn?: Maybe<Array<Maybe<Scalars['BigInt']>>>;
};

export type BigIntWithAggregatesFilter = {
  _avg?: Maybe<NestedFloatFilter>;
  _count?: Maybe<NestedIntFilter>;
  _max?: Maybe<NestedBigIntFilter>;
  _min?: Maybe<NestedBigIntFilter>;
  _sum?: Maybe<NestedBigIntFilter>;
  avg?: Maybe<NestedFloatFilter>;
  count?: Maybe<NestedIntFilter>;
  equals?: Maybe<Scalars['BigInt']>;
  gt?: Maybe<Scalars['BigInt']>;
  gte?: Maybe<Scalars['BigInt']>;
  in?: Maybe<Array<Maybe<Scalars['BigInt']>>>;
  lt?: Maybe<Scalars['BigInt']>;
  lte?: Maybe<Scalars['BigInt']>;
  max?: Maybe<NestedBigIntFilter>;
  min?: Maybe<NestedBigIntFilter>;
  not?: Maybe<NestedBigIntWithAggregatesFilter>;
  notIn?: Maybe<Array<Maybe<Scalars['BigInt']>>>;
  sum?: Maybe<NestedBigIntFilter>;
};

export type Counter = {
  __typename?: 'Counter';
  createdAt: Scalars['DateTime'];
  id: Scalars['String'];
  name: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  value: Scalars['BigInt'];
};

export type CounterAvgAggregateOutputType = {
  __typename?: 'CounterAvgAggregateOutputType';
  value?: Maybe<Scalars['Float']>;
};

export type CounterCountAggregateOutputType = {
  __typename?: 'CounterCountAggregateOutputType';
  _all: Scalars['Int'];
  createdAt: Scalars['Int'];
  id: Scalars['Int'];
  name: Scalars['Int'];
  updatedAt: Scalars['Int'];
  value: Scalars['Int'];
};

export type CounterCreateInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  value?: Maybe<Scalars['BigInt']>;
};

export type CounterMaxAggregateOutputType = {
  __typename?: 'CounterMaxAggregateOutputType';
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  value?: Maybe<Scalars['BigInt']>;
};

export type CounterMinAggregateOutputType = {
  __typename?: 'CounterMinAggregateOutputType';
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  value?: Maybe<Scalars['BigInt']>;
};

export type CounterOrderByInput = {
  createdAt?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
  value?: Maybe<SortOrder>;
};

export enum CounterScalarFieldEnum {
  CreatedAt = 'createdAt',
  Id = 'id',
  Name = 'name',
  UpdatedAt = 'updatedAt',
  Value = 'value'
}

export type CounterScalarWhereWithAggregatesInput = {
  AND?: Maybe<Array<Maybe<CounterScalarWhereWithAggregatesInput>>>;
  NOT?: Maybe<Array<Maybe<CounterScalarWhereWithAggregatesInput>>>;
  OR?: Maybe<Array<Maybe<CounterScalarWhereWithAggregatesInput>>>;
  createdAt?: Maybe<DateTimeWithAggregatesFilter>;
  id?: Maybe<StringWithAggregatesFilter>;
  name?: Maybe<StringWithAggregatesFilter>;
  updatedAt?: Maybe<DateTimeWithAggregatesFilter>;
  value?: Maybe<BigIntWithAggregatesFilter>;
};

export type CounterSumAggregateOutputType = {
  __typename?: 'CounterSumAggregateOutputType';
  value?: Maybe<Scalars['BigInt']>;
};

export type CounterUncheckedCreateInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  value?: Maybe<Scalars['BigInt']>;
};

export type CounterUncheckedUpdateInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  value?: Maybe<BigIntFieldUpdateOperationsInput>;
};

export type CounterUncheckedUpdateManyInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  value?: Maybe<BigIntFieldUpdateOperationsInput>;
};

export type CounterUpdateInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  value?: Maybe<BigIntFieldUpdateOperationsInput>;
};

export type CounterUpdateManyMutationInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  value?: Maybe<BigIntFieldUpdateOperationsInput>;
};

export type CounterWhereInput = {
  AND?: Maybe<Array<Maybe<CounterWhereInput>>>;
  NOT?: Maybe<Array<Maybe<CounterWhereInput>>>;
  OR?: Maybe<Array<Maybe<CounterWhereInput>>>;
  createdAt?: Maybe<DateTimeFilter>;
  id?: Maybe<StringFilter>;
  name?: Maybe<StringFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
  value?: Maybe<BigIntFilter>;
};

export type CounterWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};


export type DateTimeFieldUpdateOperationsInput = {
  set?: Maybe<Scalars['DateTime']>;
};

export type DateTimeFilter = {
  equals?: Maybe<Scalars['DateTime']>;
  gt?: Maybe<Scalars['DateTime']>;
  gte?: Maybe<Scalars['DateTime']>;
  in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  lt?: Maybe<Scalars['DateTime']>;
  lte?: Maybe<Scalars['DateTime']>;
  not?: Maybe<NestedDateTimeFilter>;
  notIn?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
};

export type DateTimeWithAggregatesFilter = {
  _count?: Maybe<NestedIntFilter>;
  _max?: Maybe<NestedDateTimeFilter>;
  _min?: Maybe<NestedDateTimeFilter>;
  count?: Maybe<NestedIntFilter>;
  equals?: Maybe<Scalars['DateTime']>;
  gt?: Maybe<Scalars['DateTime']>;
  gte?: Maybe<Scalars['DateTime']>;
  in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  lt?: Maybe<Scalars['DateTime']>;
  lte?: Maybe<Scalars['DateTime']>;
  max?: Maybe<NestedDateTimeFilter>;
  min?: Maybe<NestedDateTimeFilter>;
  not?: Maybe<NestedDateTimeWithAggregatesFilter>;
  notIn?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
};



export type Mutation = {
  __typename?: 'Mutation';
  createCounter: Counter;
  incrementCounter?: Maybe<Counter>;
};


export type MutationCreateCounterArgs = {
  data: CounterCreateInput;
};


export type MutationIncrementCounterArgs = {
  id: Scalars['String'];
};

export type NestedBigIntFilter = {
  equals?: Maybe<Scalars['BigInt']>;
  gt?: Maybe<Scalars['BigInt']>;
  gte?: Maybe<Scalars['BigInt']>;
  in?: Maybe<Array<Maybe<Scalars['BigInt']>>>;
  lt?: Maybe<Scalars['BigInt']>;
  lte?: Maybe<Scalars['BigInt']>;
  not?: Maybe<NestedBigIntFilter>;
  notIn?: Maybe<Array<Maybe<Scalars['BigInt']>>>;
};

export type NestedBigIntWithAggregatesFilter = {
  _avg?: Maybe<NestedFloatFilter>;
  _count?: Maybe<NestedIntFilter>;
  _max?: Maybe<NestedBigIntFilter>;
  _min?: Maybe<NestedBigIntFilter>;
  _sum?: Maybe<NestedBigIntFilter>;
  avg?: Maybe<NestedFloatFilter>;
  count?: Maybe<NestedIntFilter>;
  equals?: Maybe<Scalars['BigInt']>;
  gt?: Maybe<Scalars['BigInt']>;
  gte?: Maybe<Scalars['BigInt']>;
  in?: Maybe<Array<Maybe<Scalars['BigInt']>>>;
  lt?: Maybe<Scalars['BigInt']>;
  lte?: Maybe<Scalars['BigInt']>;
  max?: Maybe<NestedBigIntFilter>;
  min?: Maybe<NestedBigIntFilter>;
  not?: Maybe<NestedBigIntWithAggregatesFilter>;
  notIn?: Maybe<Array<Maybe<Scalars['BigInt']>>>;
  sum?: Maybe<NestedBigIntFilter>;
};

export type NestedDateTimeFilter = {
  equals?: Maybe<Scalars['DateTime']>;
  gt?: Maybe<Scalars['DateTime']>;
  gte?: Maybe<Scalars['DateTime']>;
  in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  lt?: Maybe<Scalars['DateTime']>;
  lte?: Maybe<Scalars['DateTime']>;
  not?: Maybe<NestedDateTimeFilter>;
  notIn?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
};

export type NestedDateTimeWithAggregatesFilter = {
  _count?: Maybe<NestedIntFilter>;
  _max?: Maybe<NestedDateTimeFilter>;
  _min?: Maybe<NestedDateTimeFilter>;
  count?: Maybe<NestedIntFilter>;
  equals?: Maybe<Scalars['DateTime']>;
  gt?: Maybe<Scalars['DateTime']>;
  gte?: Maybe<Scalars['DateTime']>;
  in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  lt?: Maybe<Scalars['DateTime']>;
  lte?: Maybe<Scalars['DateTime']>;
  max?: Maybe<NestedDateTimeFilter>;
  min?: Maybe<NestedDateTimeFilter>;
  not?: Maybe<NestedDateTimeWithAggregatesFilter>;
  notIn?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
};

export type NestedFloatFilter = {
  equals?: Maybe<Scalars['Float']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  not?: Maybe<NestedFloatFilter>;
  notIn?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export type NestedIntFilter = {
  equals?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  not?: Maybe<NestedIntFilter>;
  notIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
};

export type NestedStringFilter = {
  contains?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  equals?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  not?: Maybe<NestedStringFilter>;
  notIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  startsWith?: Maybe<Scalars['String']>;
};

export type NestedStringWithAggregatesFilter = {
  _count?: Maybe<NestedIntFilter>;
  _max?: Maybe<NestedStringFilter>;
  _min?: Maybe<NestedStringFilter>;
  contains?: Maybe<Scalars['String']>;
  count?: Maybe<NestedIntFilter>;
  endsWith?: Maybe<Scalars['String']>;
  equals?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  max?: Maybe<NestedStringFilter>;
  min?: Maybe<NestedStringFilter>;
  not?: Maybe<NestedStringWithAggregatesFilter>;
  notIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  startsWith?: Maybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  aggregateCounter?: Maybe<AggregateCounter>;
  counter?: Maybe<Counter>;
  counterCount: Scalars['Int'];
  counters: Array<Counter>;
  firstCounter?: Maybe<Counter>;
  systemInfo?: Maybe<SystemInfo>;
};


export type QueryAggregateCounterArgs = {
  cursor?: Maybe<CounterWhereUniqueInput>;
  distinct?: Maybe<CounterScalarFieldEnum>;
  orderBy?: Maybe<Array<Maybe<CounterOrderByInput>>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<CounterWhereInput>;
};


export type QueryCounterArgs = {
  where: CounterWhereUniqueInput;
};


export type QueryCounterCountArgs = {
  cursor?: Maybe<CounterWhereUniqueInput>;
  distinct?: Maybe<CounterScalarFieldEnum>;
  orderBy?: Maybe<Array<Maybe<CounterOrderByInput>>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<CounterWhereInput>;
};


export type QueryCountersArgs = {
  cursor?: Maybe<CounterWhereUniqueInput>;
  distinct?: Maybe<CounterScalarFieldEnum>;
  orderBy?: Maybe<Array<Maybe<CounterOrderByInput>>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<CounterWhereInput>;
};


export type QueryFirstCounterArgs = {
  cursor?: Maybe<CounterWhereUniqueInput>;
  distinct?: Maybe<CounterScalarFieldEnum>;
  orderBy?: Maybe<Array<Maybe<CounterOrderByInput>>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<CounterWhereInput>;
};

export enum SortOrder {
  Asc = 'asc',
  Desc = 'desc'
}

export type StringFieldUpdateOperationsInput = {
  set?: Maybe<Scalars['String']>;
};

export type StringFilter = {
  contains?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  equals?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  not?: Maybe<NestedStringFilter>;
  notIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  startsWith?: Maybe<Scalars['String']>;
};

export type StringWithAggregatesFilter = {
  _count?: Maybe<NestedIntFilter>;
  _max?: Maybe<NestedStringFilter>;
  _min?: Maybe<NestedStringFilter>;
  contains?: Maybe<Scalars['String']>;
  count?: Maybe<NestedIntFilter>;
  endsWith?: Maybe<Scalars['String']>;
  equals?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  max?: Maybe<NestedStringFilter>;
  min?: Maybe<NestedStringFilter>;
  not?: Maybe<NestedStringWithAggregatesFilter>;
  notIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  startsWith?: Maybe<Scalars['String']>;
};

export type SystemInfo = {
  __typename?: 'SystemInfo';
  databaseType?: Maybe<Scalars['String']>;
  env?: Maybe<Scalars['Json']>;
};

export type CounterDataFragment = { __typename?: 'Counter', id: string, name: string, value: any, createdAt: any, updatedAt: any };

export type GetAllCountersQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllCountersQuery = { __typename?: 'Query', counters: Array<{ __typename?: 'Counter', id: string, name: string, value: any, createdAt: any, updatedAt: any }> };

export type CreateNewCounterMutationVariables = Exact<{
  data: CounterCreateInput;
}>;


export type CreateNewCounterMutation = { __typename?: 'Mutation', createCounter: { __typename?: 'Counter', id: string, name: string, value: any, createdAt: any, updatedAt: any } };

export type IncrementCounterMutationVariables = Exact<{
  id: Scalars['String'];
}>;


export type IncrementCounterMutation = { __typename?: 'Mutation', incrementCounter?: Maybe<{ __typename?: 'Counter', id: string, name: string, value: any, createdAt: any, updatedAt: any }> };

export type SystemInfoDataFragment = { __typename?: 'SystemInfo', databaseType?: Maybe<string> };

export type GetSystemInfoQueryVariables = Exact<{ [key: string]: never; }>;


export type GetSystemInfoQuery = { __typename?: 'Query', systemInfo?: Maybe<{ __typename?: 'SystemInfo', databaseType?: Maybe<string> }> };

export const CounterDataFragmentDoc = gql`
    fragment CounterData on Counter {
  id
  name
  value
  createdAt
  updatedAt
}
    `;
export const SystemInfoDataFragmentDoc = gql`
    fragment SystemInfoData on SystemInfo {
  databaseType
}
    `;
export const GetAllCountersDocument = gql`
    query GetAllCounters {
  counters {
    ...CounterData
  }
}
    ${CounterDataFragmentDoc}`;

/**
 * __useGetAllCountersQuery__
 *
 * To run a query within a React component, call `useGetAllCountersQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllCountersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllCountersQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllCountersQuery(baseOptions?: Apollo.QueryHookOptions<GetAllCountersQuery, GetAllCountersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllCountersQuery, GetAllCountersQueryVariables>(GetAllCountersDocument, options);
      }
export function useGetAllCountersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllCountersQuery, GetAllCountersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllCountersQuery, GetAllCountersQueryVariables>(GetAllCountersDocument, options);
        }
export type GetAllCountersQueryHookResult = ReturnType<typeof useGetAllCountersQuery>;
export type GetAllCountersLazyQueryHookResult = ReturnType<typeof useGetAllCountersLazyQuery>;
export type GetAllCountersQueryResult = Apollo.QueryResult<GetAllCountersQuery, GetAllCountersQueryVariables>;
export const CreateNewCounterDocument = gql`
    mutation CreateNewCounter($data: CounterCreateInput!) {
  createCounter(data: $data) {
    ...CounterData
  }
}
    ${CounterDataFragmentDoc}`;

/**
 * __useCreateNewCounterMutation__
 *
 * To run a mutation, you first call `useCreateNewCounterMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateNewCounterMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createNewCounterMutation, { data, loading, error }] = useCreateNewCounterMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateNewCounterMutation(baseOptions?: Apollo.MutationHookOptions<CreateNewCounterMutation, CreateNewCounterMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateNewCounterMutation, CreateNewCounterMutationVariables>(CreateNewCounterDocument, options);
      }
export type CreateNewCounterMutationHookResult = ReturnType<typeof useCreateNewCounterMutation>;
export type CreateNewCounterMutationResult = Apollo.MutationResult<CreateNewCounterMutation>;
export type CreateNewCounterMutationOptions = Apollo.BaseMutationOptions<CreateNewCounterMutation, CreateNewCounterMutationVariables>;
export const IncrementCounterDocument = gql`
    mutation IncrementCounter($id: String!) {
  incrementCounter(id: $id) {
    ...CounterData
  }
}
    ${CounterDataFragmentDoc}`;

/**
 * __useIncrementCounterMutation__
 *
 * To run a mutation, you first call `useIncrementCounterMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useIncrementCounterMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [incrementCounterMutation, { data, loading, error }] = useIncrementCounterMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useIncrementCounterMutation(baseOptions?: Apollo.MutationHookOptions<IncrementCounterMutation, IncrementCounterMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<IncrementCounterMutation, IncrementCounterMutationVariables>(IncrementCounterDocument, options);
      }
export type IncrementCounterMutationHookResult = ReturnType<typeof useIncrementCounterMutation>;
export type IncrementCounterMutationResult = Apollo.MutationResult<IncrementCounterMutation>;
export type IncrementCounterMutationOptions = Apollo.BaseMutationOptions<IncrementCounterMutation, IncrementCounterMutationVariables>;
export const GetSystemInfoDocument = gql`
    query GetSystemInfo {
  systemInfo {
    ...SystemInfoData
  }
}
    ${SystemInfoDataFragmentDoc}`;

/**
 * __useGetSystemInfoQuery__
 *
 * To run a query within a React component, call `useGetSystemInfoQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetSystemInfoQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetSystemInfoQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetSystemInfoQuery(baseOptions?: Apollo.QueryHookOptions<GetSystemInfoQuery, GetSystemInfoQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetSystemInfoQuery, GetSystemInfoQueryVariables>(GetSystemInfoDocument, options);
      }
export function useGetSystemInfoLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetSystemInfoQuery, GetSystemInfoQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetSystemInfoQuery, GetSystemInfoQueryVariables>(GetSystemInfoDocument, options);
        }
export type GetSystemInfoQueryHookResult = ReturnType<typeof useGetSystemInfoQuery>;
export type GetSystemInfoLazyQueryHookResult = ReturnType<typeof useGetSystemInfoLazyQuery>;
export type GetSystemInfoQueryResult = Apollo.QueryResult<GetSystemInfoQuery, GetSystemInfoQueryVariables>;