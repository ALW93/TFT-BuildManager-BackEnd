# **Feature List**

## **Base Features**

- **Viewing Meta Builds**
  - View Builds at the top of the Meta
  - Browse and Filter Builds by User, Rating, or Trait.
- **Creating Builds & Interacting** (CRUD)
  - Generate your own builds.
  - Ability to Edit, and Delete Builds.
  - Upvote and Comment on other Builds from the community.
- **Saving Builds to Bookmarks**
  - Save builds from the site into your own bookmarks folder.
- **User Account Registration** (UAUTH)
  - Create an Account.

## **Future Features**

- Login with Gmail.
- Connect your Riot Account to see Match History.
- **Functionality Specific**
  - Drag and Drop Feature for Team Positioning.
  - Find Build via specific Chosen.
  - Find Build via specific Character or Item Set.
- ..and much more!

## **API Endpoints**

| Table       | Method | Endpoint         | Retrieval                                  |
| ----------- | ------ | ---------------- | ------------------------------------------ |
| **User**    | GET    | /user/:id        | Retrieve specific User                     |
|             | GET    | /user/:id/builds | Retrieve builds from specific User         |
|             | POST   | /user            | Creates a New User                         |
| **Build**   | POST   | /builds          | Creates a New Build                        |
|             | GET    | /builds/:id      | Retrieves a specific build                 |
|             | PUT    | /builds/:id      | Edits a specific build                     |
|             | DELETE | /builds/:id      | Deletes a specific build                   |
| **Comment** | POST   | /builds/:id      | Creates a New Comment for a specific Build |
|             | GET    | /comments        | Retrieves all comments in the DB           |
|             | PUT    | /comments        | Edits a specific comment                   |
|             | DELETE | /comments        | Deletes a specific comment                 |

---
