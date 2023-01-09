# Technologies used in this project:

- React
- React Router
- Redux
- REST API
- Material UI
- Styled Components
- PWA

# Documentation

API
Base url: https://socially-api.fly.dev

1. POST /signup
Body:
login: String,
password: String

2. POST /signin
Body:
1. login: String,
2. password: String

3. GET /user 

4. PUT /user
Body:
1. name: String
2. image: File (jpg/png)

5. GET /user/:userId
Path parameters:
1. userId: ObjectId

6. PUT /user/follow/:userId
Path parameters:
1. userId: ObjectId

7. PUT /user/unfollow/:userId
Path parameters:
1. userId: ObjectId

8. GET /users

9. GET /feed

10. POST /feed
Body:
1. image: File (jpg/png)

PUT /feed/likes/:feedId
Path parameters:
1. feedId: ObjectId

12. GET /conversations

13. POST /conversations
Body:
1. interlocutorId: ObjectId

14. POST /conversations/:coversationId
Path parameters:
1. coversationId: ObjectId
Body:
1. authorId: ObjectId,
2. message: String


