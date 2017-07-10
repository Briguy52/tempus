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

## Submission and Scrolling

Two options:

1. Typeform style - only focus one field at a time, hit `Enter` after completing each one. You can still scroll up and down though. Hit submit at the end.

2. Google Forms style - can scroll through all fields. Hit `Enter` at the end.

Really, the only difference is that with Typeform you just focus one field at a time and it looks more elegant/minimal/clean/etc. because of that. Let's go for that if possible (I'm sure there's some React tutorials for that).

# Fields

## About the Event (top section)

`String name` - name of the event

`String start` - user can select a date using the date picker OR type in a String for parse (e.g. "7/13/2017 at 7pm" or "7:00 on 7/13" or "seven pm next Wednesday" are all equivalent) 

`String end` - same as above

`Location location` - location for the event, consists of a String (required) and an optional GPS pin

`String description` - a bit more about the event

`User organizer` - who is organizing the event

`String signUpDeadline` - when sign-ups close

`int capacity` - maximum number of attendees

`Boolean completed` - has the event been completed (and so awards should be given out)

Note: consider having a `Boolean completed` value that is normally evaluated by seeing if current system time > `end` OR can be overrided by the organizer setting the event as completed. 

`Award award` - what attendees receive for attending the event (1 socialAward, 3 serviceHourAwards, etc.)

`int awardAmount` - how much of the award?

`List<User> attendees` - a list of the users going to the event

