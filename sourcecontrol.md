
# Source Control ?
<img src="/images/SourceControl/Git.jpg"/>
Source cotrol is the tracking and management of changes to code. This ensures that developers are always working on the right version of source code.
Source control management (SCM) refers to tools that help you keep track of your code with a complete history of changes.
Source control is important for maintaining a single source of truth for development teams. Using it helps facilitate collaboration and accelerates release velocity.

Some benefits of source control are:
- It allows multiple developers to work on the same codebase.
- Developers can commit and merge code without conflicts.
- Developers can edit shared code without unknowingly overwriting each other’s work.

Here are five tips to keep in mind:
- Choose the right system. (Helix Core is a great one.)
- Store your code in the system.
- Pull the latest version of the code.
- Commit code often (and make notes).
- Use branches to work in parallel.
- Choosing the right system is important — that’s why it’s the first best practice. 

## List of Source Control Management Tools
- Git
- Helix Core
- Subversion
- ClearCase
- Team Foundation Server
- Mercurial 

## What Is Git?

Git source control is one of the most popular options. Some teams use open source Git. Others use enterprise Git. Some popular Git source control options include GitHub, GitLab, and Bitbucket.

It is a free, high-quality distributed version control system suitable for tracking modifications in source code in software development. It was originally created as an open-source system for coordinating tasks among programmers, but today it is widely used to track changes in any set of files. The key objectives of Git are as follows:
- Speed and efficiency
- Data integrity
- Support for distributed and non-linear workflows

## What Is GitHub?
It is a web-based Git repository. This hosting service has cloud-based storage. GitHub offers all distributed version control and source code management functionality of Git while adding its own features. It makes it easier to collaborate using Git. 
Additionally, GitHub repositories are open to the public. Developers worldwide can interact and contribute to one another’s code, modify or improve it, making GitHub a networking site for web professionals. The process of interaction and contribution is also called social coding.

##  Difference between Git and GitHub
The main Git vs GitHub difference is in their functionality. While they both provide source code management (SCM) and make merging and sharing code easier, this is pretty much where their similarities end. Think of Git as a single computer and GitHub as a network of multiple interconnected computers, all with the same end goal but a wildly different role for how to get there.

At its core, Git is a free, open-source software distributed version control system (DVCS) designed to manage all source code history. It can keep a history of commits, can reverse changes, and lets developers share code. Each developer must have Git installed on his or her local device to collaborate. It is commonly referred to as one of the best DevOps tools to understand and use in the developer space, and it’s among the most widely used tools today. Companies like Amazon, Facebook, and Microsoft use it, to name a few.

GitHub, on the other hand, is a web-based hosting service for Git repositories. It offers all of Git’s DVCS SCM and has some additional features. This includes collaboration functionality like project management, support ticket management, and bug tracking. With GitHub, developers can share their repositories, access other developers’ repositories, and store remote copies of repositories to serve as backups.

Another difference in comparison of Git vs GitHub is that the environment in which they operate. Git is installed locally on a system, so developers can manage their source code history using their local machines as repositories. This means there is no centralized server required to use Git, and no needed internet access either. Additionally, there’s no user-management system available and a proprietary desktop GUI.

GitHub, meanwhile, lives in the cloud, so Internet access is required. It also has a built-in user-management system and a user-friendly GUI. In addition to its main website, GitHub features a desktop version that can be installed on local computers to help synchronize code. It should be noted that Git can be used without GitHub, but GitHub cannot be used without Git. (GitHub primarily was built to work correctly with Git.)

Git developers themselves perform a command-line tool where code changes like commit and merge within the Git tool on their own local devices. By contrast, GitHub provides its cloud-based graphical interface where these tasks are performed. The interface also offers developers access control, collaboration features, and various task-management tools.

When it comes to commands, Git focuses exclusively on SCM tasks like push and pull, commit, reset, fetch, and merge. GitHub, meanwhile, serves as a host for Git repository teams to store their code in a centralized location. While Git is a tool that’s used to manage multiple versions of source code edits that are then transferred to files in a Git repository, GitHub serves as a location for uploading copies of a Git repository.

Git has remained an open-source tool since it was first released in 2005. To this day, it is maintained by the Linux Foundation as part of the open-source ecosystem of tools and technologies (the Linux founder also created Git). By contrast, GitHub was launched as a company in 2008 and acquired by Microsoft in 2018.

- <b>Local repository</b> 
The local repository is present on our computer and consists of all the files and folders. This Repository is used to make changes locally, review history, and commit when offline.

- <b>Remote repository</b>
The remote repository refers to the server repository that may be present anywhere. This repository is used by all the team members to exchange the changes made.


