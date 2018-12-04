SERVER_ROOT = "./server_root/"

def prepare(request)
 if request.fetch(:path) == "/"
  answer_with(SERVER_ROOT + "index.html")
 else
  answer_with(SERVER_ROOT + request.fetch(:path))
 end
end

def answer_with(path)
  path=path.downcase
  format=path
  format=format.reverse
  if !File.directory?(path) && File.extname(path)!=""
     if File.exists?(path)
         Answer.new(code: 200, data:File.binread(path))
     else
         Answer.new(code: 404, data:"<html>\n<p> Error 404: File Not Found </p>\n</html>")
     end
  else
     Answer.new(code:400,data:"<html>\n<p> Error 400: Bad Request </p>\n</html>")
  end
end

class Answer
  def initialize(code:, data: "")
     @answer = "HTTP/1.1 #{code}\r\n" + "Content-Length: #{data.size}\r\n" + "\r\n" + "#{data}\r\n"
  end
  
  def code 
    return @answer[9..11]
  end

  def send(client)
   client.write(@answer)
  end
end

