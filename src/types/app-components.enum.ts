export const AppComponent = {
  RestApplication: Symbol.for('RestApplication'),
  LoggerInterface: Symbol.for('LoggerInterface'),
  ConfigInterface: Symbol.for('ConfigInterface'),
  DatabaseClientInterface: Symbol.for('DatabaseClientInterface'),
  UserServiceInterface: Symbol.for('UserServiceInterface'),
  UserModel: Symbol.for('UserModel'),
  FilmServiceInterface: Symbol.for('FilmServiceInterface'),
  FilmModel: Symbol.for('FilmModel'),
  CommentServiceInterface: Symbol.for('CommentServiceInterface'),
  CommentModel: Symbol.for('CommentModel'),
  FilmController: Symbol.for('FilmController'),
  ExceptionFilterInterface: Symbol.for('ExceptionFilterInterface'),
  UserController: Symbol.for('UserController'),
  CommentController: Symbol.for('CommentController'),
  WatchlistServiceInterface: Symbol.for('WatchlistServiceInterface'),
} as const;
