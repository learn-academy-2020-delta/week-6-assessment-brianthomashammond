# ASSESSMENT 6: Interview Practice Questions
Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. In a model called Animal that has_many Sightings, what is the name of the foreign key? Would the foreign key be part of the Animal model or the Sightings model?

  Your answer: The foreign key should be named animal_id. It would be part of the Sightings model. 

  Researched answer: Pretty sure this right.



2. Which RESTful routes must always be passed params? Why?

  Your answer: I'm unsure and would need too look that up. My best guesses are as follows: I believe GET would need params to display a specific object but might not need them to display all objects. POST would need them if the object created had required fields. PUT would need them to know which object to replace. PATCH would need them to know which object to update. DELETE would them to know which object to delete.  

  Researched answer: The routes that must always have params are show, edit, update, and destroy.



3. Name three rails generator commands. What is created by each?

  Your answer: rails generate model creates a table to which objects can be added. rails generate resource creates a table, a controller, and all routes between the two. rails generate migration creates a file that can be used to alter the database's schema. 

  Researched answer: rails generate model and rails generate resource need column name and datatype information. rails generate migration needs a descriptive filename. There is also rails generate controller file_name which creates  app/controllers/file_name_controller.rb, app/views/file_name, app/helpers/file_name_helper.rb, and app/assets/stylesheets/file_name.css.   



4. Consider the Rails routes below. What is the name of the controller method that would be called by each route? What action would each of the controller methods perform?

method="GET"    /users  index Displays a list of all users.

method="GET"    /users/1  show Displays user 1.

method="GET"    /users/new  new Displays a form for creating a new user.

method="GET"    /users/edit/1 edit Displays a form to edit user 1.

method="POST"   /users/   create Creates a new user. 

method="PUT"    /users/1  update Updates user 1.    

method="DELETE" /users/1  destroy Deletes user 1.



5. As a developer, you want to make an application that will help you manage your to do list. For the MVP, you want to create just the user's view. Create 10 user stories that will help you get your application started. 

1. The user can see the title "TO DO LIST".
2. The user can enter a task to be done into an input field.
3. The user can see that new tasks are displayed on the screen
4. The user can enter subsequent tasks.
5. The user can give tasks a due date which is displayed.
6. The user can give tasks a priority which changes the color of that task's background. 
7. The user can see that tasks have an empty circle indicating that the task is undone.
8. The user can fill in the circle next to undone tasks when they are completed.
9. The user can see that completed tasks' names are strickenthrough.
10. The user can see that completed tasks' backgrounds no longer display priority.
11. The user can filter the task list to show only undone tasks.
12. The user can filter the task list to show only completed tasks.
13. The user can delete completed tasks.