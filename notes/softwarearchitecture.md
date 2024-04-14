
# Software  Architecture

<img src="/images/Modeling/SoftwareArchitecture/0_SoftwareArchitectureJourney.webp" />
The software architecture of a system represents the design decisions related to overall system structure and behavior. Architecture helps stakeholders understand and analyze how the system will achieve essential qualities such as modifiability, availability, and security.

Business teams are separated teams as per departments; Product, Sale, Payment. All teams wants to add new features immediately to compete the market. So Business teams wants to agile, innovate and experiment with new features as soon as possible, in order to compete the market, they would like to deploy features immediately, not waiting for deployment dates.

Also Business teams would like to be flexible scale for market peek times They want to provide best customer experience at blackfriday sales that means it requires to handle and process millions of request in a acceptable latency with better performance.

Software architecture is, simply, the organization of a system. This organization includes all components, how they interact with each other, the environment in which they operate, and the principles used to design the software. In many cases, it can also include the evolution of the software into the future.

- Monolithic Architecture 
- Layered (n-tier) Architecture.
- Microservices Architecture.

## Monolithic Architecture 
<img src="/images/Modeling/SoftwareArchitecture/3_ProblemsWithOnlineApps.webp" />

A monolithic architecture is a traditional model of a software program, which is built as a unified unit that is self-contained and independent from other applications. The word “monolith” is often attributed to something large and glacial, which isn't far from the truth of a monolith architecture for software design.

A monolithic architecture is a singular, large computing network with one code base that couples all of the business concerns together.  To make a change to this sort of application requires updating the entire stack by accessing the code base and building and deploying an updated version of the service-side interface. This makes updates restrictive and time-consuming. 

Business teams are separated teams as per departments; Product, Sale, Payment. All teams wants to add new features immediately to compete the market. So Business teams wants to agile, innovate and experiment with new features as soon as possible, in order to compete the market, they would like to deploy features immediately, not waiting for deployment dates.

Also Business teams would like to be flexible scale for market peek times They want to provide best customer experience at blackfriday sales that means it requires to handle and process millions of request in a acceptable latency with better performance.

## Multi Layered (n-tier) Architecture

<img src="/images/Modeling/SoftwareArchitecture/03_LayeredArchitecture.png" />
Layered architectures are said to be the most common and widely used architectural framework in software development. It is also known as an n-tier architecture and describes an architectural pattern composed of several separate horizontal layers that function together as a single unit of software

* <b>User interaction layer</b>: This is the layer that interacts with users through screens, forms, menus, reports, etc. It is the most visible layer of the application. It defines how the application looks.  

*<b> Functionality layer</b>: This is the layer that presents the functions, methods, and procedures of the system based on the business rules layer. It determines how the pull-down menus work, how the buttons work, and how the system navigates through screens.

* <b>Business rules layer</b>: This layer contains rules that determine the behavior of the whole application, such as, “If an invoice is printed, then send an email to the customer, select all items sold, and decrease their stock in the stock management module.” 

* <b>Application core layer</b>: This server contains the main programs, code definitions, and basic functions of the application. Programmers work in this layer most of the time. 

*<b>Database layer</b>: This layer contains the tables, indexes, and data managed by the application. Searches and insert/delete/update operations are executed here. 


## Microservices architecture

<img src="/images/Modeling/SoftwareArchitecture/4_MicroServicesArchiteture.webp" />

Microservices are small, independent, and loosely coupled services. So Microservices are small business services that can work together and can be deployed independently and autonomously. Each service is a separate codebase, which can be managed by a small development team. A single small team of developers can write and maintain a particular microservice.

For many years now we have been building systems and getting better at it. Several technologies, architectural patterns, and best practices have emerged over those years. Microservices is one of those architectural patterns which has emerged from the world of domain-driven design, continuous delivery, platform and infrastructure automation, scalable systems, polyglot programming and persistence.

### Key Benefits of a Microservices Architecture
As the constituent services are small, they can be built by one or more small teams from the beginning separated by service boundaries which make it easier to scale up the development effort if need be.

Once developed, these services can also be deployed independently of each other and hence its easy to identify hot services and scale them independent of whole application. Microservices also offer improved fault isolation whereby in the case of an error in one service the whole application doesn’t necessarily stop functioning. When the error is fixed, it can be deployed only for the respective service instead of redeploying an entire application.

Another advantage which a microservices architecture brings to the table is making it easier to choose the technology stack (programming languages, databases, etc.) which is best suited for the required functionality (service) instead of being required to take a more standardized, one-size-fits-all approach.

<img src="/images/Modeling/SoftwareArchitecture/2_MicroServices.webp" />