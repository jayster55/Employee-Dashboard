# Employee Dashboard ReadMe
## Using Mercurial (for Non-Devs)
For a basic overview, Mercurial is a version management system. If you’ve heard of Git, it is practically identical in use cases.

Running mercurial commands can be done through the command line (Terminal) or through a version control IDE (Sourcetree). 

Sourcetree makes it very easy to see what your commands are doing (you actually never have to type commands), but an identical view can be seen through the ‘commits’ page on BitBucket for your respective project.

###  Installing The Repository

To install this repository do the following:

1. [Navigate to the Employee Dashboard](https://bitbucket.org/guildoneinc/employee_dashboard/src/default/)
2. Click Clone in the top right corner of the page
3. Change the dropdown in the top right corner of the popup to HTTPS instead of SSH
4. Copy that link
5. Open Terminal
6. Navigate to a folder where you want to store the project  (the $ symbol just signifies the start of the terminal line, it’s a normal coding convention for the bash/terminal language, and should not be included in your commands)

```bash
$ ls #shows all subfolders and items in the current folder
$ cd <foldername> # enters folder <foldername>
$ cd # goes back to the parent folder
```

8. Paste that command in Terminal
9. Hit enter to download the repository folder onto your local machine  

```bash
$ hg clone https://yourname@bitbucket.org/guildoneinc/employee_dashboard
```

10. Wait for the employee_dashboard folder to be downloaded into the folder you chose in step 6.
11. Download one of the software development IDEs for syntax highlighting and easy editing
	* [Sublime Text - A sophisticated text editor for code, markup and prose](https://www.sublimetext.com)
	* [Download IntelliJ IDEA: The Java IDE for Professional Developers by JetBrains (pick the Community Edition when downloading)](https://www.jetbrains.com/idea/download/#section=mac)



### Making Changes to Files

You should now be able to open files in your IDE of choice and edit them. The only file that needs to be altered to update the website (other than adding new images, ask developer for assistance) is the index.html file. This is the file that ‘creates’ the website and alters all the elements on the page. HTML is a very simple language, so any questions you have can easily be answered on StackOverflow posts on Google or by a developer at GuildOne.

Once you have made changes to a file, make sure to save it. To have your changes percolate to the server, all you will need to do is upload your changes to BitBucket and the devs will handle it from there!

To upload your code changes:
```bash
$ hg pull #if anyone else made changes, you should always get their changes first in case your changes affect theirs; if you both worked on the same file, this will cause something called a 'merge error', in this case please ask a dev for assistance
$ hg up #updates the your directory with the changes that you just downloaded, won't update anything if nothing came in the pull
$ hg commit -m "Your Message" #tells mercurial and BitBucket that you want all your changes you made on your computer bundled up in a nice little package you can send to the BitBucket server. Replace "Your Message" to detail what your changes were about
$ hg push #pushes/uploads your changes to the BitBucket repo on the GuildOne BitBucket server; the developers have set up something called a 'BitBucket Pipeline' that automatically uploads any new changes to this repo onto the Employee Dashboard website, so your changes will be up from 5-20 minutes from the time you push! Congratulations!
```


## Access to BitBucket
If you attempt to follow the link to the BitBucket repository in the first step and aren’t able to access it, please contact Kendrick or one of the other BitBucket Admins to have your account added to the permissions of the repository. This will allow you to make the changes you want to make.

## Modifying index.html
If you ever have a hard time finding things in the code, Command+F is your friend!

### Altering Daily Announcements

![](images/Screen%20Shot%202019-02-25%20at%2010.31.49%20AM.png)

Daily Announcements are altered here in the index.html file


The title for the Daily Announcements is in the h4 tag, which can be modified to anything you like.
Each item on the daily agenda has to be wrapped in an <li> tag as shown. All tags must have a closing tag (ie <tag> some stuff </tag>) to be valid in HTML, or else the website will not compile properly.


### Altering This Week at GuildOne
This Week at GuildOne is altered here in the index.html file


![](images/Screen%20Shot%202019-02-25%20at%2010.34.41%20AM.png)

The title is wrapped in the h3 tag.
The secondary title is wrapped in the h5 tag.
The button (if necessary) allows you to link to another website/webpage. Change the link between the “” in href= for the a tag (this is a link tag that makes it clickable) to change the destination of the button.

```html
<a href="YOUR LINK GOES HERE" target="_blank" class="btn-large waves-effect waves-light black">NAME OF YOUR BUTTON GOES HERE</a>
```

See the above example for changing <a> tags

### Altering QuickLinks
Similar to the above, alter quick links is done by modifying the names and hreferences in the <a> tags

![](images/3%20Image%2019-Feb-25.png)

This section will be used as an example.
The first div tag is the title of the Collapsible Header element. It also includes an icon. To change icons, see the [Materialize Icon documentation ](https://materializecss.com/icons.html).

The second div tag contains the elements inside the the collapsible element. 
* Each of the <a> tags denote separate links.
* Each of the h5 tags denoted headers to separate the links within the collapsible element
* To add more elements, copy an <a> tag from start to finish and just change the elements you need to 
* You may have noticed that the class=“” in each tag has a ‘somecolor-text’ at the end. This color allows for the of your clickable link to be changed to a different color. For updating colours, see the materialize color documentation: [Color - Materialize](https://materializecss.com/color.html).


![](images/Screen%20Shot%202019-02-25%20at%2010.45.40%20AM.png)


(The above is collapsed within the IDE so it’s easier to see what’s going on)

As you can see, each of the elements in quick links has a separate <li> tag to denote it’s clickable, collapsible portion. The title is in the header, and the body contains all the links you want associated with that title. To make a brand new title to the list of Quicklinks, copy an entire section of <li> (including the li tags) and paste it **above** the ending </ul> tag



### Altering Employee of the Month

![](images/Screen%20Shot%202019-02-25%20at%2010.47.59%20AM.png)

Employees of the month are edited in the following div.
The h3 is the title of the section.
Each h5 holds a month of the year and the respective winning employee.
Copy-paste an h5 tag within the <div></div> and edit it to add an additional month and employee. Add the newest month right below the h3 tag so it shows up in consecutive order.

### Altering Webinar Content

![](images/Screen%20Shot%202019-02-25%20at%2010.51.00%20AM.png)

Webinar content is entered here. All links can be edited in the same manner as the <a> tags above. In this case, try to only have the _most recent_ webinars content with the <b class=“red-text”>NEW</b> as this will make it easy for employees to distinguish new changes.

Copy-paste and edit an <a> tag below the <div class=“collection” style=“…”> to keep the weeks in consecutive order.

For the hrefs, as Mike has requested we have no ‘static content’ on the page (aka we should not be uploading resources directly to the website), the content links will go to a documents folder on Google Drive or wherever the current version of the webinar content exists for GuildOne (Dropbox, Confluence, etc). This will allow the dashboard to continue to be used and be very versatile as GuildOne scales up its operations in the future. These links will likely already be updated to the Google Drive links by the time you are looking at the code.

### Altering LinkedIn Cards
We need to know what’s happening at GuildOne! By updating the cards to the latest LinkedIn posts, the GuildOne employees will be able to see all new updates that their great work is producing without having to be distracted by the endless rabbit-hole of social media.

![](images/Screen%20Shot%202019-02-25%20at%2010.59.27%20AM.png)

As you can see, all the LinkedIn cards are actually in <iframe> tags. This is a custom HTML object that allows you to import content from other websites.
All you need to do is update the src=“” attribute in the tags to the newest GuildOne posts. To get the link that will work, do the following:

* Go to GuildOne’s LinkedIn https://www.linkedin.com/company/guildone-inc./

* Click the three dots in the top right corner of the post

![](images/LinkedIn1.png)

* Click Embed This Post

![](images/LinkedIn2.png)

* Copy the link in between the src quotes

![](images/Screen%20Shot%202019-02-25%20at%2011.19.58%20AM.png)

* Paste in the index.html and viola! You’re done! Reload the index.html page in your browser of choice and the changes should be updated!


### Actually Seeing Your Changes

You may be wondering how you can see your changes before you commit them, just to verify everything you’re doing is updating in your browser. Easy! Just navigate to your folder, right click the index.html file, and open it in your favourite browser. This can also be done right from you IDE as well!

![](images/Screen%20Shot%202019-02-25%20at%2011.30.43%20AM.png)

Any time you update code, you will have to reload/refresh the webpage in your browser for new changes to take affect.

FYI: The twitter embed will now show up by default when you are editing. This is due to something called cross-origin restrictions. Even now I cannot see them, but they are there I promise.

Before Upload to Site (while Editing)
![](images/5%20Image%2019-Feb-25.png)

After Upload to Site (while Live)

![](images/Screen%20Shot%202019-02-25%20at%2011.32.30%20AM.png)





#guildone