## Git Commands
Working With Local Repositories
-  <b>git init</b>
	- The command git init is used to create an empty Git repository. 
After the git init command is used, a .git folder is created in the directory with some subdirectories. Once the repository is initialized, the process of creating other files begins.</p>

-  <b>git add</b>
	- Add command is used after checking the status of the files, to add those files to the staging area.
Before running the commit command, "git add" is used to add any new or modified files.

- <b>git commit</b>
	- The commit command makes sure that the changes are saved to the local repository.
The command "git commit –m <message>" allows you to describe everyone and help them understand what has happened.

- <b>git status</b>
	- The git status command tells the current state of the repository.
	- The command provides the current working branch. If the files are in the staging area, but not committed, it will be shown by the git status. Also, if there are no changes, it will show the message no changes to commit, working directory clean.

- <b>git config</b>
	- The git config command is used initially to configure the user.name and user.email. This specifies what email id and username will be used from a local repository.
When git config is used with --global flag, it writes the settings to all repositories on the computer.


- <b>git branch</b>
	- The git branch command is used to determine what branch the local repository is on.
The command enables adding and deleting a branch.


- <b> git checkout</b>
	- The git checkout command is used to switch branches, whenever the work is to be started on a different branch.
	- The command works on three separate entities: files, commits, and branches.

-  <b>git merge</b>
	- The git merge command is used to integrate the branches together. The command combines the changes from one branch to another branch. 
	- It is used to merge the changes in the staging branch to the stable branch.


## Git Commands: Working With Remote Repositories

- git remote 
	- The git remote command is used to create, view, and delete connections to other repositories. 
The connections here are not like direct links into other repositories, but as bookmarks that serve as convenient names to be used as a reference.


- git clone
	- The git clone command is used to create a local working copy of an existing remote repository.
The command downloads the remote repository to the computer. It is equivalent to the Git init command when working with a remote repository.

-  git pull 
	- The git pull command is used to fetch and merge changes from the remote repository to the local repository.
	- The command "git pull origin master" copies all the files from the master branch of the remote repository to the local repository.

- git push
	- The command git push is used to transfer the commits or pushing the content from the local repository to the remote repository.
	- The command is used after a local repository has been modified, and the modifications are to be shared with the remote team members.

- git log
	- The git log command shows the order of the commit history for a repository.
	- The command helps in understanding the state of the current branch by showing the commits that lead to this state.

## GIT Interview Questions & Answers

1.	What is GIT?  
	- GIT is a distributed version control system and source code management (SCM) system with an emphasis to handle small and large projects with speed and efficiency.  

2. What is Distributed Control System?  
	- We work in our local machine and later we transfer the code to Centralized repository (GitHub). We don’t need to connect to centralized repository to work. 
3. What is GIT version control?  
	- GIT version control allows you to track the history of a collection of files (code files). 
	- It supports creating different versions of file collection. Each version captures a snapshot of the files at a certain point of time and You can revert the collection of files using the snapshot. (You can develop the code in different versions of java. and you can merge in Git) 
	- VCS allows you to switch between these versions. These versions are stored in a 
specific place, typically called as repository. (You can switch between different versions of java in between development process) 

5. What is a repository in GIT?  
	- A Git repository contains the history of a files.  
 
6. How can you create a local repository in Git?  
	- By using # git init command create a local repository. 

7.	What is ‘bare repository’ in GIT?  
	- A bare repository in Git just contains the version control information and no working files (no tree) and it doesn’t contain the special .git sub-directory.  

8. How to configure GitHub repository locally?  
	- <b>it config --global user.name "user_name" </b>
	- <b>git config --global user.email "user_email"</b>  

9.	How to Create Alias to git commands 
	- <b>git config --global alias.lo "log --oneline" </b> 	-----> To create an Alias to Command 
	- <b>git config --global --unset alias.lo </b>   -----> To Remove an Alias   
	- <b>git config --global --unset user.name </b>     -----> to remove username 
10.	What is the git clone?  
	-To download an existing repository from Centralized (Github) to local system. 
	- <b>git clone <url> </b>	

11.	What is ‘git add’? 
	- To add files from work area to Index/staging/cache area.  
 -	- <b>git add <file_name1> <file_name2> </b>

12.	What is Staging Area?  
	- staging area means “holding area”. Before the commits, it can be formatted and reviewed in an intermediate area known as staging or Index Area. 

