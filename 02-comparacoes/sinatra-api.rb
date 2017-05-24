require 'sinatra'
require "sinatra/json"

get '/' do
    json :hello => 'world'
end