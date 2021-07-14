interface IOAuthError {
  error: string
  description: string
  code: number
}

class OAuthError extends Error {
  code = 500
  error = {
    error: 'server_error',
    error_description: 'Internal server error'
  }

  constructor(error: IOAuthError) {
    super(error.description)

    this.error.error = this.error.error || error.error

    this.error.error_description =
      this.error.error_description || error.description

    this.code = this.code || error.code

    Error.captureStackTrace(this, OAuthError)
  }
}
