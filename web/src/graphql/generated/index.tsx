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
  DateTime: any;
};

/** A comic book or trade paperback */
export type Book = {
  __typename?: 'Book';
  createdAt: Scalars['DateTime'];
  credits?: Maybe<Array<Credit>>;
  format?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  issue?: Maybe<Scalars['String']>;
  publisherName?: Maybe<Scalars['String']>;
  series?: Maybe<Series>;
  seriesName?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
};

export type BookAttributes = {
  alternateTitle?: Maybe<Scalars['String']>;
  creditIds?: Maybe<Array<Scalars['ID']>>;
  issue?: Maybe<Scalars['String']>;
  seriesId?: Maybe<Scalars['ID']>;
};

/** The connection type for Book. */
export type BookConnection = {
  __typename?: 'BookConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<BookEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<Book>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type BookEdge = {
  __typename?: 'BookEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node?: Maybe<Book>;
};

/** Autogenerated return type of CreateBook */
export type CreateBookPayload = {
  __typename?: 'CreateBookPayload';
  book?: Maybe<Book>;
  errors: Array<UserError>;
};

/** Autogenerated return type of CreatePublisher */
export type CreatePublisherPayload = {
  __typename?: 'CreatePublisherPayload';
  publisher?: Maybe<Publisher>;
  result?: Maybe<Scalars['Boolean']>;
};

/** Autogenerated return type of CreateSeries */
export type CreateSeriesPayload = {
  __typename?: 'CreateSeriesPayload';
  errors: Array<UserError>;
  series?: Maybe<Series>;
};

/** A person representing someone involved in the creation process of a book */
export type Creator = {
  __typename?: 'Creator';
  createdAt: Scalars['DateTime'];
  firstName?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  lastName?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
};

/** An association of book and creator */
export type Credit = {
  __typename?: 'Credit';
  book: Book;
  createdAt: Scalars['DateTime'];
  creator: Creator;
  id: Scalars['ID'];
  role: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};


/** Autogenerated return type of EditBook */
export type EditBookPayload = {
  __typename?: 'EditBookPayload';
  book?: Maybe<Book>;
  errors: Array<UserError>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createBook?: Maybe<CreateBookPayload>;
  createPublisher?: Maybe<CreatePublisherPayload>;
  createSeries?: Maybe<CreateSeriesPayload>;
  editBook?: Maybe<EditBookPayload>;
};


export type MutationCreateBookArgs = {
  attributes: BookAttributes;
};


export type MutationCreatePublisherArgs = {
  name: Scalars['String'];
};


export type MutationCreateSeriesArgs = {
  publisherId: Scalars['ID'];
  name: Scalars['String'];
};


export type MutationEditBookArgs = {
  id: Scalars['ID'];
  title: Scalars['String'];
};

/** Information about pagination in a connection. */
export type PageInfo = {
  __typename?: 'PageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
};

/** A book publishing company */
export type Publisher = {
  __typename?: 'Publisher';
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  name: Scalars['String'];
  series: Array<Series>;
  updatedAt: Scalars['DateTime'];
};

/** The connection type for Publisher. */
export type PublisherConnection = {
  __typename?: 'PublisherConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<PublisherEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<Publisher>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type PublisherEdge = {
  __typename?: 'PublisherEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node?: Maybe<Publisher>;
};

export type Query = {
  __typename?: 'Query';
  book: Book;
  books: BookConnection;
  publisher: Publisher;
  publishers: PublisherConnection;
  series: Series;
  seriesList: SeriesConnection;
};


export type QueryBookArgs = {
  id?: Maybe<Scalars['ID']>;
};


export type QueryBooksArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryPublisherArgs = {
  id?: Maybe<Scalars['ID']>;
};


export type QueryPublishersArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QuerySeriesArgs = {
  id?: Maybe<Scalars['ID']>;
};


export type QuerySeriesListArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

/** A collection of related books */
export type Series = {
  __typename?: 'Series';
  /** A list of books released in this series */
  books?: Maybe<Array<Book>>;
  id: Scalars['ID'];
  name: Scalars['String'];
  publisher?: Maybe<Publisher>;
};

/** The connection type for Series. */
export type SeriesConnection = {
  __typename?: 'SeriesConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<SeriesEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<Series>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type SeriesEdge = {
  __typename?: 'SeriesEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node?: Maybe<Series>;
};

