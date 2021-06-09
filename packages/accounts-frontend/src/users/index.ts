// server.post<{ Body: { email: string; username: string; password: string } }>(
//   '/api/users',
//   async (request, reply) => {
//     const message = new User()
//     const { email, username, password } = request.body

//     message.setEmail(email)
//     message.setUsername(username)
//     message.setPassword(password)

//     const user = await createUser(message)

//     return user.toObject()
//   }
// )

// server.post<{ Body: { email: string; password: string } }>(
//   '/login',
//   async (request, reply) => {
//     try {
//       const message = new User()
//       const { email, password } = request.body

//       message.setEmail(email)

//       const user = await getUser(message)

//       if (password !== user.getPassword()) {
//         reply.redirect(401, '/login')
//       }

//       request.session.authenticated = true
//       reply.redirect('/')
//     } catch (error) {
//       reply.redirect(401, '/login')
//     }
//   }
// )

// server.get('/logout', (request, reply) => {
//   if (request.session.authenticated) {
//     request.destroySession(err => {
//       if (err) {
//         reply.status(500)
//         reply.send('Internal Server Error')
//       } else {
//         reply.redirect('/')
//       }
//     })
//   } else {
//     reply.redirect('/')
//   }
// })

// server.get('/authorize', (request, reply) => {})
// server.post('/token', (request, reply) => {})
