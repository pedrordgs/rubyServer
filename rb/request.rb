def parse(request)
  method, path = request.lines[0].split
  {
  path: path,
  method: method,
  }
end