/** A user-readable error */
export type UserError = {
  __typename?: 'UserError';
  /** A description of the error */
  message: Scalars['String'];
  /** Which input value this error came from */
  path?: Maybe<Array<Scalars['String']>>;
};

export type CreateBookMutationVariables = Exact<{
  attributes: BookAttributes;
}>;


export type CreateBookMutation = (
  { __typename?: 'Mutation' }
  & { createBook?: Maybe<(
    { __typename?: 'CreateBookPayload' }
    & { book?: Maybe<(
      { __typename?: 'Book' }
      & BookDetailsFragment
    )>, errors: Array<(
      { __typename?: 'UserError' }
      & Pick<UserError, 'message'>
    )> }
  )> }
);

export type EditBookMutationVariables = Exact<{
  id: Scalars['ID'];
  title: Scalars['String'];
}>;


export type EditBookMutation = (
  { __typename?: 'Mutation' }
  & { editBook?: Maybe<(
    { __typename?: 'EditBookPayload' }
    & { book?: Maybe<(
      { __typename?: 'Book' }
      & BookDetailsFragment
    )>, errors: Array<(
      { __typename?: 'UserError' }
      & Pick<UserError, 'message'>
    )> }
  )> }
);

export type BookQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type BookQuery = (
  { __typename?: 'Query' }
  & { book: (
    { __typename?: 'Book' }
    & BookDetailsFragment
  ) }
);

export type BookDetailsFragment = (
  { __typename?: 'Book' }
  & Pick<Book, 'id' | 'title' | 'createdAt' | 'format' | 'issue' | 'updatedAt' | 'seriesName' | 'publisherName'>
  & { credits?: Maybe<Array<(
    { __typename?: 'Credit' }
    & CreditDetailsFragment
  )>> }
);

export type CreditDetailsFragment = (
  { __typename?: 'Credit' }
  & Pick<Credit, 'id'>
  & { book: (
    { __typename?: 'Book' }
    & Pick<Book, 'id'>
  ) }
);

export type BooksQueryVariables = Exact<{ [key: string]: never; }>;


export type BooksQuery = (
  { __typename?: 'Query' }
  & { books: (
    { __typename?: 'BookConnection' }
    & { nodes?: Maybe<Array<Maybe<(
      { __typename?: 'Book' }
      & BookDetailsFragment
    )>>> }
  ) }
);

export type SeriesListQueryVariables = Exact<{ [key: string]: never; }>;


export type SeriesListQuery = (
  { __typename?: 'Query' }
  & { seriesList: (
    { __typename?: 'SeriesConnection' }
    & { nodes?: Maybe<Array<Maybe<(
      { __typename?: 'Series' }
      & Pick<Series, 'id' | 'name'>
    )>>> }
  ) }
);

export const CreditDetailsFragmentDoc = gql`
    fragment CreditDetails on Credit {
  id
  book {
    id
  }
}
    `;
export const BookDetailsFragmentDoc = gql`
    fragment BookDetails on Book {
  id
  title
  createdAt
  credits {
    ...CreditDetails
  }
  format
  issue
  updatedAt
  seriesName
  publisherName
}
    ${CreditDetailsFragmentDoc}`;
export const CreateBookDocument = gql`
    mutation CreateBook($attributes: BookAttributes!) {
  createBook(attributes: $attributes) {
    book {
      ...BookDetails
    }
    errors {
      message
    }
  }
}
    ${BookDetailsFragmentDoc}`;
export type CreateBookMutationFn = Apollo.MutationFunction<CreateBookMutation, CreateBookMutationVariables>;

/**
 * __useCreateBookMutation__
 *
 * To run a mutation, you first call `useCreateBookMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateBookMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createBookMutation, { data, loading, error }] = useCreateBookMutation({
 *   variables: {
 *      attributes: // value for 'attributes'
 *   },
 * });
 */
export function useCreateBookMutation(baseOptions?: Apollo.MutationHookOptions<CreateBookMutation, CreateBookMutationVariables>) {
        return Apollo.useMutation<CreateBookMutation, CreateBookMutationVariables>(CreateBookDocument, baseOptions);
      }
export type CreateBookMutationHookResult = ReturnType<typeof useCreateBookMutation>;
export type CreateBookMutationResult = Apollo.MutationResult<CreateBookMutation>;
export type CreateBookMutationOptions = Apollo.BaseMutationOptions<CreateBookMutation, CreateBookMutationVariables>;
export const EditBookDocument = gql`
    mutation EditBook($id: ID!, $title: String!) {
  editBook(id: $id, title: $title) {
    book {
      ...BookDetails
    }
    errors {
      message
    }
  }
}
    ${BookDetailsFragmentDoc}`;
