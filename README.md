# Portfolio-Project-1
Portfolio Website using HTML, CSS and Javascript

# Project Overview

## Project Schedule

|  Day | Deliverable | Status
|---|---| ---|
|Day 1| Project Description | Complete
|Day 1| Wireframes / Priority Matrix / Timeline | Complete
|Day 1| Core Application Structure (HTML, CSS, etc.) | Complete
|Day 2| Responsive Web Design | Complete
|Day 2| Extra elements and functionality | Complete
|Day 3| MVP & Bug Fixes | Complete
|Day 4| Putting together Fonts/colors/images for Branding | Complete
|Day 4| Final Touches | Incomplete
|Day 5| Present | Incomplete


## Project Description

For this project I want a clean, aesthetically pleasing website with large images, simple icons, a carousel of projects, and a contact me form at the end.
I am modeling my portfolio website after my favorite blog/podcast [Jenna Kutcher](https://jennakutcher.com/)

## Wireframes

Include images of wireframe with a description of the specific wireframe.   

- [Mobile](https://drive.google.com/file/d/1fIve_LnaWgtU_JNv1x4y_18H6YL8AeVw/view?usp=sharing)

- [Tablet](https://drive.google.com/file/d/1jEtvOgbXKUVgSWkhcauFlze5DiovKY2A/view?usp=sharing)

- [Desktop](https://drive.google.com/file/d/1QOrAW1_NSFuM0yXjblfwGd5EDrGgmD_p/view?usp=sharing)

## Time/Priority Matrix 

[Link](https://drive.google.com/file/d/1Oo29KYGktbupm9MPZZxr6nj0vqokuRuV/view?usp=sharing)

### MVP/PostMVP - 5min

#### MVP
- Site designed with flex
- Responsive from mobile->tablet->web
- Hamburger Menu that opens up to a full screen of options 
- About Me that has a read more button to open up more.
- Arrow that scrolls down the page

#### PostMVP 
- Projects Carousel that moves between options
- Skills that pop out as you hover over them
- Images that change every 10 seconds
- Front Page text that fades in when the page loads
- Contact Me that saves name and email to google sheet


## Functional Components

#### MVP
| Component | Priority | Estimated Time | Actual Time |
| --- | :---: |  :---: | :---: | 
| Hamburger | H | 1hr | 2hrs |
| Regular Nav | H | 1hr | 1hr |  
| Read More Button | L | 2.5hr|  2hr |
| Other sections and flex| M | 2hr | 3hr|
| Scrolling Arrow | L | 3hrs|  1hr | 
| Responsive | H | 3hr | 4hrs |
| Social Media Icons | L | 1hr |  1hr |
| Total | H | 15.5hrs| 14hrs |

#### PostMVP
| Component | Priority | Estimated Time | Actual Time |
| --- | :---: |  :---: | :---: | 
| Project Carousel | H | 3hr | 3hr |
| Adding Form | M | 1.5hr|  1hr | 
| Skills Hover | H | 3hr | -hr | 1hr |
| Front Page Fade In | H | 1hr | hr |
| Images that Change | H | 1hr | hr |
| Total | H | 20hrs| 5hrs |

## Additional Libraries
 Use this section to list all supporting libraries and thier role in the project. 

Icons from [Font Awesome](https://fontawesome.com/)

Fonts from [Dafont](https://www.dafont.com/)



## Code Snippet

Proud of my Read More button that displays another paragraph and the button changes to say "Read Less" to toggle back to the original length. 

```
const readMore = function(e) {
  console.log('read more')
  $("#more").slideToggle();
  $("#dots").css("display", "none");
  if ($("#read-more").text() == "Read More") { 
    $("#read-more").text("Read Less"); 
} else { 
    $("#read-more").text("Read More"); 
}; 
  e.preventDefault();
};

$('#read-more').on('click', readMore);
```

## Issues and Resolutions
 Use this section to list of all major issues encountered and their resolution.

**ERROR**: Your branch and 'origin/main' have diverged,
and have 3 and 2 different commits each, respectively.
  (use "git pull" to merge the remote branch into yours)                         
**RESOLUTION**: If you dont care about the changes you made on github.com and just want to override it with your local files then we can use git push origin main --force

**ERROR**: When clicking a button nothing was happening                         
**RESOLUTION**: Realized I needed to prevent default in my function to allow the click function to work.