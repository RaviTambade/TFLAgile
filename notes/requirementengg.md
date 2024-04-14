
## Requirement Engineering
 
Requirements engineering is a process of gathering and defining what services should be provided by the system.

It focuses on:
* <b>Feasibility study </b>: Assessing if the system is useful to the business.
* <b>Elicitation and analysis</b>: Discovering requirements.
* <b>Specification</b>: Converting these requirements into some standard format.
* <b>Validation</b>:Checking that the requirements define the system that the customer wants .


In practice, requirements engineering isn’t sequential process, it’s an iterative process in which activities are interleaved.

For example, you iterate first on the user requirements; elicitation, specification, and validation, and repeat the same steps for the system requirements.

<img src="/images/ReqEngg/1_RequirementEngg.webp" />

Early in the process, most effort will be spent on understanding high-level business and user requirements. Later in the process, more efforts will be spent on elicitation and understanding detailed system requirements.


### What Is Elicitation?

* Many of the technical or business requirements are not formally documented anywhere. Typically, the requirements exist only in the minds of Subject Matter Experts and stakeholders.

* Business analysts, therefore, have to draw out or elicit the requirements to gain access to relevant data. The methodology of elicitation must also be meticulous and logical.

* Elicitation is the cornerstone of any project, as it plays a critical role in bringing the requirements for a project to the table. Scientists and engineers agree that elicitation errors are one of the most common causes of project failures and abandonment that negatively impact the bottom line.

* To avoid the possibility of fatal mistakes hampering a project, adequate research and preparation are hence necessary for the elicitation process.

* Simply put, the goal of a requirements elicitation is to exhaustively identify the assumptions, risks, and needs involved in any project.


### What Is Requirement Elicitation in Business Analysis?

Requirements elicitation is one of the most complex, error-prone, communication-intensive, and challenging stages of the software development process, as it is pivotal in determining the budget, time estimate, and scope of a project. The clarity of requirements elicitation should be exceptional in order to deliver solutions that end-users find useful and satisfying.

Primary responsibility of a Business Analyst is to make the requirements elicitation process complete and clear. Incorporating requirements elicitation into business analysis practices enables Business Analysts to act as a bridge between developers, stakeholders, and end-users, thereby facilitating the seamless development of applications that are responsive to customer requirements.   

### Requirements Elicitation Techniques

Factors, such as the customer's profile and organizational structure, as well as the project type, should be considered by the business analysis team before adopting a requirements elicitation technique or a combination of techniques. There are many requirements elicitation techniques for obtaining critical information from Subject Matter Experts and stakeholders. The most popular ones are listed below.

#### Brainstorming
The requirements elicitation process begins with brainstorming. To facilitate focused and fruitful brainstorming sessions, business analysts should set up a team with representatives of all stakeholders for capturing new ideas. Suggestions coming out of brainstorming sessions should be properly documented in order to draft the plan of action.

#### Document Analysis
During this step of the requirements elicitation process, business analysts review existing documentation at hand, with the intent of identifying requirements for changes or improvements. Examples of document analysis sources include pre-existing project plans, system specifications, process documentation, market research dossiers, customer feedback, meeting minutes, and user manuals. Document analysis is performed before scheduling more in-depth requirements elicitation sessions or interviews with stakeholders.

#### Focus Group
In a focus group, relevant stakeholders provide feedback to refine processes, ideas, or solutions that emerged as an outcome of earlier elicitation activities, such as brainstorming and document analysis. The feedback and comments are recorded for use in later phases of requirements elicitation. 

#### Interface Analysis
At the core of interface, analysis is the idea of deconstructing how external and internal systems interact with each other and with end-users. This enables business analysts to identify potential requirements, uncover limitations, and determine interoperability issues between hardware and systems, which simplifies integration and testing workloads.

