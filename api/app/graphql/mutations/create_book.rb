module Mutations
  class CreateBook < Mutations::BaseMutation
    graphql_name 'CreateBook'

    field :book, Types::BookType, null: true
    field :errors, [Types::UserError], null: false

    argument :title, String, required: true

    def resolve(**args)
      book = Book.new(title: args[:title])
      if book.save
        {
          book: book,
          errors: []
        }
      else
        # Convert Rails model errors into GraphQL-ready error hashes
        user_errors = book.errors.map do |error|
          # This is the GraphQL argument which corresponds to the validation error:
          # path = ["attributes", error.attribute.to_s.camelize(:lower)]
          {
            # path: path,
            message: error.message
          }
        end
        {
          book: book,
          errors: user_errors
        }
      end
    end
  end
end
