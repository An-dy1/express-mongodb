Differences with tutorial:

- body-parser is deprecated, just use `app.use(express.json())` [source](https://stackoverflow.com/questions/24330014/bodyparser-is-deprecated-express-4); note, it _does_ matter that you declare this before the Posts middlelayer
- MLab redirects to MongoDb's website but the setup is much the same
- if you want to specify which database on your cluster to write to, you can modify your connection string following [this comment on StackOverflow](https://stackoverflow.com/questions/59098595/set-database-and-collection-using-mongoose#comment104434786_59099513); it seems like there must be a better way to do this, since the same app may want to connect to multiple databases - seems odd you'd need different connection strings for all of them, rather than just setting it as a configuration somewhere
- if you want to specify which collection in that database to save to, [here is the Mongoose documentation](https://mongoosejs.com/docs/guide.html#collection)
