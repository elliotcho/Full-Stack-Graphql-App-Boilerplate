import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};

export type Query = {
  __typename?: 'Query';
  hi: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  register: Scalars['Boolean'];
  uploadFile: Scalars['Boolean'];
};


export type MutationRegisterArgs = {
  username: Scalars['String'];
};


export type MutationUploadFileArgs = {
  file: Scalars['Upload'];
};


export type Subscription = {
  __typename?: 'Subscription';
  coolEvent: Scalars['Boolean'];
};

export type RegisterMutationVariables = Exact<{
  username: Scalars['String'];
}>;


export type RegisterMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'register'>
);

export type UploadFileMutationVariables = Exact<{
  file: Scalars['Upload'];
}>;


export type UploadFileMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'uploadFile'>
);

export type HiQueryVariables = Exact<{ [key: string]: never; }>;


export type HiQuery = (
  { __typename?: 'Query' }
  & Pick<Query, 'hi'>
);

export type CoolEventSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type CoolEventSubscription = (
  { __typename?: 'Subscription' }
  & Pick<Subscription, 'coolEvent'>
);


export const RegisterDocument = gql`
    mutation Register($username: String!) {
  register(username: $username)
}
    `;
export type RegisterMutationFn = Apollo.MutationFunction<RegisterMutation, RegisterMutationVariables>;

/**
 * __useRegisterMutation__
 *
 * To run a mutation, you first call `useRegisterMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRegisterMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [registerMutation, { data, loading, error }] = useRegisterMutation({
 *   variables: {
 *      username: // value for 'username'
 *   },
 * });
 */
export function useRegisterMutation(baseOptions?: Apollo.MutationHookOptions<RegisterMutation, RegisterMutationVariables>) {
        return Apollo.useMutation<RegisterMutation, RegisterMutationVariables>(RegisterDocument, baseOptions);
      }
export type RegisterMutationHookResult = ReturnType<typeof useRegisterMutation>;
export type RegisterMutationResult = Apollo.MutationResult<RegisterMutation>;
export type RegisterMutationOptions = Apollo.BaseMutationOptions<RegisterMutation, RegisterMutationVariables>;
export const UploadFileDocument = gql`
    mutation UploadFile($file: Upload!) {
  uploadFile(file: $file)
}
    `;
export type UploadFileMutationFn = Apollo.MutationFunction<UploadFileMutation, UploadFileMutationVariables>;

/**
 * __useUploadFileMutation__
 *
 * To run a mutation, you first call `useUploadFileMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUploadFileMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [uploadFileMutation, { data, loading, error }] = useUploadFileMutation({
 *   variables: {
 *      file: // value for 'file'
 *   },
 * });
 */
export function useUploadFileMutation(baseOptions?: Apollo.MutationHookOptions<UploadFileMutation, UploadFileMutationVariables>) {
        return Apollo.useMutation<UploadFileMutation, UploadFileMutationVariables>(UploadFileDocument, baseOptions);
      }
export type UploadFileMutationHookResult = ReturnType<typeof useUploadFileMutation>;
export type UploadFileMutationResult = Apollo.MutationResult<UploadFileMutation>;
export type UploadFileMutationOptions = Apollo.BaseMutationOptions<UploadFileMutation, UploadFileMutationVariables>;
export const HiDocument = gql`
    query Hi {
  hi
}
    `;

/**
 * __useHiQuery__
 *
 * To run a query within a React component, call `useHiQuery` and pass it any options that fit your needs.
 * When your component renders, `useHiQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useHiQuery({
 *   variables: {
 *   },
 * });
 */
export function useHiQuery(baseOptions?: Apollo.QueryHookOptions<HiQuery, HiQueryVariables>) {
        return Apollo.useQuery<HiQuery, HiQueryVariables>(HiDocument, baseOptions);
      }
export function useHiLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<HiQuery, HiQueryVariables>) {
          return Apollo.useLazyQuery<HiQuery, HiQueryVariables>(HiDocument, baseOptions);
        }
export type HiQueryHookResult = ReturnType<typeof useHiQuery>;
export type HiLazyQueryHookResult = ReturnType<typeof useHiLazyQuery>;
export type HiQueryResult = Apollo.QueryResult<HiQuery, HiQueryVariables>;
export const CoolEventDocument = gql`
    subscription CoolEvent {
  coolEvent
}
    `;

/**
 * __useCoolEventSubscription__
 *
 * To run a query within a React component, call `useCoolEventSubscription` and pass it any options that fit your needs.
 * When your component renders, `useCoolEventSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCoolEventSubscription({
 *   variables: {
 *   },
 * });
 */
export function useCoolEventSubscription(baseOptions?: Apollo.SubscriptionHookOptions<CoolEventSubscription, CoolEventSubscriptionVariables>) {
        return Apollo.useSubscription<CoolEventSubscription, CoolEventSubscriptionVariables>(CoolEventDocument, baseOptions);
      }
export type CoolEventSubscriptionHookResult = ReturnType<typeof useCoolEventSubscription>;
export type CoolEventSubscriptionResult = Apollo.SubscriptionResult<CoolEventSubscription>;