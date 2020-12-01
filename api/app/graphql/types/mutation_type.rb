module Types
  class MutationType < Types::BaseObject
    field :create_publisher, mutation: Mutations::CreatePublisher
    field :create_series, mutation: Mutations::CreateSeries
    field :create_book, mutation: Mutations::CreateBook
  end
end