#### Interviews
A great way to extract critical data is via interviews. Business analysts engage in group or one-to-one interviews in an informal or formal setting to elicit project requirements through questions directed at Subject Matter Experts, stakeholders, and end-users. By exploring diverse opinions, business analysts gain in-depth knowledge of the requirements. 

#### Observation
Also referred to as job shadowing, observation is an excellent elicitation technique that helps understand requirements based on observations related to process flows and work environments of stakeholders. Practical insights into actual workflows serve as the basis for modifications and enhancements. The observation approach allows business analysts to elicit real-world data that other requirements elicitation methods cannot capture.

#### Prototyping
One of the most important phases of the requirements elicitation process, prototyping enables business owners and end-users to visualize realistic models of applications before they are finally developed. Prototyping helps generate early feedback, and it boosts stakeholder participation in requirements elicitation.

#### Workshops
For multi-stakeholder, complex projects, workshops are one of the most resource-efficient methods to elicit requirements. Intense, focused, and highly productive workshops have a key role to play in getting all parties onto the same page. Workshop events help Subject Matter Experts and Stakeholders to collaborate, resolve conflicts, and come to an agreement. 

#### Survey
When multiple Subject Matter Experts and stakeholders are involved in a project, business analysts conduct a survey for the elicitation of requirements. Everyone involved is given a questionnaire to fill out. Subsequently, the responses are analyzed to refine the requirements. Surveys are less expensive than other requirements elicitation techniques, easy to administer, and can produce both qualitative and quantitative results. 


### Feasibility Report

Before getting started with the software, you need to make a study to identify whether the system is worth implementing and if it can be implemented under the current budget, technical skills, schedule, and if it does contribute to the whole organization objectives or not, etc.

The input to the feasibility study is a set of preliminary business requirements, an outline description of the system, and how the system is intended to support business processes.

The source for information may be the managers of departments where the system will be used, software engineers who are familiar with the type of proposed system, technology experts, end-users of the system, etc. Normally, we should try and complete a feasibility study in two or three weeks.

The results of the feasibility study should be a report that recommends whether to go forward to the next process, or you won’t be able to implement the software at all.

### User and System Requirements
Typically, requirements are presented into two levels of detail; user and system requirements, where user need a high-level statement of the requirements, while system developers need a more detailed system specification. So, user and system requirements just refer to different levels of detail.

Having different levels of detail is useful because it communicates information about the system being developed for different types of readers.

<img src="/images/ReqEngg/2_System_User_Requirements.webp" />

#### User Requirements
It describes the services that the system should provide and the constraints under which it must operate. We don’t expect to see any level of detail, or what exactly the system will do, It’s more of generic requirements.

#### System Requirements
The system requirements mean a more detailed description of the system services and the operational constraints such as how the system will be used and development constraints such as the programming languages.

This level of detail is needed by those who are involved in the system development, like engineers, system architects, testers, etc.

## Software Requirements
We should try to understand what sort of requirements may arise in the requirement elicitation phase and what kinds of requirements are expected from the software system.

## Software Requirements Characteristics

Gathering software requirements is the foundation of the entire software development project. Hence they must be clear, correct and well-defined.
It covers the main functions that should be provided by the system. 
When expressed as user requirements, they are usually described in an abstract way.

However, more specific functional system requirements describe the system functions, its inputs, processing; how it’s going to react to a particular input, and what’s the expected output.

A complete Software Requirement Specifications must be:

	Clear
	Correct
	Consistent
	Coherent
	Comprehensible
	Modifiable
	Verifiable
	Prioritized
	Unambiguous
	Traceable
	Credible source


### Functional & Non-Functional Requirements
The software requirements are classified into functional requirements and non-functional requirements.

## Functional Requirements
Requirements, which are related to functional aspect of software fall into this category.

They define functions and functionality within and from the software system.

Examples -
- Search option given to user to search from various invoices.
- User should be able to mail any report to management.
- Users can be divided into groups and groups can be given separate rights.
- Should comply business rules and administrative functions.
- Software is developed keeping downward compatibility intact.

