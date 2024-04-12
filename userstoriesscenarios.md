# Examples of User Stories with Acceptance Scenarios
<hr/>
<p><b>As a website user I want to able to search on the webpage So that I can find necessary information</b> </p>
Scenario:

	* Given that I’m in a role of registered or guest user
	* When I open the “Products” page
	* Then the system shows me the list of all products
	* And the system shows the “Search” section in the right top corner of the screen
	* When I fill in the “Search” field with the name of existing item in the product list
	  And I click the “Apply” button OR press the Enter key on keyboard
	* Then the system shows products in the Search Results section with product names matching entered product name
	*And the system shows the number of search results in the top of the Search Results section”



<p><b>As a website user I want to able to submit feedback So that the website owners can consider my opinion or concern during future website updates </b></p>
Scenario: 

	User submits feedback form with the valid data
	* “Given I’m in a role of logged-in or guest user
	* When I open the Feedback page
	* Then the system shows me the Submit Feedback form containing “Email”,“Name” and “Comment” fields which are required
	* When I fill in the “Email” field with a valid email address
	* And I fill in the “Name” field with my name
	* And I fill in the “Comment” field with my comment
	* And I click the “Submit Feedback” button
	* Then the system submits my feedback
	* And the system shows the “You’ve successfully submitted your feedback” flash message
	* And the system clears the fields of the Submit Feedback form”

<p> <b>As a signed-in user I want to able to comment on a blog post So that I can get feedback on issues</b> </p>
Acceptance Scenario:

	*  Given I’m in a role of signed-in user
	*  When I open the page with a specific blog post
	*  Then the system shows the “Comments” section below the blog post with the list of comments added by other users
	*  And the system shows the “Add a Comment” field in the top of the “Comments” section
	*  When I fill in the “Add a Comment” field with my comment
	*  And I click the “Submit” button
	*  Then the system saves my comment
	*  And the system shows my comment in the top of the “Comments” section
	*  And the system shows my username and profile picture on the left side from my comment
	*  And the system shows “Remove” and “Edit” icons opposite my comment



<p><b>As a project manager, I want to review workflow management software so I can choose a new platform for my team. </b></p>
Acceptance criteria:

	*  Ensure that user reviews and testimonials are published on our product site.
	* Verify that user reviews for our product are available on third-party forums.
	* Proactively acquire new user reviews by sending feedback requests to current users and past clients.


<p><b>As a credit card holder, I want to view my statement (or account) balance, so that I can pay the balance due.</b> </p>
Acceptance criteria:

	* Display statement balance upon authentication. Say for example $1560
	* Display total balance. For example $3560. Here the balance due from the current period is $2560 and past balance due is $2000.
	* Show Minimum payment due. For example $140
	* Show Payment due date. For example May 16th of the current month
	* Show error message if service not responding or timeout. For example ‘Sorry, something went wrong with the service. Please try again.’


<p> <b>As a teacher, I want to generate assessment report, so I can evaluate student performance. </b></p>
Acceptance criteria:

	* Show a student’s current assessment score.
	* Display past assessment score of the student.
	* Provide an option to Print / Save / Share. (By the way, this could be split as a separate user story by itself).
	* Display error message if service not responding. (If a team chooses to add the Error Message as their definition of done for all stories – 		where ever applicable, it could be omitted from the acceptance criteria).


<p>As a User I want to view a list of products so I can select some to purchase </p>
Accepted Criteria:

	* See a thumbnail image for each product
	* Click to view details for product
	* Add to cart from detail page
	* Search for a product
	* View products by category


### EPIC-- UserStory- Scenario


Lis of Epic Esmaples:

* As a project manager, I want a robust work management platform that empowers my team to take advantage of the Agile methodology.
* As a product subscriber, I want to be able to cancel my monthly membership using self-service tools.
* As a product subscriber, I want to be able to cancel my monthly membership using self-service tools.


<b>As an Acquisition Gateway User, I need to access the Acquisition ordering platform behind a secure login so that I can purchase products.</b>


<p>As an Acquisition Gateway User, I need to select an Auction product in the Acquisition ordering platform so that I can bid on it. </p>

Accepted Criteria:

Ensure the Acquisition Gateway User is able to:
	* log in to Acquisition Gateway 
	* navigate to the Auction page 
	* able to select a product(s) to bid on


<p>As an Acquisition Gateway User, I need to review my previous bids in the Acquisition ordering platform so that I can remove expired bids.</p>

Accepted Criteria:
Ensure the Acquisition Gateway User is able to:
	* log in to Acquisition Gateway
	* navigate to a page to review items previously bid upon
	* select one, or multiple, expired bids
	* remove expired bids




<b>As a Marketing Lead, I want to have a content management system so that I can manage and provide quality content and experience to my readers</b>

<b>User Story: </b>
<p>As a Content Owner, I want to be able to create product content so that I can provide information and market to customers.</p>

Accepted Criteria:
Ensure the Content Owner is able to:
	log in to the content management system
	create a page of content
	edit / update an existing page of content
	save changes
	assign content page to Editor for review


As an Editor, I want to review content before it is published so that I can assure it is optimized with correct grammar and tone.
Accepted Criteria:
ensure the Editor is able to:
	log in to the content management system
	view existing content page
	edit / update page of content
	add markup comments- save changes
	save changes
	re-assign to Content Owner to make updates
	schedule content publish


