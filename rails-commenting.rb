# ASSESSMENT 6: Rails Commenting Challenge

# Add comments to the Rails Blog Post Challenge
# Explain the purpose and functionality of the code directly below the 10 comment tags


# FILE: app/controller/blog_posts_controller.rb

# 1)This names the model (BlogPost) that will be affected by this controller.
class BlogPostsController < ApplicationController
  def index
    # 2)This is defining the instance variable posts to display all instances of the BlogPost class.
    @posts = BlogPost.all
  end

  def show
    # 3)This is defining the instance variable post to display the BlogPost identified by the specified id parameter.
    @post = BlogPost.find(params[:id])
  end

  # 4)This is the Rails convention for a route to display a form to the user to create a new post.
  def new
    @post = Post.new
  end

  def create
    # 5)This is defining the instance variable post to create a new BlogPost in the database. The following if statement directs the user to the newly created blog post or to the form for creating a new post depending on validity of the current action.
    @post = BlogPost.create(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    else
      redirect_to new_blog_post_path
    end
  end

  def edit
    @post = BlogPost.find(params[:id])
  end

  def update
    @post = BlogPost.find(params[:id])
    # 6)The following code updates the instance variable declared in the previous line if the update request references an extant BlogPost and wishes to update its title or content. Otherwise the user is taken to the form used to update a BlogPost.
    @post.update(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    else
      redirect_to edit_blog_post_path
    end
  end

  def destroy
    @post = BlogPost.find(params[:id])
    if @post.destroy
      redirect_to blog_posts_path
    else
      # 7)If the BlogPost is not destroyed, the user is taken to it. To mock them, I guess.
      redirect_to blog_post_path(@post)
    end
  end

  # 8)The private keyword ensures that the methods contained therein cannot be accessed outside of this controller.
  private
  def blog_post_params
    # 9)This code states that any method that calls blog_post_params must reference a BlogPost and can reference that BlogPost's title and/or content. 
    params.require(:blog_post).permit(:title, :content)
  end

end


# FILE: app/models/blog_post.rb

class BlogPost < ApplicationRecord
  # 10)This code forms an association between the Parent class BlogPost and the Child class Comment.
  has_many :comments
end