## Non-Functional Requirements

These are the constraints on the functions provided by the system.

The constraints, like how many processes the system can handle (performance), what are the (security) issues the system needs to take care of such as SQL injections …

The rate of failure (reliability), what are the languages and tools that will be used (development), what are rules you need to follow to ensure the system operates within the law of the organization (legislative).

Requirements, which are not related to functional aspect of software, fall into this category. They are implicit or expected characteristics of software, which users make assumption of.

Non-functional requirements include -

- Security
- Logging
- Storage
- Configuration
- Performance
- Cost
- Interoperability
- Flexibility
- Disaster recovery
- Accessibility

### Requirements are categorized logically as

- Must Have : Software cannot be said operational without them.
- Should have : Enhancing the functionality of software.
- Could have : Software can still properly function with these requirements.
- Wish list : These requirements do not map to any objectives of software.


<img src="/images/ReqEngg/03_MoSCoW.jpg" />



While developing software, ‘Must have’ must be implemented, ‘Should have’ is a matter of debate with stakeholders and negation, whereas ‘could have’ and ‘wish list’ can be kept for software updates.

<hr/>

## ECommerce Solution Business Requirement Specification (BRS)

### Purpose:
           Main purpose of the e-commerce application is to serve a simple and effective 
           interface for communication between buyers and sellers, to make payment for the
           purchased product, taking review for the endusers abut the product.

### Scope:
         E-commerce application is a interface between buyers and sellers which can be 
         used for business service.



### Business requirements for ECommerce:
             
* Information about the company: field of activity, product, customer profile, and competitive advantages.
* Target audience data. Who will visit the site: gender, age, region of residence, habits and hobbies. You also need to understand why people come to the site. For example, to buy goods, find out the cost of a design project, or read the news.
* Competitor analysis.
* Purpose of starting the project. For example, to enter a new market, become a monopoly in a niche, move your business online.
* Specific goal. For example, to provide delivery to Israel. Increase turnover (in figures). Accelerate the processing of orders through automating the managers’ routine.
* Planned metrics. Double the traffic in the first year of the project launch. Increase traffic conversion rate from 0.8% to 1.1%. Triple the number of vendors. Raise direct online sales by 30% in six months.
* User requirements. What task the user is supposed to solve on the site. If the user is the site visitor, it might be ‘to buy shampoo’. Arrange delivery to another country if the user is another company. Increase earnings if the user is a vendor. To have access to orders only when the user is a sales manager and so on.   
           
* Describe your product/service. What will be the product? What are its features? How will its price be calculated?
* User roles (administrator, seller, and buyer): what actions can each of them perform? Are there any dependencies/limitations?
* CJM (customer journey through the site): what will be the process of purchasing your product? What appropriate actions will the seller/administrator need to take?
* User registration: what data do users need to provide to register?
* What will the personal account (profile) of the customer look like for using the service? What actions can he or she perform?
* Will integration with third-party systems be required? What systems?

### Functional Requirements:

* Vendor is registered in the system: the system logs the vendor data as an input and displays it as an output on the page of all vendors
* Assigning a unique order number: The system processes orders for orders. An order is placed, the system assigns a number to it and outputs a list of orders
* Delivery calculation: the API system requests data from the delivery service and displays the calculated delivery cost on the order page
* Tax calculation: the system automatically calculates the tax for the selected US state using the functionality of the TaxJar service
* Mobile wallet support: in MENA (Middle East and North Africa) countries, the system accepts payments from a mobile phone

### Non-functional requirements

* UX/UI Design. Add an additional checkout button. When going to the product page, the user sees all variations of the product.
* Code:
Use of JS code
Use of a specific repository
Use of specific libraries.
* Setting up CI/CD processes. In simple words, CI / CD (Continuous Integration, Continuous Delivery) is a technology for automating testing and delivering code to stakeholders (developers, analysts, QA testers, and end users.).
* Add-on adaptation. You can choose ready-made solutions on the marketplace and use them to quickly close some functional requirements. For example, using the Google Analytics Enhanced Ecommerce add-on, you monitor purchase events on the site directly in the platform admin panel. Sometimes, one may require to modify an add-on to fit the needs of a particular project.
* Content. Add links to legal documents to product pages. Such a requirement is often voiced by the owners of German marketplaces.
* Site performance. The site should sustain a concurrent load of 1,000 people online.

