// Copyright 2019 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

package com.google.sps;

import java.util.Collections;
import java.util.Arrays;
import java.util.ArrayList;
import java.util.List;
import java.util.Set;
import java.util.HashSet;
import java.util.Collection;

public final class FindMeetingQuery {
  public Collection<TimeRange> query(Collection<Event> events, MeetingRequest request) {

    List<TimeRange> unavailableTimes = new ArrayList<>();
    TimeRange candidateTime;
    List<TimeRange> availableMeetingTimes = new ArrayList<>();

    // Iterate through each persons event and add the time time range to the unavailableTimes list
    for (Event event : events){
      if (!isEventBlockingRequest(event, request)){
        unavailableTimes.add(event.getWhen());
      }
    }

    List<TimeRange> mergedUnavailableTimes = mergeTimeRanges(unavailableTimes);
    
    int prevEndTime = TimeRange.START_OF_DAY;
    
    for (TimeRange curTime: mergedUnavailableTimes){
      //Look for a possible free time ranges that can host events
      candidateTime = TimeRange.fromStartEnd(prevEndTime, curTime.start(), false);

      if (candidateTime.duration() >= request.getDuration()){
        availableMeetingTimes.add(candidateTime);
      }

      prevEndTime = curTime.end();
    }

    //check to see if there's a possible time after the end of the last meeting
    candidateTime = TimeRange.fromStartEnd(prevEndTime, TimeRange.END_OF_DAY, true);
    if (candidateTime.duration() >= request.getDuration()){
      availableMeetingTimes.add(candidateTime);
    }

    return availableMeetingTimes;
  }

  // Merge overlapping time intervals for better data handling and clarity when looking for free spaces
  public List<TimeRange> mergeTimeRanges(List<TimeRange> allUnavailableTimes){
    // Sort the unavailable times for clarity
    Collections.sort(allUnavailableTimes, TimeRange.ORDER_BY_START);

    List<TimeRange> result = new ArrayList<>();

    for (TimeRange curTime: allUnavailableTimes) {
      
      //if it doesn't overlap with the last timerange, it can simply be added
      if (result.isEmpty() || !curTime.overlaps(result.get(result.size() - 1))) {
        result.add(curTime);
      
      } else {
        
        TimeRange lastTimeRangeInResult = result.get(result.size() - 1);
        int newStart = Math.min(lastTimeRangeInResult.start(), curTime.start());
        int newEnd = Math.max(lastTimeRangeInResult.end(), curTime.end());
        
        TimeRange mergedTimeRange = TimeRange.fromStartEnd(newStart, newEnd, false);

        result.remove(lastTimeRangeInResult);
        result.add(mergedTimeRange);
      }
    }

    return result;
  }

  //checks to make sure that the meeting has atleast one person by comparing the event attendees list and the input guest list 
  public boolean isEventBlockingRequest(Event event, MeetingRequest request){
    Set<String> eventAttendees = new HashSet<>(event.getAttendees());

    //The intersection should have more than one element
    eventAttendees.retainAll(request.getAttendees());

    return eventAttendees.isEmpty();
  }
  
}