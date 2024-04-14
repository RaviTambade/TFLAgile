# Docker

Docker is a popular platform for developing, shipping, and running applications in containers. It provides a set of tools and technologies that streamline the process of building, deploying, and managing containerized applications, making it easier for developers and DevOps teams to work collaboratively and efficiently.

### Key Components of Docker:

1. **Docker Engine**: Docker Engine is the core component of Docker that enables container management. It consists of a daemon process called `dockerd`, which runs on the host system, and a command-line interface (CLI) tool called `docker`, which allows users to interact with Docker.

2. **Docker Image**: A Docker image is a lightweight, standalone, and executable package that contains everything needed to run an application, including its code, runtime, system libraries, and dependencies. Images are built from a Dockerfile and can be layered with additional components.

3. **Docker Container**: A Docker container is a runtime instance of a Docker image. It encapsulates an application and its dependencies into an isolated environment, including its own filesystem, network, and process namespace. Containers can be started, stopped, and managed using Docker commands.

4. **Docker Registry**: A Docker registry is a repository for storing and distributing Docker images. Docker Hub is the official public registry maintained by Docker, while Docker Enterprise Registry and other third-party registries provide private registry options for organizations.

### Key Features and Benefits of Docker:

1. **Portability**: Docker containers are highly portable and can run consistently across different computing environments, including development, testing, staging, and production. This portability ensures that applications behave consistently regardless of the underlying infrastructure.

2. **Isolation**: Docker containers provide process-level isolation, meaning each container runs in its own isolated environment with its own filesystem, network, and process namespace. This isolation ensures that changes to one application do not affect others, leading to greater reliability and stability.

3. **Resource Efficiency**: Docker containers are lightweight and share the host operating system's kernel, making them more resource-efficient compared to traditional virtual machines (VMs). Multiple containers can run on the same host without significant overhead, leading to better resource utilization and cost savings.

4. **Scalability**: Docker containers are designed to be scalable and can be dynamically provisioned and scaled up or down to meet changing workload demands. Container orchestrators, such as Kubernetes, automate the deployment, scaling, and management of containers across clusters of hosts, enabling organizations to achieve greater agility and efficiency.

5. **DevOps Enablement**: Docker aligns with DevOps principles by facilitating continuous integration, continuous delivery, and infrastructure as code practices. Containers enable faster, more frequent deployments and streamline the software development lifecycle, empowering organizations to innovate and deliver value to customers more rapidly.

Overall, Docker has revolutionized the way applications are developed, deployed, and managed, enabling organizations to build, ship, and run applications more efficiently, reliably, and at scale. By leveraging Docker, developers and DevOps teams can accelerate software delivery, improve collaboration, and drive innovation in their software development and deployment processes.

## Creating DockerImages using Dockerfile

Creating Docker images using a Dockerfile is a common practice in Docker-based application development. A Dockerfile is a text file that contains a set of instructions for building a Docker image. These instructions specify the steps needed to assemble the image, including installing dependencies, copying files, and configuring the environment.

Here's a basic example of a Dockerfile for a simple Node.js application:

```Dockerfile
# Use an official Node.js runtime as the base image
FROM node:14

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Expose the port the app runs on
EXPOSE 3000

# Define the command to run the application
CMD ["node", "app.js"]
```

Let's break down each instruction in the Dockerfile:

1. `FROM node:14`: Specifies the base image to use for the Docker image. In this case, we're using the official Node.js Docker image with version 14 as the base image.

2. `WORKDIR /usr/src/app`: Sets the working directory inside the container where subsequent commands will be executed.

3. `COPY package*.json ./`: Copies the `package.json` and `package-lock.json` files from the host machine to the working directory in the container.

4. `RUN npm install`: Runs the `npm install` command inside the container to install the dependencies specified in `package.json`.

5. `COPY . .`: Copies the rest of the application code from the host machine to the working directory in the container.

6. `EXPOSE 3000`: Informs Docker that the application inside the container will listen on port 3000.

7. `CMD ["node", "app.js"]`: Defines the default command to run when the container starts. In this case, it runs the `node app.js` command to start the Node.js application.

To build a Docker image from the Dockerfile, navigate to the directory containing the Dockerfile and run the following command:

```bash
docker build -t my-node-app .
```

This command builds a Docker image with the tag `my-node-app` based on the Dockerfile in the current directory (`.`). After building the image, you can run it as a container using the `docker run` command:

```bash
docker run -p 3000:3000 my-node-app
```

This command runs the Docker container based on the `my-node-app` image and forwards port 3000 from the container to port 3000 on the host machine, allowing you to access the Node.js application running inside the container.

## Docker Container Life Cycle
The life cycle of a Docker container encompasses several stages, from its creation to its eventual termination. Here's an overview of the key stages in the life cycle of a Docker container:

### 1. Creation:

1. **Building from Image**: Containers are typically created from Docker images using the `docker run` command. When you run a Docker image, Docker creates a new container instance based on that image.

2. **Container Configuration**: During creation, you can specify various configuration options for the container, such as port mappings, environment variables, volume mounts, and resource constraints.

3. **Container Initialization**: If the Docker image includes an entry point or command, Docker executes it when the container starts. This could be a shell script, an application binary, or any other executable specified in the Dockerfile.

### 2. Running:

1. **Container Execution**: Once created, the container is in a running state, and its entry point or command is executed. The application or service inside the container is now running and ready to serve requests.

2. **Resource Utilization**: While running, the container consumes system resources such as CPU, memory, disk space, and network bandwidth as needed by the application it hosts.

### 3. Monitoring and Management:

1. **Container Inspection**: You can inspect the state of running containers using the `docker inspect` command. This provides detailed information about the container, including its configuration, networking, and resource usage.

2. **Logs and Events**: Docker provides commands (`docker logs`, `docker events`) to view the logs and events generated by running containers. These logs can be useful for troubleshooting issues and monitoring container activity.

### 4. Interaction:

1. **Accessing the Container**: You can interact with running containers using various Docker commands, such as `docker exec` to execute commands inside the container or `docker attach` to attach to the container's standard input/output.

2. **Networking**: Running containers can communicate with other containers and external services using Docker's networking capabilities, such as bridge networks, overlay networks, and host networks.

### 5. Termination:

1. **Graceful Shutdown**: Containers can be stopped gracefully using the `docker stop` command, which sends a termination signal (SIGTERM) to the container process. This allows the application inside the container to shut down gracefully and perform any cleanup tasks.

2. **Forceful Termination**: If needed, containers can be forcefully terminated using the `docker kill` command, which sends a SIGKILL signal to the container process. This immediately stops the container without allowing it to perform any cleanup tasks.

### 6. Cleanup:

1. **Container Removal**: After a container is stopped, you can remove it from the system using the `docker rm` command. This deletes the container instance and its associated resources, including its filesystem, network interfaces, and metadata.

2. **Image Cleanup**: If no longer needed, Docker images used to create containers can be removed using the `docker rmi` command. This frees up disk space by deleting unused images from the local image cache.

By understanding the life cycle of Docker containers, you can effectively manage and operate containerized applications, ensuring they run reliably and efficiently in your environment.


## Commonly used Docker Commands
Here's a list of commonly used Docker commands along with a brief description of each:

### Managing Images:

1. **docker pull \<image\>**: Pulls an image from a registry.

2. **docker build \<path/to/Dockerfile\>**: Builds an image from a Dockerfile.

3. **docker images**: Lists all locally available Docker images.

4. **docker rmi \<image\>**: Removes one or more Docker images.

### Managing Containers:

5. **docker run \<image\>**: Runs a container based on an image.

6. **docker ps**: Lists all running containers.

7. **docker ps -a**: Lists all containers, including stopped ones.

8. **docker start \<container\>**: Starts a stopped container.

9. **docker stop \<container\>**: Stops a running container.

10. **docker rm \<container\>**: Removes one or more containers.

11. **docker logs \<container\>**: Displays logs from a container.

12. **docker exec -it \<container\> \<command\>**: Executes a command inside a running container.

### Managing Volumes:

13. **docker volume ls**: Lists all volumes.

14. **docker volume create \<name\>**: Creates a volume.

15. **docker volume rm \<name\>**: Removes a volume.

### Managing Networks:

16. **docker network ls**: Lists all networks.

17. **docker network create \<name\>**: Creates a network.

18. **docker network rm \<name\>**: Removes a network.

### Docker Compose:

19. **docker-compose up**: Builds, (re)creates, starts, and attaches to containers for a service.

20. **docker-compose down**: Stops and removes containers, networks, volumes, and images created by `docker-compose up`.

21. **docker-compose build**: Builds or rebuilds services defined in a `docker-compose.yml` file.

22. **docker-compose logs**: Displays log output from services.

23. **docker-compose exec \<service\> \<command\>**: Executes a command in a running container.

### Docker Registry:

24. **docker login**: Logs into a Docker registry.

25. **docker push \<image\>**: Pushes an image to a registry.

26. **docker tag \<image\> \<new_image\>**: Tags an image with a new name.

27. **docker logout**: Logs out from a Docker registry.

### System Commands:

28. **docker version**: Shows the Docker version information.

29. **docker info**: Displays system-wide information about Docker.

30. **docker system prune**: Removes unused data (images, containers, volumes, networks).

These are just some of the most commonly used Docker commands. There are many more options and variations available for each command. You can use `docker --help` to get more information about any specific command or refer to the Docker documentation for detailed usage instructions.