<hr/>

## ECommerce Solution Software Requirement Specification (SRS)

### Document:
System Requirement Specification Document

#### Title:
System Reqruiement Spefication for Online Shopping Portal

### Team: 
Direct Customer,Indirect Customer, Architect,Business Analyst,	Quality Assurance Team, System Analyst

### Objective (Purpose):
The online shopping System for products Web Applictaion is intended to  provide complete solution for vendors, Consumers as well as internal users (Staff) through  a single Gateway using internet. It will enable vendors to setp up online shops, customers to browse through virtual shop and purchase products online without visiting the shop physically.

### Scope:
This System allows Shoppers to maintain thier products for adding or removing from catalog based on their availablity.
Customer will be able to  review orders history and may able to cancel order within 24 hours,order place.
The System  will be able to show live Bussion Operation statistics trends through Customized dashboard for stakeholders.

### Definitions:
	OSS: Online Shopping System
	QA:  Quality Assurance
	Portal: Peronalized Online Web Application
	MIS: Management Information System
	CRM: Customer Relation Managment
	BI:  Business Intelligence
	KPI:Key Perfomornace I
	Dashboard: Personalized information presented using  BI techniques such grid, score card, graph, KPI


### Functional Requirements:

* Any annonymous User will be able to view different products avaialble for sale. Any User will be able select product to view from categories avaialble.
* Registered shoppers will be able promote thier product for sale by adding  products to the product catalog maintained by System.
* Staff will be able to approve or reject request for adding or removing products from product catalog by shoppers.
*  Staff will be to track and maintain stock of products available for sale. Staff will be able to raise requests for product updatation from product inventory.

* Shopper will be able request to add new product to product catalog maintained by system.  
* Sales Team will be able to approve or eject request  raised by shopper for adding or removing products from product catalog.

* Shopper will be able to update  product details which have been already added to product catalog.
* Shoppers, sales team will be informed well in advaned about low stock  or out of stock of products in product catalog.
* Product listing will be provided based their category, sale, quantity, likes, recommendations.
* Consumer will be able to  add or remove products from shopping cart.
* System will maintain shopping cart for each consumer to maintain list of items selected by him/her. * Consumer will be able view all items from shopping cart. 
* Shopping Cart will present product details, number of items of product selected by consumer with price and total. 
* Consumer will be able procees for Order placement.
* Registered Customer will be able place an order with the help of Shopping cart maintained by system. * Registered Customer will be able to cancel placed order within 24 hours. Registered customer get orders history. 
* Registered customer can get details of order from orderes been placed. 	
* Sales team will be able get details of orders of a particular Customer. 
* Sales team  will be able to cancel , reject or approve orders been placed by consumer due to some policies of Business.
* BOD will be able to summary of orders been placed , rejected from Oroder PRocessing of System. 
*BOD will get Business insight by observing  daily operations  with the of getting orders information.
* Consumer will be provided options for payment such as through internet banking  or  UPI  or Online payment option.
* Consumer will asked to submit their payment related information.Consumer will be redirected to payment gateway for secure payment transaction.On successful payment processing using payment gateway system will notify consumer about transaction and order placement status.
* Customer will be able track order status. Customer will be able track deliver using unique dispatcher id presented.
* Customer will be able to  accept or return delivery based on quality received.
* Delivery person will be able get delivery details sothat he / she can deliver product to customer end.
* Delivery person will be able to change the status of product delivered.
* Delivery vendor will be ablt to  list all product delivery to be done by their staff.
* Sales team will be able to monitor shipment  done by their vendors.
* Sales team will be able to track product delivery for particular customer.
* Customer will able to submit feedback about product they recived.
* Customer will able to  get details about product orders placed.
* Customer will be cancel his placed order within 24 hours. 
* Customer will be able to update his/ her personal information. 
* Customer  will be to manage his profile maintained by system. 
*Customer will be able change his credentails if required. 
* Customer will be notified about order status, delivery status through  SMS, Email communication.
* Customer will get complete information about his orders, likes, comments, details through a dashboard.
* Customer will be able to update his payment related information.
* System will present dashboard for Customers, Vendors, Suppliers as well as BOD.
* Dashboard will provide information using graph, score cards, key perfomance indicators as well Grid data prestation.
* BOD will be informed about bussiness operations through reports.
* Customer will be able get thier purchase realted infomation using Customer Dashboard.
* Shopper will be able track thier product sale being done through online shopping portal/
	
