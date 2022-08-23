Differences with tutorial:

- body-parser is deprecated, just use `app.use(express.json())` [source](https://stackoverflow.com/questions/24330014/bodyparser-is-deprecated-express-4); note, it _does_ matter that you declare this before the Posts middlelayer
- MLab redirects to MongoDb's website but the setup is much the same