export type EditBookMutationFn = Apollo.MutationFunction<EditBookMutation, EditBookMutationVariables>;

/**
 * __useEditBookMutation__
 *
 * To run a mutation, you first call `useEditBookMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useEditBookMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [editBookMutation, { data, loading, error }] = useEditBookMutation({
 *   variables: {
 *      id: // value for 'id'
 *      title: // value for 'title'
 *   },
 * });
 */
export function useEditBookMutation(baseOptions?: Apollo.MutationHookOptions<EditBookMutation, EditBookMutationVariables>) {
        return Apollo.useMutation<EditBookMutation, EditBookMutationVariables>(EditBookDocument, baseOptions);
      }
export type EditBookMutationHookResult = ReturnType<typeof useEditBookMutation>;
export type EditBookMutationResult = Apollo.MutationResult<EditBookMutation>;
export type EditBookMutationOptions = Apollo.BaseMutationOptions<EditBookMutation, EditBookMutationVariables>;
export const BookDocument = gql`
    query Book($id: ID!) {
  book(id: $id) {
    ...BookDetails
  }
}
    ${BookDetailsFragmentDoc}`;

/**
 * __useBookQuery__
 *
 * To run a query within a React component, call `useBookQuery` and pass it any options that fit your needs.
 * When your component renders, `useBookQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useBookQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useBookQuery(baseOptions: Apollo.QueryHookOptions<BookQuery, BookQueryVariables>) {
        return Apollo.useQuery<BookQuery, BookQueryVariables>(BookDocument, baseOptions);
      }
export function useBookLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<BookQuery, BookQueryVariables>) {
          return Apollo.useLazyQuery<BookQuery, BookQueryVariables>(BookDocument, baseOptions);
        }
export type BookQueryHookResult = ReturnType<typeof useBookQuery>;
export type BookLazyQueryHookResult = ReturnType<typeof useBookLazyQuery>;
export type BookQueryResult = Apollo.QueryResult<BookQuery, BookQueryVariables>;
export const BooksDocument = gql`
    query Books {
  books {
    nodes {
      ...BookDetails
    }
  }
}
    ${BookDetailsFragmentDoc}`;

/**
 * __useBooksQuery__
 *
 * To run a query within a React component, call `useBooksQuery` and pass it any options that fit your needs.
 * When your component renders, `useBooksQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useBooksQuery({
 *   variables: {
 *   },
 * });
 */
export function useBooksQuery(baseOptions?: Apollo.QueryHookOptions<BooksQuery, BooksQueryVariables>) {
        return Apollo.useQuery<BooksQuery, BooksQueryVariables>(BooksDocument, baseOptions);
      }
export function useBooksLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<BooksQuery, BooksQueryVariables>) {
          return Apollo.useLazyQuery<BooksQuery, BooksQueryVariables>(BooksDocument, baseOptions);
        }
export type BooksQueryHookResult = ReturnType<typeof useBooksQuery>;
export type BooksLazyQueryHookResult = ReturnType<typeof useBooksLazyQuery>;
export type BooksQueryResult = Apollo.QueryResult<BooksQuery, BooksQueryVariables>;
export const SeriesListDocument = gql`
    query SeriesList {
  seriesList {
    nodes {
      id
      name
    }
  }
}
    `;

/**
 * __useSeriesListQuery__
 *
 * To run a query within a React component, call `useSeriesListQuery` and pass it any options that fit your needs.
 * When your component renders, `useSeriesListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSeriesListQuery({
 *   variables: {
 *   },
 * });
 */
export function useSeriesListQuery(baseOptions?: Apollo.QueryHookOptions<SeriesListQuery, SeriesListQueryVariables>) {
        return Apollo.useQuery<SeriesListQuery, SeriesListQueryVariables>(SeriesListDocument, baseOptions);
      }
export function useSeriesListLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SeriesListQuery, SeriesListQueryVariables>) {
          return Apollo.useLazyQuery<SeriesListQuery, SeriesListQueryVariables>(SeriesListDocument, baseOptions);
        }
export type SeriesListQueryHookResult = ReturnType<typeof useSeriesListQuery>;
export type SeriesListLazyQueryHookResult = ReturnType<typeof useSeriesListLazyQuery>;
export type SeriesListQueryResult = Apollo.QueryResult<SeriesListQuery, SeriesListQueryVariables>;