13.	What is the use of ‘git log’?  
	- To see the commits. Also, we can find specific commits in your project history- by author, date, content or history. 
 		- <b>git  log </b>	 	-----> To show the Git Commits 
 		- <b>git  log   -5</b> 	 	-----> To show Recent 5 Commits 
 		- <b>git  log    --oneline </b> -----> To Display the each commit in one line  
		- <b>git  log   --since=2023-10-21</b> 
		- <b>git  log   --until=2023-10-18 </b>
 		- <b>git  log   --author="user_name" </b>
		- <b>git  log   --grep="Index" </b>
 		- <b>git  log   --oneline   --author="user_name" </b>

14.	 How can we add modified/updated/edited files to the staging area and commit then at the same time? 
	- git  commit  -a  -m  "Do Something once more" 

15.	How to edit an incorrect commit message in Git?  Or How can you fix a broken commit? 
	- git  commit  --amend  -m  "This is your new Git Message" 

16.	How to get back a commit to staging area? 
	- git  reset  --soft  <previous_commit id> 

17.	How to get back a file from staging area to working area? 
	- git  reset  head  <file_name> 

18.	How to get back a commit to work area? 
	- git  reset  --mixed  <previous commit id> 


19.	What is git reset? 
	- Reset the current HEAD state to specific state. 

20.	What is ‘head’ in git and how many heads can be created in a repository? 
	- A	‘head’ is simply a reference to a commit object. In every repository, there is a default head referred as “Master”.  A repository can contain any number of heads. 

21.	What is .gitignore file? 
	- Keep the files names in .gitignore then that files not add and commit, just skip that files while adding and committing. 

22.	How to see the difference between 2 commits? 
	-	git  diff  <commit_id1>..<commit_id2> 

23.	when file have staging area or file have committed if file is deleted in local repository unfortunately how to get back that file to staging area? 
	- git checkout  --<file_name> 
24.	How to create a branch? 
 	- git  branch  <branch_name> 
25.	How to checkout to branch?
  	- git  checkout  <branch_name> 
26.	How to create branch while checkout?
 	- git  checkout  -b  <branch_name> 

27.	How do you rename the local branch? 
	- git  branch  -m  <old_branch_name>   <new_branch_name> 

28.	How to see the branch list?
  - git   branch  
29.	How to see the remote branch list? 
 	- git  branch  -r 
	Or 
	- git  remote   show   origin 


30.	How to see the local and remote branch list? 
	- git  branch  -a 

31.	How to delete a branch? 
	- git  branch   -d  <branch_name> 
Or 
	- git  branch  -D   <branch_name> 

32.	How to delete a Remote Branch?  
	- git  push origin  -d  <branch_name> 

33.	How to see the difference between 2 branches 
	- git  diff  <branch1>..<branch2 > 

34.	What is git push?  
	- git push is to push commits from your local repository to a remote repository.  

35.	How do you push the files to master branch in remote repo? 
 	- git push  	(you must be in master branch) 

36.	How do you push files from local to particular branch in remote repo? 
 -	git push origin <branch_name>  
(or) 
 -	git push --set-upstream <branch_name> 

37.	How to push new branch and its data to remote repository? 
 	- git push <github_repository_path> <branch_name> 
(or) 
 	- git push --set-upstream <branch_name> 

38.	What is git pull?  
	- Git pull downloads and merges a ‘branch data’ from remote repository to local repository. It may also lead to ‘merge conflicts’ if your local changes are not yet committed. Use ‘git stash’ command to Hide your local changes before git pull. 
	- git pull  (git fetch + git merge.) 

39.	How do you pull a file from particular remote branch? 
	- git pull origin <branch_name> 

40.	How do you download a remote branch to local without merge? 
 	- git fetch origin <branch_name> # git checkout  <downloaded_branchname> 

41.	What is git Fetch?  
	- git fetch is only downloads new data from a remote repository, but it doesn’t integrate any of the downloaded data into your working files. All it does is provide a view of this data. 
	- git  fetch   <branch_name> 
	- git  fetch  origin  <branch_name>  

42.	What is difference between git clone & git pull?  
	- If you want to download whole existing repository than use Git Clone.  
	- If you have already repository but you want to take new updates of existing repository than use git pull command.  

43.	What is git merge?  
	- Git merge is used to combine two branches. 
	- git merge <branch_name> 
Note: you should be in target branch. Then run the command 

44.	What is git conflict? What is the scenario you will get git conflict error? 
	-	For example, if you and another person both edited the same file on the same lines in different branches of the same Git repository, you'll get a merge conflict error when you try to merge these branches. You must resolve this merge conflict with a new commit before you can merge these branches. 

45.	How do you resolve merge conflict? 
	- Will inform the developers regarding this merge conflict. They will change the code and inform us. edit the files to fix the conflicting changes and then add & commit. 

