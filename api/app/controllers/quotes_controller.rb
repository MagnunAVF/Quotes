class QuotesController < ApplicationController
  def index
    quote = Faker::Hobbit.quote

    quote_hash = { 'quote': quote }
    quote_json = quote_hash.to_json

    render json: quote_json
  end
end
