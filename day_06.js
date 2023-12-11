// --- Day 6: Wait For It ---
// Just cry now.  Get it over with early for better efficiency.

/* 
So basically.  You get a fixed amount of time to race.
Boat that goes the furthest wins.

You'll get:
    - time allowed
    - the "record" distance

Holding down the button charges Boat
Releasing allows it to move.

Will move faster if held longer.
Can only hold button at start of the race.


Mathy things:
------------------------------------------------
To win, distance_travelled > record_distance

remaining_time = allowed_time - held_time
distance_travelled = held_time * remaining_time

win if (held_time * (allowed_time - held_time)) > record_distance


Conditions:
-----------------------------------------------
Can't use 0 for held_time, boat would never move.
Can't hold for the whole allowed_time, samesies.


Thing to actually find what they want:
------------------------------------------------

Empty array of win_counts?

For each race:
    win_count = 0;

    For integer in a range of 1 to (allowed_time - 1):
        check if (held_time * (allowed_time - held_time)) > record_distance
                    if true:
                        win_count+=; (or whatever syntax is to add value to running total so far)
                        return the win_count? pop onto an array? something like that

When done with all the races:
    get product of all winning held_times found

*/