46.	How do you skip from merge conflict? 
	- git merge --abort 

47.	What is the function of ‘git rm’?  
	- To remove the file from the work area/staging area and also from your disk ‘git rm’ is used. You can revert a deleted file.  if it is deleted using ‘git rm’. If you deleted a file ‘rm’ command then you can’t get it. 

48.	How will you know in GIT if a branch has been already merged into master?  
	- git branch -merged It lists the branches that have been merged into the current branch. 
	- git branch -no-merged It lists the branches that have not been merged. 

49.	What is branching? What is the purpose of branching in GIT?  
	- Git supports branching which means that you can work on different versions of your collection of files. A branch allows the user to switch between these versions so that he can work on different changes independently from each other. 

50.	What is the criteria u merge two branches? 
	- We have developed one module in one branch and another module in another branch. After the development, based on the requirement we do merge these two branches. Or One branch is development branch, another branch is test branch. 

51.	Describe branching strategy you have used? 

- <b>Feature branching </b>
A feature branch model keeps all of the changes for a particular feature inside of a branch. When the feature is fully tested and validated by automated tests, the branch is then merged into master. 
- <b>Task branching </b>
In this model each task is implemented on its own branch with the task key included in the branch name. It is easy to see which code implements which task, just look for the task key in the branch name. 
- <b>Release branching </b>
Once the develop branch has acquired enough features for a release, you can clone that branch to form a Release branch. Creating this branch starts the next release cycle, so no new features can be added after this point, only bug fixes, documentation generation, and other release-oriented tasks should go in this branch. Once it is ready to ship, the release gets merged into master and tagged with a version number. In addition, it should be merged back into develop branch, which may have progressed since the release was initiated. 
 
52.	What is git stash? 
	- Stashing takes the Temporary stored state of your working directory. # git  stash  save  "<message>" 	------> to store the data into stash 
		- git  stash list  	 	 	------> to see the stash list 
		- git  stash apply  <stash#>  	------> to copy the data into branches 
		- git  stash pop  <stash#>     	------> to move the data into branches 
		- git  stash drop  <stash#>   	------> to delete the particular stash 
		- git  stash clear     	 	------> delete the entire stash list 

53.	When we use git Stash? 
	- If you are checking out from one branch to another branch but you have uncommitted file that you don't want to move then keep that file in stash area. 
	- When you are merging two branches and you don't want some files to merge, then we move that files to stash area. 
	- When you are pulling (fetch + merge) a branch/file and you don't want some files to merge, then we move that files to stash area. 

54.	What is another option for merging in git? 
 	- git rebasing command is an alternative to merging in git. 
55.	What is difference between git merge and git rebase? 
	- git merge applies all unique commits from branch A into branch B in one commit with final result. 
	- git rebase gets all unique commits from both branches and applies them one by one. 
	- git merge doesn’t rewrite commit history, just adds one new commit 
	- git rebase rewrites commit history but doesn’t create extra commit for merging 

56.	How do you undo the last commit? 
	- git  revert  <commit_id> 

57.	How to Change the URL for a remote Git repository? 
	- git  remote   set-url   origin   git://this.is.new.url 

58.	What is pull request? 
	- Take some changes from a particular branch and bring them into another branch. 	 
 
59.	Why GIT better than Subversion (SVN)? 
	- Git is an opensource version control system; it will allow you to run ‘version' of a project. Multiple developers can check out, and upload changes and each change can then be attributed to a specific developer. 

60.	How to Lock a branch? why we need to lock a branch? 
	- On GitHub, navigate to the main page of the repository. 
	- Under your repository name, click Settings. 
	- In the left menu, click Branches. 
	- Select the branch you want to mark protected using the drop-down menu. 
	- Select Protect this branch. 

61.	How to delete Repository in GitHub? 
	- On GitHub, navigate to the main page of the repository. 
	- Under your repository name, click Settings. 
	- Scroll to the bottom of the page and you will find Delete this repository button 
	- When you click on that button, another pop up will appear, here you need to type in the name of your repository name and click on the button bellow which says: I understand the consequences, delete the repository. 
62. how to give an access to a specific person to repository? 
	- You can invite users to become collaborators to your personal repository. 
	- Under your repository name, click Settings. 
	- In the left sidebar, click Collaborators. 
	- Under "Collaborators", start typing the collaborator's username. 
	- Select the collaborator's username from the drop-down menu. 
	- Click Add collaborator. 
	- The user will receive an email inviting them to the repository. Once they accept your invitation, they will have collaborator access to your repository. 
