The Front End Application

Minimum Requirements: 
*A user can see all the cards from all users (or all the public/published cards if you have a way to do this)
*A user can see all the cards they themselves have created
*A user can see all the cards from a user they follow
*A user can design and create a new card
*A user can update (edit) a card they've created
*A user can delete a card they've created
*A user can follow another user
*A user can unfollow another user
*A user can see a list of users they follow


Cards and Customizable Options:
Once a user is a member of your site, they can create "cards." You may choose to call these something else -- creative interpretation is always welcome! Think of a card as a visual message with customizable text, styling and images. As a group, you should decide on the customizable options, but there should be at least three.

Some examples of customizable options you can offer users are:

*Card color (from a predefined list)
*Border style
*Font (from a predefined list; choose a set of fonts to bring in from Google Fonts)
*Text alignment
*An image to include (Note: uploading images to an API will require significantly more work. An recommended alternative is to use the Unsplash API on the front-end and store the image location (url) on the back-end.)
*An outer message and inner message -- the inner message would be shown with some sort of transition on click, like the front and interior of a greeting card



"Pages"

Users should be able to see three screens of cards:

*A screen of cards from users they follow
*A screen of their own cards
*A screen of cards from all users


Each collection should show a reasonable number of cards, sorted with the newest first, and allow the user to click to see more.
If you would prefer to implement an infinite scroll, go for it! The point is that the API should paginate results.

Front-end spec suggestions
You can design your front-end to have whatever components you think are necessary. A suggested layout is below. A few notes: Route is from react-router, nesting shows what children each component might have, and several components are re-used under different routes. This is a non-exhaustive list and created from sketching on paper.




Authenticating from the front-end
Your back-end dev(s) will show you how authentication works with Django REST Framework. What you will need to do is get an authentication token from the back-end (usually via POST to a URL like /api/auth/token/login/) and store that token in localStorage for use on later requests.

Design
As for how all of this should look, that is up to you! We are not providing wireframes, but your group should sit down and make decisions about what pages will be needed and what they will look like before you start writing code.

?????? Make sure your UI has sensible options for your user. For example: A user who is not the creator of a card should not see buttons or links to edit a card. If a user is logged in, they should no longer see options to log in, but they should see an option to log out. The flow through your application should make sense according to what a user would reasonably expect.

Waiting for the API to be working
During development of the front-end, you will want to be able to make requests before the API is complete. You can handle this in a few ways.

One way is to make functions or methods for all your API calls, but instead of having them actually make the calls at first, have them set the data you are expecting without actually making an API call. Another way is to use the provided exported mock API specification for Mockoon, a tool that will run a mock server for you. You will need to download Mockoon and open the file provided in this repo (in Mockoon, select "Open environment" from the File menu). Here is documentation on getting started with Mockoon. Here is documentation on making API calls from your React app to Mockoon.

If you use Mockoon, you may want to be able to switch which server you use based on the environment your code is running in. To learn about how to access your data based on environment, read this article on create-react-app-environments.

You can read more about approaches to building your front-end before the API is done in this dev.to article.

You can work with your backend dev(s) to get the back-end API running on your local machine, but you do not have to.