### NonFunctional Requirement:

#### Security
Registered Customer will allowed to place an order.	
Each stakeholder will be to access system  through authentication process. Who are you ?
System will provide access to  the content , operations using Role based security (Authorization) (Permissions based on Role)
Using SSL in all transactions  which will be performed stakeholder. It would protect confidential information shared by system to stake holder of Shared by stakeholder to system.
System will automatically log of  all stakeholder after some time due to inactiveness.
System will block operations for inactive  stakeholder and would redirect for authentication.
System  will internally maintain secure communiction channel between Servers ( Web Servers, App Servers, databse Server)
Sensitive data will be always encrypted across communcation.
User proper firewall to protect servers from out side fishing, velnerable attacks.


#### Reliability
The system will backup business data on regular basis and recover in short time duration to keep system operational
Continous updates are matained , continous Adminstration is done to keep system operational.
During peak hours system will maintain same user experaince by managing load balacning .

#### Availability
uptime:   24* 7  available  99.999%
	
#### Maintainability:
A Commercial database software will be used to maintain System data Persistence.
A readymade Web Server will be installed to host online shopping portal (Web Site) to management server capabilities.
IT operations team will easily monitor and configure System using Adminstrative tools provided by Servers.
Separate enviornment will be maintained for system for isolation in  production, testing, and development.

#### Portablility:
PDA: Portable Device Application
System will provide portable User Interface ( HTML, CSS, JS) through  users will be able to access online shopping portal.
System can be deployed to single server, multi server, to any OS, Cloud (Azure or AWS or GCP)

#### Accessibility:
only registered customer will be able to place an order after authentication.
Sales team can reject or approve  orders, shopper requests  based on role  provided.
BOD team will be able to view daily, weekly, monthly, annual businss Growth throgh customized dashboard.
Shoppers will be able to see their product sale graph

#### Durability:
System will retain customer  shopping cart for 15 minutes  even though customer loose internet connection and join again.
System will maintain wishlist for customer . customer  will be able to add products from wishlist  and add to shopping cart whenever needed.
System will implement backup and recovery for retaining stake holders data, bussiness operation data and business data over time.

#### Efficiency:
on Festival season, maximum number of users  will place order, view products  with same response time.
System will be able to manage all transactions with isolation.

#### Modularity:
System will designed and developed using reusable, independent or dependent business senarios in the form of modules.
These modules will be loosely coupled and highly cohesive.
System will contain CRM , Inventory , shopping cart, order processing, payment processing, Delivery module, membership and Roles managment  modules.
	
#### Scalability:
System will be able  to  provide  consistent user exeprience to stake holder as well as vistors irrespective of load.

#### Safety:	
online shopping portal will be secure from malicious attack, fishing.
online shoppping portal functionalilites are protected from outside with prper firewall configuration.
online shopping portal will be always kept updated with latest anit virus software.
Bussiness data will be backed up periodically to ensure safty of data using increamental back up strategy.
Role based security will be applied for Application data and operations accessibility.
