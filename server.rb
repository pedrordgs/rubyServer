require 'socket'
require_relative 'rb/request'
require_relative 'rb/answer'

server = TCPServer.new("localhost",8080)

loop{
  Thread.start(server.accept) do |client|
   request=client.gets
   request=parse(request)
   answer=prepare(request)
   puts "#{client.peeraddr[3]} #{request.fetch(:path)} - #{answer.code}"
   answer.send(client)
   client.close
   end
}

