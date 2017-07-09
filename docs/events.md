# Tempus Events

@author: Brian Lin 

> This doc outlines what goes into an Event object and how this is then shown on screen

# Flows

The whole point of this is to create a calendar event that other members of the same organization can view and sign-up for. 
There should be multiple ways to do this. 

1. (Expected) First way is to have a "New Event" button. You then get a pop-up that you can populate with 
all the required fields (see below). 

2. (Expected) You should also be able to double click on a date in Calendar mode to do the same (with the date field auto-populated of course)

3. (Crazy) Going straight to the root of things, you should be able to text a number (using Twilio or Ifttt) and create an event without even logging in.

People then sign-up for events by clicking on them from their Calendar or List. A long-press (hold) should make a hovery thing (lol) that gives quick functionality like RSVP (I can drive, I can go, I can't go)
If you want more detail, like adding comments, you double click on the event. 

# Fields

## About the Event (top section)

`String name` - name of the event

`String start` - we'll use the Unix epoch time or whatever that's called

`String end` - same as above

`String description` - a bit more about the event

`User organizer` - who is organizing the event

`String signUpDeadline` - when sign-ups close

`Boolean completed` - has the event been completed (and so awards should be given out)

Note: consider having a `Boolean completed` value that is normally evaluated by seeing if current system time > `end` OR can be overrided by the organizer setting the event as completed. 

## Attendance (bottom section)

`Award award` - what attendees receive for attending the event (1 socialAward, 3 serviceHourAwards, etc.)

`List<User> attendees` - a list of the users going to the event

